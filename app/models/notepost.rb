class Notepost < ApplicationRecord
belongs_to :user, optional: true
belongs_to :post
validates_presence_of :note
end