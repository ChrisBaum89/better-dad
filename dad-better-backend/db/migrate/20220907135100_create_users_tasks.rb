class CreateUsersTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :assigned_tasks do |t|
      t.integer :user_id
      t.integer :task_id
      t.boolean :active
      t.boolean :completed
      t.boolean :favorited

      t.timestamps
    end
  end
end
