class Contactshavemessage < ApplicationRecord
belongs_to :user
belongs_to :message
validates_uniqueness_of :user_id, scope: :message_id
end
