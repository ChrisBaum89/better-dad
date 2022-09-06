Rails.application.routes.draw do
  resources :favorites
  resources :completedtasks
  get '/jokes', to: 'tasks#get_joke'
  resources :tasks
  resources :achievements
  resources :badges
  resources :children
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
