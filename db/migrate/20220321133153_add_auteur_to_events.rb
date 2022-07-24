class AddAuteurToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :auteur, :string
  end
end
