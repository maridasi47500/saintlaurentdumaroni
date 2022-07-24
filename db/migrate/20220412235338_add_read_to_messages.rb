class AddReadToMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :readmessages do |y|
	y.integer :message_id
	y.integer :user_id
	y.timestamps
	end
  end
end
