class CreateApiV1Games < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :username
      t.integer :points

      t.timestamps
    end
  end
end
