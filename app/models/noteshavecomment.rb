class Noteshavecomment < ApplicationRecord
belongs_to :note
belongs_to :comment
validates_uniqueness_of :note_id, scope: :comment_id

end
