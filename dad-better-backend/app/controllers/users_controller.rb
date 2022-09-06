class UsersController < ApplicationController

    def index
        users = User.All
        render json: UserSerializer.new(users)
end
