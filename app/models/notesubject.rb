class Notesubject < ApplicationRecord
belongs_to :user, optional: true
belongs_to :subject
validates_presence_of :note, :subject_id

end