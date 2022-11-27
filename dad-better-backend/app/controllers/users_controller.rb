class UsersController < ApplicationController
  require 'json'
  require 'httparty'
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.create(user_params)
    @user.score = 0
    @user.level = 0
    valid_user(@user)
  end

  def valid_user(user)
    if user.valid?
      user.save
      user.assign_daily_tasks
      update_badge(user)
      token = encode_token(user_id: user.id)
      render_user_json(user, token)
    else
      render_error_json
    end
  end

  def render_error_json
    render json: {
             error: 'failed to create user'
           },
           status: :unprocessable_entity
  end

  def show
    # add assigned tasks and completed tasks
    user = User.find_by_id(params[:id])
    options = {
      include: %i[assigned_tasks completed_tasks earned_badges]
    }
    render json: UserSerializer.new(user, options)
  end

  def update_user
    @user = User.find_by_id(params[:user][:user_id])
    @message = ''
    @update_type = params[:user][:update_type]
    case @update_type
    when 'task_completed'
      @task = Task.find_by_id(params[:user][:task_id])
      mark_task_completed(@user, @task)
      @user.calc_score
      update_badge(@user)
    when 'task_favorited'
      @completed_task = CompletedTask.find_by_id(params[:user][:task_id])
      favorite_task(@completed_task)
    when 'update_user_settings'
      @user = User.find_by_id(params[:user][:user_id])
      update_user_settings(@user)
    when 'update_password'
      update_password(@user)
    end
    @user.save
    token = params[:jwt]

    options = {
      include: %i[assigned_tasks completed_tasks earned_badges]
    }

    render json: {
      user: UserSerializer.new(@user, options),
      message: @message,
      jwt: token,
      quote: quote_of_day(),
    }
  end

  def update_user_settings(user)
    if user
      user.name = params[:user][:name]
      user.email = params[:user][:email]
      @message = 'settings updated'
    else
      @message = 'settings update failed'
    end
  end

  def update_password(user)
    if user.authenticate(params[:user][:existing_password])
      user.password = params[:user][:new_password]
      @message = 'password updated'
    else
      @message = 'password update failed'
    end
  end

  def mark_task_completed(user, task)
    CompletedTask.create(user_id: user.id, task_id: task.id)

    # remove @completed_task from assigned tasks
    user.assigned_tasks.delete_by(task_id: task.id)
  end

  def favorite_task(task)
    task.favorite = !task.favorite
    task.save
  end

  def index
    @users = User.all
    render json: UserSerializer.new(@users)
  end

  private

  def user_params
    params.require(:user).permit(:user_id, :username, :password, :email, :name, :score)
  end
end
