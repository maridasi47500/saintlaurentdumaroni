class CreateParas < ActiveRecord::Migration[6.0]
  def change
    create_table :paras do |t|
      t.integer :article_id
      t.string :photo
      t.text :texte
      t.timestamps
    end
    create_table :parashavepjs do |t|
      t.integer :para_id
      t.integer :pj_id
      t.timestamps
    end
    create_table :pjs do |t|
      t.string :mytype
      t.string :name
      t.string :filename
      t.timestamps
    end
  end
end
