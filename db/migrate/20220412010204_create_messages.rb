class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :contactshavemessages do |t|
	t.integer :user_id
	t.integer :message_id
    end
    create_table :threads do |t| 

	t.string :title
	t.timestamps
    end
    create_table :messages do |t|

      t.integer :thread_id
      t.text :content
      t.string :attachment
      t.integer :user_id
	t.timestamps
    end
  end
end
