class Post < ApplicationRecord
belongs_to :subject
belongs_to :user
has_many :notes, class_name:"Notepost", foreign_key: "post_id" 

before_validation :myvideo
def myvideo
if self.n_video
self.content << "<br>"
self.content << self.video
end
end
def htmlcodemessage
self.type_preview="message"
self.mymessage
end
attr_accessor :dejanote, :video,:n_video,:subaction,:type_preview,:mess, :auteur, :n_message,:n_sujet,:n_email,:n_auteur
after_initialize :mymessage
def mymessage
if self.n_message || self.try(:content) || self.mess
self.mess||= self.n_message
self.mess||= self.content
self.name ||self.n_auteur
self.email || self.n_email
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
