Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root to: "login#index"
  devise_scope :user do
    delete "/users/sign_out" => "devise/sessions#destroy"
  end
end
