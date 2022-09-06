Rails.application.routes.draw do
  resources :quotes
  resources :favorites
  resources :completedtasks
  get '/jokes', to: 'tasks#create_tasks_from_jokes'
  resources :tasks
  resources :achievements
  resources :badges
  resources :children
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
