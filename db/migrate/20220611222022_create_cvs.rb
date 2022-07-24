class CreateCvs < ActiveRecord::Migration[6.0]
  def change
    create_table :cvs do |t|
      t.integer :job_id
      t.string :filename
      t.timestamps
    end
  end
end
