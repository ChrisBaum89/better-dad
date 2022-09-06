class UsersController < ApplicationController

    def index
        users = User.all
        options = {include: [:children, :badges]}
        render json: UserSerializer.new(users, options)
    end

    def show
        user = User.find_by(id: params[:id])
        options = {
            include: [:children, :badges]
        }
        render json: UserSerializer.new(user, options)
    end
end
