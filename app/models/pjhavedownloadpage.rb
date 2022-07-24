class Pjhavedownloadpage < ApplicationRecord
validates_uniqueness_of :downloadpage_id, scope: :pj_id
belongs_to :pj
belongs_to :downloadpage
end
