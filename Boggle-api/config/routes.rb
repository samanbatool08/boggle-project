Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games do 
        resources :submitted_words
            end
    end
  end


  # get '/submittedwords' => 'submittedwords#show'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
