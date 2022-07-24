class CreateArtcat < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :type
      t.string :name
      t.string :url
      t.integer :catid
    end
    create_table :otherartcats do |t|
      t.integer :artcat_id
      t.integer :otherartcat_id
    end
    create_table :events do |t|
      t.integer :agendacat_id
      t.string :titre
      t.date :begindate
      t.time :begintime
      t.date :enddate
      t.time :endtime
      t.string :myurl
      t.boolean :day
      t.text :description
      t.string :url
      t.string :photo
      t.string :zip
      t.string :city
      t.string :email
      t.string :telephone
      t.timestamps
    end
    create_table :eventshaveartcats do |t|
      t.integer :event_id
      t.integer :artcat_id
    end 
    create_table :articles do |t|
      t.integer :artcat_id
      t.string :titre
      t.string :chapeau
      t.string :intertitre
      t.text :texte
      t.string :email
      t.string :myurl
      t.string :photo
      t.boolean :html
      t.string :auteur
      t.timestamps
    end
  end
end
