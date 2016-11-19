Rails.application.routes.draw do
  devise_for :users
  resources :messages, only: [:create]
  resources :groups, only: [:new,:create,:edit,:update]
  get 'home/index'
  root 'home#index'
end
