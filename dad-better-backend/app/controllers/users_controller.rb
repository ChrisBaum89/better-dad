class UsersController < ApplicationController
  require 'json'
  require 'httparty'
  skip_before_action :authorized, only: [:create]

  def profile
    # render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.create(user_params)
    @user.score = 0
    @user.level = 0
    if @user.valid?
      @user.save
      new_user_assign_tasks(@user)
      @token = encode_token(user_id: @user.id)
      render_user_json(@user, @token)
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
    @update_type = params[:user][:update_type]
    case @update_type
    when 'task_completed'
      @task = Task.find_by_id(params[:user][:task_id])
      update_badge(@user)
      mark_task_completed(@user, @task)
    when 'task_favorited'
      @completed_task = CompletedTask.find_by_id(params[:user][:task_id])
      favorite_task(@completed_task)
    end
    token = params[:jwt]
    @user.save

    options = {
      include: %i[assigned_tasks completed_tasks earned_badges]
    }

    render json: {
      user: UserSerializer.new(@user, options),
      jwt: token
    }
  end

  def mark_task_completed(user, task)
    CompletedTask.create(user_id: user.id, task_id: task.id)

    # remove @completed_task from assigned tasks
    user.assigned_tasks.delete_by(task_id: task.id)
    user.calc_score
  end

  def update_badge(user)
    applicable_badges = Badge.all.select { |badge| user.score >= badge.score_threshold }
    applicable_badges.each do |badge|
      if user.badges.include?(badge)

      elsif EarnedBadge.create(user_id: user.id, badge_id: badge.id)
      end
    end
  end

  def favorite_task(task)
    if task.favorite
      task.favorite = false
    else
      task.favorite = true
    end
    task.save
  end

  def index
    @users = User.all
    render json: UserSerializer.new(@users)
  end

  def new_user_assign_tasks(user)
    for i in 1..5
      random_task = rand(1..Task.all.length)
      AssignedTask.create(user_id: user.id, task_id: random_task)
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_id, :username, :password, :email, :name, :score)
  end
end
