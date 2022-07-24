class AddMessageToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :message, :boolean
    add_column :users, :follower, :boolean
  end
end
