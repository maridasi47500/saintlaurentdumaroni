class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :titre
      t.string :prix
      t.string :description
      t.string :lieu
      t.string :cp
      t.string :ville
      t.string :pays
      t.string :photo_1
      t.string :photo_2
      t.string :photo_3
      t.string :email
      t.string :telephone
      t.timestamps
    end
  end
end
