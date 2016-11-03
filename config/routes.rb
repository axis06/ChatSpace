Rails.application.routes.draw do
  devise_for :users
  resources :messages, only: [:create]
  get 'home/index'
  root 'home#index'
end
