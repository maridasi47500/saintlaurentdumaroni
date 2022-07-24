class AddUserIdToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :user_id, :integer
    add_column :articles, :user_id, :integer
  end
end
