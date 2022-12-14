Rails.application.routes.draw do
      resources :users, only: [:create, :show, :index, :update]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      post '/updateuser', to: 'users#update_user'
      #post '/updatescore', to: 'users#updatescore'
      #post '/updatetask', to: 'users#updatetask'

  # resources :assigned_tasks
  # resources :completed_tasks
  # resources :earned_badges
  # resources :quotes
  get '/jokes', to: 'tasks#create_tasks_from_jokes'
  get '/assigntasks', to: 'tasks#assign_tasks'
   resources :tasks
  # resources :badges
  # resources :children
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end