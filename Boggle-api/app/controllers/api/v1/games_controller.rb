class Api::V1::GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end

    def create
        game = Game.create(game_params)
        render json: game
    end

    def show
        game = Game.find(params[:id])
        render json: game.to_json(:include => {
            :submitted_words => {:only => [:word, :real]}
        })
    end


    private
    def game_params
        params.require(:game).permit(:username, :points)
    end

end
