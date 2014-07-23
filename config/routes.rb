Rails.application.routes.draw do
  root to: 'staticpages#root'
  resources :users
  resource :session

end
