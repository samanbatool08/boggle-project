class SubmittedWord < ApplicationRecord
  belongs_to :game

  before_save :set_real_attr

  def set_real_attr
    real = !!ValidWord.find_by(word: self.word)
    self.real = real
  end

  # after_create :set_final_score

  # def set_final_score
  #     game = Game.find(params[:id])
  #     final_score = game.submitted_words.select {|word| word.real == true}.length
  #     game.points = final_score
  # end


  # def self.real_word?(word)
  #   !!ValidWord.find_by(word: word)
  # end

end
