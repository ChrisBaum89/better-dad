class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
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
    render json: UserSerializer.new(@user)
  end

  def update
    #update user score
    #verify if a badge is earned
  end
  
  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :name)
  end
end
