class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :email
      t.string :password
      t.string :birthday
      t.string :score
      t.string :beer_drinker

      t.timestamps
    end
  end
end
