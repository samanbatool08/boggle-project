Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games do 
        resources :submitted_words
      end
    end
  end
end
