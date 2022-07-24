class AddMyurlToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :myurl, :string
  end
end
