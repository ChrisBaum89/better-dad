class CreateUserBadgeJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :users, :badges do |t|
      t.index [:user_id, :badge_id]
      t.index [:badge_id, :user_id]
    end
  end
end
