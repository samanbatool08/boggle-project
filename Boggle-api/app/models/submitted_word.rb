class SubmittedWord < ApplicationRecord
  belongs_to :game

  before_save :set_real_attr

  def set_real_attr
    real = !!ValidWord.find_by(word: self.word)
    self.real = real
  end
  # def self.real_word?(word)
  #   !!ValidWord.find_by(word: word)
  # end

end
