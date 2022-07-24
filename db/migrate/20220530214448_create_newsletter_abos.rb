class CreateNewsletterAbos < ActiveRecord::Migration[6.0]
  def change
    create_table :newsletter_abos do |t|
      t.string :email
      t.boolean :html
      t.timestamps
    end
    create_table :links do |t|
      t.string :url
      t.string :titre
      t.string :description
      t.string :email
      t.string :image
      t.integer :id_soum
      t.timestamps
    end
    create_table :newlinks do |t|
      t.string :url
      t.string :titre
      t.string :description
      t.string :email
      t.integer :id_soum
      t.timestamps
    end
    create_table :linkcats do |t|
      t.string :name
      t.integer :id_soum
      t.timestamps
    end
  end
end
