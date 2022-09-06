class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :description
      t.integer :value
      t.string :category

      t.timestamps
    end
  end
end
