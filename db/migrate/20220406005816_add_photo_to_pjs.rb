class AddPhotoToPjs < ActiveRecord::Migration[6.0]
  def change
    add_column :pjs, :photo, :string
  end
end
