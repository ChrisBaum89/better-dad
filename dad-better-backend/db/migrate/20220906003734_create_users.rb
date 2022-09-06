class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :email
      #t.string :password_digest
      #t.string :birthday
      #t.integer :score
      #t.boolean :beer_drinker

      t.timestamps
    end
  end
end
