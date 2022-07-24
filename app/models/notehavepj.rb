class Notehavepj < ApplicationRecord
belongs_to :note
belongs_to :pj
validates_uniqueness_of :note_id, scope: :pj_id
end
