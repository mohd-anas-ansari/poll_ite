Rails.application.routes.draw do
  # get 'sessions/new'
  # get 'sessions/create'
  # get 'sessions/login'
  # get 'sessions/welcome'
  # get 'users/new'
  # get 'users/create'

  root "polls#index"
  resources :users, only: [:new, :create]

  resources :polls
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'welcome', to: 'sessions#welcome'
  get 'authorized', to: 'sessions#page_requires_login'
  
  get "/vote/:id" => "votes#show_vote_count_and_ballot_in_which_user_participated"

  post "/vote" => "votes#vote_and_show"
  

  get "/demo" => "demo#index"
end
