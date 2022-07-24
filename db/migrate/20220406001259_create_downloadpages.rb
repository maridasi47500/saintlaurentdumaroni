class CreateDownloadpages < ActiveRecord::Migration[6.0]
  def change
    create_table :downloadpages do |t|
      t.string :url
      t.string :title
      t.timestamps	
    end
    create_table :pjhavedownloadpages do |t|
	t.integer :pj_id		
	t.integer :downloadpage_id		
    end
  end
end
