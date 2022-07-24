class AddCreatedToPjs < ActiveRecord::Migration[6.0]
  def change
    add_column :pjs, :created, :date
  end
end
