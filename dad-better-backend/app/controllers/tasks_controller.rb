class TasksController < ApplicationController
    require 'uri'
    require 'net/http'
    require 'openssl'

    
    def index
        tasks = Task.all
        render json: TaskSerializer.new(tasks)
    end

    def get_joke
        url = URI("https://dad-jokes.p.rapidapi.com/random/joke?count=5")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)
        request["X-RapidAPI-Key"] = '78247a2cd9msh0b1b327f3019cf5p1362f8jsndd71d1347360'
        request["X-RapidAPI-Host"] = 'dad-jokes.p.rapidapi.com'
        response = http.request(request)
        puts response.read_body
        render json: response.read_body
    end
end
