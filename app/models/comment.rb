class Comment < ApplicationRecord
has_and_belongs_to_many :articles, :join_table => :articleshavecomments
has_and_belongs_to_many :notes, :join_table => :noteshavecomments
validates_presence_of :a_pseudo
validates_presence_of :a_email, :a_commentaire
def self.lastcomment
Comment.all.last(5)
end
belongs_to :user, optional: true
attr_accessor :myuserid, :a_pseudo, :a_url, :a_email, :a_commentaire,:a_notify
after_initialize :myattributes

def myattributes
myuser=User.find(self.myuserid) rescue nil
if myuser
self.a_pseudo ||= myuser.pseudo
self.a_email ||= myuser.email
self.user_id=self.myuserid
end
self.a_url ||= "http://"
end

before_validation :validateattributes
def validateattributes
self.url=self.a_url
self.email=self.a_email
self.content=self.a_commentaire
self.name=self.a_pseudo
self.notifyme ||= self.a_notify == "yes"
end
end