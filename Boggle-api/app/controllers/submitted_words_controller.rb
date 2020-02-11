class Api::V1::SubmittedWordsController < ApplicationController

    def index
        game = Game.find(params[:game_id])
        submitted_words = game.submitted_words
        render json: submitted_words
    end

    def create
        game = word_params[:game_id]
        words = word_params[:word]
        words.each { |word| SubmittedWord.create({word: word, game_id: game})}

        # submitted_word = SubmittedWord.create(word_params) 
    end
    
    private

    def word_params
        params.require(:submitted_word).permit(:game_id, word: [])
    end

  
end
