Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'welcome/index'

  resources :articles do
    resources :comments
  end

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
