Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resources :questions
    resources :answers
  end

  root to: 'staticpages#root'
  resources :users
  resource :session

  get '/helloworld/', to: 'questions#helloworld', as: 'helloworld', defaults: {format: :json}

end
