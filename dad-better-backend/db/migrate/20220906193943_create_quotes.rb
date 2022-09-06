class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.string :description
      #category is: generic, son, daughter
      t.string :category

      t.timestamps
    end
  end
end
