class Otherartcat < ApplicationRecord
belongs_to :artcat, foreign_key: "artcat_id"
belongs_to :otherartcat, class_name: "Artcat", foreign_key: "otherartcat_id"
validates_uniqueness_of :artcat_id, scope: :otherartcat_id
end
