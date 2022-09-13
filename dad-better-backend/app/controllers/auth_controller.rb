class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(username: user_params[:username])

    # User#authenticate comes from BCrypt
    if @user && @user.authenticate(user_params[:password])
      # encode token comes from ApplicationController
      token = encode_token({ user_id: @user.id })
      cookies.signed[:jwt] = {value: token, httponly: true, expires: 1.hour.from_now}
      #binding.pry
      render json: {
               user: UserSerializer.new(@user),
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

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
