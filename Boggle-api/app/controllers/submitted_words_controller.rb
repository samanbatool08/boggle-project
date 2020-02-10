class SubmittedWordsController < ApplicationController

    def index
        submitted_words = SubmittedWord.all
        render json :submitted_words
    end

    def create
        word = params[:word]
        submitted_word = SubmittedWord.create(game_id: params[game_id], words: word, real_word: SubmittedWord.real_word?(word))
        
    end
    
    private

    def word_params
        params.require(:submitted_word).permit(:game_id, :word)
    end

  
end
