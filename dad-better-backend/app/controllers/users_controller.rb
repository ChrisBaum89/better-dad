class UsersController < ApplicationController

    def index
        users = User.All
        render json: users, include:[:username, :name, :email]
end
