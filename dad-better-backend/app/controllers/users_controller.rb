class UsersController < ApplicationController

    def index
        users = User.all
        options = {include: [:children, :badges, :tasks]}
        render json: UserSerializer.new(users, options)
    end

    def show
        user = User.find_by(id: params[:id])
        options = {
            include: [:children, :badges, :tasks]
        }
        render json: UserSerializer.new(user, options)
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            render json: {user: UserSerializer.new(@user)}, status :created
        else
            render json: {
                error: 'failed to create user'
            },
            status: :unprocessable_entity
        end
    end
end
