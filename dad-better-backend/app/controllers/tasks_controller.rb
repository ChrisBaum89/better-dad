class TasksController < ApplicationController
    def index
        tasks = Tasks.all
        render json: TaskSerializer.new(Tasks)
    end
end
