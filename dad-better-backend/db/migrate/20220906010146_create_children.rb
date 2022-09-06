class CreateChildren < ActiveRecord::Migration[6.1]
  def change
    create_table :children do |t|
      t.string :name
      t.string :birthday
      t.string :gender
      t.string :user_id

      t.timestamps
    end
  end
end
