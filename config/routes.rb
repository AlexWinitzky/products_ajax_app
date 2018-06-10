Rails.application.routes.draw do
  root 'welcome#index'

  resources :products do
  end
end