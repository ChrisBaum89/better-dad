class TasksController < ApplicationController
  require 'json'
  require 'httparty'

  jokes = []

  def index
    tasks = Task.all
    render json: TaskSerializer.new(tasks)
  end

  # to generate jokes, navigate to http://localhost:3000/jokes.  10 joke tasks will be created, pulling
  # from the dad jokes API
  def create_tasks_from_jokes
    10.times do
      response = HTTParty.get('https://icanhazdadjoke.com/',
                              headers: {
                                'Accept' => 'application/json'
                              })
      create_task(response.body)
    end
  end

  def create_task(response)
    object = JSON.parse(response).with_indifferent_access
    unless Task.exists?(identifier: object[:id])
      newTask = Task.create(description: object[:joke], identifier: object[:id], value: 10, category: 'joke')
    end
  end

  def assign_tasks
    10.times do
      random_task_id = rand(1..Task.all.length)
      AssignedTask.create(user_id: 3, task_id: random_task_id)
  end 
end
