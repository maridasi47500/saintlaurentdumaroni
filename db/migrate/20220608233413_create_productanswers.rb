class CreateProductanswers < ActiveRecord::Migration[6.0]
  def change
    create_table :productanswers do |t|
      t.integer :product_id
      t.string :email
      t.string :telephone
      t.text :message
      t.timestamps
    end
    create_table :jobanswers do |t|
	t.integer :job_id
      t.string :email
      t.string :telephone
      t.text :message
      t.string :pj
      t.timestamps
    end
  end
end
