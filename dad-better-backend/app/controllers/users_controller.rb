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
          @token = issue_token(user_id: @user.id)
          render json: {
                   user: UserSerializer.new(@user),
                   jwt: @token,
                 },
                 status: :created
        else
          render json: {
                   error: 'failed to create user',
                 },
                 status: :unprocessable_entity
        end
      end
    
      private
    
      def user_params
        params.require(:user).permit(:username, :password, :email, :name)
      end
end

    # def index
    #     users = User.all
    #     options = {include: [:children, :badges, :tasks]}
    #     render json: UserSerializer.new(users, options)
    # end

    # def show
    #     user = User.find_by(id: params[:id])
    #     options = {
    #         include: [:children, :badges, :tasks]
    #     }
    #     render json: UserSerializer.new(user, options)
    # end