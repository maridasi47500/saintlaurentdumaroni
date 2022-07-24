class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :titre
      t.text :content
      t.string :myurl
      t.date :mydate
      t.timestamps
    end
  end
end
