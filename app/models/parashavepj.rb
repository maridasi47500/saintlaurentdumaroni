class Parashavepj < ApplicationRecord
belongs_to :para
belongs_to :pj
validates_uniqueness_of :para_id, scope: :pj_id
end
