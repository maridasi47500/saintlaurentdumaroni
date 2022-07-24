class Followinguser < ApplicationRecord
belongs_to :user
belongs_to :followinguser, class_name: "User"
validates_uniqueness_of :user_id, scope: :followinguser_id
end