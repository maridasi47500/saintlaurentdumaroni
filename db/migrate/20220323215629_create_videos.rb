class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :image
      t.string :filename
      t.integer :vue
      t.string :titre
      t.string :creator
      t.text :description
      t.integer :videoid
      t.time :time
      t.integer :article_id
	t.timestamps	
    end
  end
end
