class CreateBadges < ActiveRecord::Migration[6.1]
  def change
    create_table :badges do |t|
      t.string :name
      t.string :description
      t.integer :score_threshold
      t.string :image

      t.timestamps
    end
  end
end
