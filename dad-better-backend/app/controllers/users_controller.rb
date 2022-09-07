class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]



    def create
        @user = User.create(user_params)
        if @user.valid?
          @token = encode_token(user_id: @user.id)
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
        params.permit(:username, :password, :email, :name)
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