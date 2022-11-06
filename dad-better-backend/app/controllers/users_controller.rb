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
      @token = encode_token(user_id: @user.id)
      render json: {
               user: UserSerializer.new(@user),
               jwt: @token
             },
             status: :created
    else
      render json: {
               error: 'failed to create user'
             },
             status: :unprocessable_entity
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    options = {
      include: %i[assigned_tasks completed_tasks]
    }
    render json: UserSerializer.new(@user, options)
  end

  def updatescore
    @user = User.find_by_id(params[:user][:user_id])
    original_score = @user.score
    @user.score = @user.score + (params[:user][:score]).to_i
    @user.save
    if @user.score > original_score
      render json: {
        user: UserSerializer.new(@user)
      }
    else
      render json: {
               error: 'failed to update score'
             },
             status: :unprocessable_entity
    end
  end

  def updatetask
    @user = User.find_by_id(params[:user][:user_id])
    @completed_task = Task.find_by_id(params[:user][:task_id])
    CompletedTask.create(user_id: @user.id, task_id: @completed_task.id)
    
    #remove @completed_task from assigned tasks
    @user.assigned_tasks.delete_by(task_id: @completed_task.id)
    binding.pry
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
