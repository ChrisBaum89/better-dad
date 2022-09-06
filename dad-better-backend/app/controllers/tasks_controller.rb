class TasksController < ApplicationController
    require 'json'
    require 'httparty'

    jokes = []
    
    def index
        tasks = Task.all
        render json: TaskSerializer.new(tasks)
    end

    def create_tasks_from_jokes
        10.times{
            response = HTTParty.get("https://icanhazdadjoke.com/",
            headers: {
                "Accept" => "application/json"
                }
            )
            create_task(response.body)
       }
       binding.pry
        
    end

    def create_task(response)
        object = JSON.parse(response).with_indifferent_access
        if not Task.exists?(:identifier => object[:id])
            newTask = Task.create(description: object[:joke], identifier: object[:id], value: 0, category: "joke")
        end
    end
end
