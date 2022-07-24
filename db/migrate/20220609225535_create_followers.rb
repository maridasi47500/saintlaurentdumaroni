class CreateFollowers < ActiveRecord::Migration[6.0]
  def change
    create_table :followingusers do |t|
      t.integer :user_id
      t.integer :followinguser_id
    end
  end
end
