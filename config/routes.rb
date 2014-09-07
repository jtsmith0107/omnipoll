Rails.application.routes.draw do
  

  namespace :api, defaults: {format: :json} do
    resources :questions, only: [:create, :update, :destroy, :show, :index]
    resources :answers, only: [:create, :update, :destroy]
    resources :answerchoices, only: [:create, :update, :destroy]
    resources :poll_rooms, only: [:create, :index, :show, :update, :destroy]
  end

  root to: 'staticpages#root'
  resources :users
  resource :session

  get '/helloworld/', to: 'api/questions#helloworld', as: 'helloworld', defaults: {format: :json}

end
