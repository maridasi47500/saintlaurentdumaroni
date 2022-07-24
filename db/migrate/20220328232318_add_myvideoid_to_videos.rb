class AddMyvideoidToVideos < ActiveRecord::Migration[6.0]
  def change
    add_column :videos, :myvideoid, :integer
  end
end
