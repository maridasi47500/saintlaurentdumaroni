class RenameTitreToNameInEvents < ActiveRecord::Migration[6.0]
  def change
rename_column :events, :titre, :name
add_column :events, :adresse, :string
add_column :events, :ville, :string
add_column :events, :tel, :string
  end
end
