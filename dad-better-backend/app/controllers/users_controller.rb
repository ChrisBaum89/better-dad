class UsersController < ApplicationController

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

    def create
        @user = User.new(user_params)
        @user.score = 0
        @user.level = 0
        binding.pry
        if @user.valid?
            @user.save
            render json: { user: UserSerializer.new(@user) }, status: :created
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
