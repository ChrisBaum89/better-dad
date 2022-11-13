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
      assign_tasks(@user)
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
    update_score(@user)
    update_task(@user)
    update_badge(@user)
    @user.save

    options = {
      include: [:assigned_tasks, :completed_tasks, :earned_badges]
    }

    render json: {
      user: UserSerializer.new(@user, options)
    }
  end

  def update_score(user)
    user.score = user.score + (params[:user][:score]).to_i
  end

  def update_task(user)
    @completed_task = Task.find_by_id(params[:user][:task_id])
    CompletedTask.create(user_id: user.id, task_id: @completed_task.id)

    # remove @completed_task from assigned tasks
    user.assigned_tasks.delete_by(task_id: @completed_task.id)
  end

  def update_badge(user)
    applicable_badges = Badge.all.select{|badge| user.score >= badge.score_threshold}
    applicable_badges.each do |badge|
      if user.badges.include?(badge)
      
     elsif 
        EarnedBadge.create(user_id: user.id, badge_id: badge.id)
      end
    end
  end

  def index
    @users = User.all
    render json: UserSerializer.new(@users)
  end

  def assign_tasks(user)
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
