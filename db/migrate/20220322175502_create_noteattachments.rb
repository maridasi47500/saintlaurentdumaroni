class CreateNoteattachments < ActiveRecord::Migration[6.0]
  def change
    create_table :notehavepjs do |t|
      t.integer :note_id
      t.integer :pj_id
      t.timestamps
    end
  end
end
