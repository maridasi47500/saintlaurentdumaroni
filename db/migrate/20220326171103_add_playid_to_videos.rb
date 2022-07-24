class AddPlayidToVideos < ActiveRecord::Migration[6.0]
  def change
    add_column :videos, :playid, :integer
  end
end
