class CreateJob < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :titre
      t.string :salaire
      t.string :duree
      t.string :entreprise
      t.string :fonction
      t.text :description
      t.string :lieu
      t.string :cp
      t.string :ville
      t.string :pays
      t.string :photo
      t.string :email
      t.string :telephone
      t.string :photo_1
      t.string :photo_2
      t.string :photo_3
      t.timestamps
    end
  end
end
