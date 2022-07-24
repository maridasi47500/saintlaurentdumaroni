class AddVuesToMessages < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :vues, :integer
  end
end
