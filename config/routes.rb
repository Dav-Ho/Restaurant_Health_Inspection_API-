Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "restaurants" => "restaurants#index"
    end
  end
end
