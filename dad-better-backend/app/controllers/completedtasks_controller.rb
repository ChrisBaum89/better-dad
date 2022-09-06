class CompletedtasksController < ApplicationController
    def index
        tasks = Completedtask.all
        render json: CompletedtaskSerializer.new(tasks)
    end
end
