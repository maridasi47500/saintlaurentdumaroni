class Room < ApplicationRecord
has_many :subjects
has_many :posts, through: :subjects, source: :posts
def self.myforums
self.left_joins(:subjects).left_joins(:posts).select("rooms.*,subjects.id as subid, subjects.created_at as subcreated,subjects.user_id as subuserid, (case when count(distinct posts.id) > 0 then max(posts.created_at) when count(subjects.id) > 0 then max(subjects.created_at) else null end) as datedernierpost, posts.id as pid, subjects.id as subjectsid, count(distinct subjects.id) as sujets").group('rooms.id')
end
def dernierpost
end
def messujets
subjects.select('*, count(distinct posts.id) as reponses, cast(subjects.vues as int) as lectures, max(posts.created_at) datedernierpost, (select u.pseudo from users u where (posts.id is not null and u.id = posts.user_id) or (subjects.user_id is not null and u.id = subjects.user_id)) usernamedernierpost').left_joins(:posts).order("subjects.created_at" => :desc, "datedernierpost" => "desc").group('subjects.id, subjects.room_id')

end
end
