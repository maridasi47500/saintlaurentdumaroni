class CreateRoomsAndSubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
	t.string :titre
	t.string :description
	t.timestamps
    end
    create_table :subjects do |t|
	t.integer :room_id
	t.integer :user_id
	t.string :titre
	t.string :content
	t.integer :vues
	t.string :name
	t.string :email

	t.timestamps
    end
    create_table :posts do |t|
	t.integer :subject_id
	t.integer :user_id
	t.string :content

	t.string :name
	t.string :email
	t.timestamps
    end
    create_table :notesubjects do |t|
	t.integer :subject_id
	t.integer :user_id
	t.integer :note

	t.timestamps
    end
    create_table :noteposts do |t|
	t.integer :post_id
	t.integer :user_id
	t.integer :note

	t.timestamps
    end
  end
end
