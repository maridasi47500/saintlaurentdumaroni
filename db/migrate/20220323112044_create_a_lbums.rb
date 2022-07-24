class CreateALbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
	t.string :titre
	t.string :cover
	t.timestamps
    end
    create_table :photos do |t|
	t.integer :album_id
	t.string :petiteimage
	t.string :grandeimage
	t.timestamps
    end
  end
end
