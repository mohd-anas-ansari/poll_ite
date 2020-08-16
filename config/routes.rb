Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/demo" => "demo#index"
  post "/vote" => "votes#vote_and_show"
  resources :polls
end
