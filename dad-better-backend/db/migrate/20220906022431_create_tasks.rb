class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :identifier
      t.integer :value
      t.string :category

      t.timestamps
    end
  end
end
