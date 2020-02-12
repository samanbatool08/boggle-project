class Api::V1::SubmittedWordsController < ApplicationController

    def index
        game = Game.find(params[:game_id])
        submitted_words = game.submitted_words
        render json: submitted_words
    end

    def create
        game = Game.find(word_params[:game_id])
        words = word_params[:word]
        words.each { |word| SubmittedWord.create({word: word.downcase!, game_id: game.id})}
        game.create_score
        render json: game, includes: :submitted_words
    end
    
    private

    def word_params
        params.require(:submitted_word).permit(:game_id, word: [])
    end

  
end
