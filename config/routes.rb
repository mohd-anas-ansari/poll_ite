Rails.application.routes.draw do
  # get 'sessions/new'
  # get 'sessions/create'
  # get 'sessions/login'
  # get 'sessions/welcome'
  # get 'users/new'
  # get 'users/create'

  resources :users, only: [:new, :create]

  resources :polls
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'welcome', to: 'sessions#welcome'
  get 'authorized', to: 'sessions#page_requires_login'
  
  get "/vote" => "votes#show_votes_count_and_ballots_where_user_participated"

  post "/vote" => "votes#vote_and_show"
  

  get "/demo" => "demo#index"
end
