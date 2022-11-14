class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(username: user_params[:username])

    # User#authenticate comes from BCrypt
    if @user && @user.authenticate(user_params[:password])
      # encode token comes from ApplicationController
      token = encode_token({ user_id: @user.id })
      cookies.signed[:jwt] = {value: token, httponly: true, expires: 1.hour.from_now}
      assign_daily_tasks(@user)

      options = {
        include: [:assigned_tasks, :completed_tasks, :earned_badges]
      }

      render json: {
               user: UserSerializer.new(@user, options),
               jwt: token
             },
             status: :accepted
    else
      render json: {
               message: 'Invalid username or password'
             },
             status: :unauthorized
    end
  end

  def assign_daily_tasks(user)
    if not tasks_assigned_today?(user) and not tasks_completed_today?(user)
      for i in 1..5
        random_task = rand(1..Task.all.length)
        AssignedTask.create(user_id: user.id, task_id: random_task)
      end
    end
  end

  def tasks_assigned_today?(user)
    return user.assigned_tasks.where(created_at: Time.current.all_day).length == 5
  end

  def tasks_completed_today?(user)
    return user.completed_tasks.where(created_at: Time.current.all_day).length > 0
  end

  #May want to add task to delete assigned tasks from previous days

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
