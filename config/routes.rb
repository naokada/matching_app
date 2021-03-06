Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: "users/sessions",
  }
  root 'proposals#index'
  resources :proposals
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
