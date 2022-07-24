class Subject < ApplicationRecord
belongs_to :room
belongs_to :user
attr_accessor :manote,:dejanote,:video,:n_video,:subaction,:type_preview,:mess, :auteur, :n_message,:n_sujet,:n_email,:n_auteur
has_many :posts
has_many :notes, class_name:"Notesubject", foreign_key: "subject_id" 
validates_uniqueness_of :room_id, scope: [:user_id,:content,:titre]
def self.cinqderniers
self.select('subjects.*,subjects.user_id as subjectuserid, posts.user_id as postuserid, count(distinct posts.id) as reponses, (case when subjects.vues is null then 0 else subjects.vues end) as lectures, (case when count(posts.id) > 0 then max(posts.created_at) else (subjects.created_at) end)  datedernierpost, (case when count(posts.id) > 0 then (select u.pseudo from users u left join posts p on p.subject_id = subjects.id and p.user_id = u.id order by p.created_at desc limit 1) else (select u.pseudo from users u where subjects.user_id = u.id limit 1) end) usernamedernierpost').left_joins(:posts).order("subjects.created_at" => :desc, "datedernierpost" => "desc").group('subjects.id, subjects.room_id').limit(5)
end
def adejanote(userid, notespost,notessujet,myposts)
self.dejanote=self.notes.where(user_id:userid)[0].try(:note) || notessujet.to_h[self.id.to_s]
myposts.each do |mypost|
mypost.dejanote=mypost.notes.where(user_id:userid)[0].try(:note) || notespost.to_h[mypost.id.to_s]

end
end
def htmlcodemessage
self.type_preview="message"
self.mymessage
end
def addvue
update(vues: (self.vues.to_i+1))
end
before_validation :myvideo
def myvideo
if self.n_video
self.content << "<br>"
self.content << self.video
end
end
def myposts(start)
posts.offset(start.to_i).limit(30)
end
after_initialize :mymessage
def mymessage
if self.n_message || self.try(:content) || self.mess
self.mess||= self.n_message
self.mess||= self.content
self.name ||self.n_auteur
self.email ||= self.n_email
self.titre ||= self.n_sujet
self.mess||= self.content
self.content=self.mess
end
if self.type_preview == "message"
self.mess.gsub!("qt\[","«")
p self.mess
self.mess.gsub!("]qt","»")
p self.mess
#quote
#liens
k=self.mess
while k.index("]url:") do

l=k.split("]url:")
lien=nil
[".com",'.fr','.org','.com','.info'].each do |str|
if l[1].index(str)

lien=l[1].split(str)[0]+str
end
end
lien ||=l[1].split('[')[0].split(']')[0]
k=[l[0].sub('[', "<a href='"+lien+"'>"),
l[1].sub(lien, '')
].join("</a>")
self.mess=k
end

#images
k=self.mess
while k.index("]img:") do

l=k.split("]img:")
lien=nil

lien ||=l[1].split('[')[0].split(']')[0]
k=[l[0].sub('[', "<img src='"+lien+"'/>"),
l[1].sub(lien, '')
].join("")
self.mess=k

end

#autres

self.mess=self.mess.gsub("b[","<b>").gsub("]b","</b>").gsub("i[","<i>").gsub("]i","</i>").gsub("u[","<u>").gsub("]u","</u>")
end

end
end
