Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources 'random_greeting', only: [:index]

  # Defines the root path route ("/")
  get '*path', to: 'app#index'
  root "app#index"
end
