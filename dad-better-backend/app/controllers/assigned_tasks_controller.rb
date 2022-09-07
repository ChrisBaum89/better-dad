class AssignedTasksController < ApplicationController
    def index
        assigned_tasks = AssignedTask.all
        render json: AssignedTaskSerializer.new(assigned_tasks)
    end
end
