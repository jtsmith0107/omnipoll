Rails.application.routes.draw do
  resources :questions

  root to: 'staticpages#root'
  resources :users
  resource :session

end
