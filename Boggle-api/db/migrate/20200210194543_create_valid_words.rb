class CreateValidWords < ActiveRecord::Migration[6.0]
  def change
    create_table :valid_words do |t|
      t.string :word

      t.timestamps
    end
  end
end
