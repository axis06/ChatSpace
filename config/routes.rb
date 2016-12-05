Rails.application.routes.draw do
  devise_for :users
  resources :groups, except: [:delete] do
    resources :messages, only: [:create]
  end
  get 'home/index'
  root 'home#index'
end
