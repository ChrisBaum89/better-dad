class CreateUsersBadges < ActiveRecord::Migration[6.1]
  def change
    create_table :earned_badges do |t|
      t.integer :user_id
      t.integer :badge_id

      t.timestamps
    end
  end
end
