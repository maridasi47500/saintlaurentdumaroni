class CreateCountry < ActiveRecord::Migration[6.0]
  def change
    create_table :countries do |t|
      t.integer :countryid
      t.string :name
      t.string :mytype
      t.timestamps
    end
  end
end
