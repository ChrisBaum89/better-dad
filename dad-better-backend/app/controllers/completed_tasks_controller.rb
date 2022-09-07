class CompletedTasksController < ApplicationController
    def index
        completed_tasks = CompletedTask.all
        render json: CompletedTaskSerializer.new(completed_tasks)
    end
end
