class CreateSubmittedWords < ActiveRecord::Migration[6.0]
  def change
    create_table :submitted_words do |t|
      t.string :word
      t.boolean :real
      t.references :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
