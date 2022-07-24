class AddCountryIdToEvent < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :country_id, :integer
  end
end
