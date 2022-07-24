class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.text :content
      t.integer :user_id
      t.boolean :notifyme
      t.string :name
      t.string :email
      t.timestamps
    end
    create_table :articleshavecomments do |t|
      t.integer :comment_id
      t.integer :article_id
      t.timestamps
    end
    create_table :noteshavecomments do |t|
      t.integer :comment_id
      t.integer :note_id
      t.timestamps
    end
  end
end
