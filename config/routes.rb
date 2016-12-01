Rails.application.routes.draw do
  devise_for :users
  resources :messages, only: [:create]
  resources :groups, except: [:delete]
  get 'home/index'
  root 'home#index'
end
