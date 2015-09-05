Rails.application.routes.draw do
  get 'prequake/new'

  get 'prequake/create'

  get 'prequake/show'

  get 'prequake/edit'

  get 'prequake/update'

  get 'prequake/destroy'

  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  get 'users/new'

  get 'users/create'

  get 'users/show'

  get 'site/index'

  get "/signup", to: "users#new"
  get "/profile", to: "users#show"
  get '/users/edit', to: "users#edit"
  post '/users/edit', to: 'users#update'
  put '/users/edit', to: 'users#update', as: :user

  resources :users

  # sessions routes
  get "/login", to: "sessions#new"
  get "/logout", to: "sessions#destroy"
  delete "/logout", to: "sessions#destroy"

  # post "/sessions", to: "sessions#create" 
  resources :sessions, only: [:create]
  root 'site#index'

  get '/prequakelist', to: "prequake#index"

  resources :prequake

  get '/postquakelist', to: "postquake#index"
  resources :postquake

  
end
