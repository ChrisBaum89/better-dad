class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.string :description
      t.string :author
      #category is: generic, son, daughter
      t.string :category
      t.boolean :active

      t.timestamps
    end
  end
end
