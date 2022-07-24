class AddVisiteToJobs < ActiveRecord::Migration[6.0]
  def change
    add_column :jobs, :visite, :integer
    add_column :products, :visite, :integer
  end
end
