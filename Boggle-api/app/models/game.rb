class Game < ApplicationRecord
    has_many :submitted_words


    def create_score
        final_score = self.submitted_words.select {|word| word.real == true}.length
        self.update(points: final_score)
    end
    
end
