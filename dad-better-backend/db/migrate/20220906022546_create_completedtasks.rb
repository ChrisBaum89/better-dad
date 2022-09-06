class CreateCompletedtasks < ActiveRecord::Migration[6.1]
  def change
    create_table :completedtasks do |t|
      t.integer :user_id
      t.integer :task_id
      t.boolean :completed
      t.string :date

      t.timestamps
    end
  end
end
