class CreateEmailevent < ActiveRecord::Migration[6.0]
  def change
    create_table :emailevents do |t|
      t.text :ami
      t.string :nom
      t.string :email
      t.text :message
      t.integer :event_id
      t.timestamps
    end
    create_table :emailarticles do |t|
      t.text :ami
      t.string :nom
      t.string :email
      t.text :message
      t.integer :article_id
      t.timestamps
    end
  end
end
