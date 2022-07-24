class Message < ApplicationRecord
belongs_to :mythread, foreign_key: "thread_id"
belongs_to :user
has_many :contactshavemessages
has_many :readmessages
def reallogin(u)
u==self.user ? "Moi" : self.user.fullnametitle

end
def self.updatevues(userid)
p self
if userid
if self.select('*').length == 1 && (self.select('*')[0].contacts.ids.include?(userid) || self.select('*')[0].user_id = userid)
self.select('*').each {|x|x.update(vues: (x.vues.to_i + 1))}
elsif self.select('*').length > 1
#update 
#si je suis dans les destinataires du fil ou j'envoie le message
self.select('*').update_all(["vues=(case when (select tbl.myselect from (select count(contactshavemessages.user_id = ?) myselect from threads t left join messages m on m.thread_id = messages.thread_id left join contactshavemessages on contactshavemessages.message_id = m.id group by m.id having contactshavemessages.user_id = ? limit 1)tbl)  > 0 or messages.user_id = ? then (case when vues is null then 1 when vues is not null then vues+1 else vues end)else vues end)",userid, userid,userid])
end
end
self.select('*')
rescue
self.select('*')
end
def self.read
where.not(vues: [0,nil])
end
def self.mythreads
joins('left join threads on threads.id = messages.thread_id')

end
def self.tousmesdestinataires
select("(select distinct contactshavemessages.user_id myusersid from threads t left join messages m on m.thread_id = t.id left join contactshavemessages on contactshavemessages.message_id = m.id where t.id = threads.id ) as destinairesid")
end
def self.unread
where(vues: nil)
end
has_many :myusers, through: :readmessages, source: :user
def datedumessage
self.created_at - 3.hours
end
def image=(upload)
if upload
name = upload.original_filename
      directory = "public/msgfiles"
      # create the file path
      path = Rails.root.to_s+'/'+File.join(directory, name)
      p path
    # write the file
      File.open(path, "wb") { |f| f.write(upload.read) }
      write_attribute(:attachment,name)
end
end
def self.messagesthreads
joins('left join messages m1 on m1.thread_id = threads.id').joins('left join messages m2 on m1.thread_id = m2.thread_id')
end
def fullnamesmall
self.fullname.downcase
end
attr_accessor "envoyer_message", "id_thread"
attr_accessor :myuserid, "envoyer_nmessage", "a_destinataires", "a_dest", "a_sujet", "a_message", "a_file"
before_validation :saveparams
def self.allthearchives
#tous les messages vus par user
#tous les message dont le user  qui a lu est identique à user  et le receiver aussi (envoyé à soi meme)
end
def self.allthemessages
#tous les messages non vus par user (où la table de messages vus où user = me et article=self est nulle) 
end

def saveparams
if self.envoyer_message == "oui"
self.user_id = self.myuserid
self.content=self.a_message
self.image=self.a_file
self.thread_id = self.id_thread
end
if self.envoyer_nmessage == "oui"
self.content=self.a_message

if self.a_sujet
self.mythread= Mythread.new(title:self.a_sujet)

end
self.user_id = self.myuserid
self.image=self.a_file
end
end
after_validation :mycontacts
def mycontacts
if !self.a_destinataires.to_a.empty?
self.contacts.clear
self.contacts << User.where(id: self.a_destinataires.to_a.map{|g|g.gsub('prof_','')})
end
end
has_many :contacts, through: :contactshavemessages, source: :user
def self.newmessage(mess,user)
j=Message.new(content: mess, mythread: Mythread.new,user: user)
end
def viewcontent
self.content.gsub("qt[","<qt>").gsub("]qt","</qt>").gsub("u[","<u>").gsub("]u","</u>").gsub("b[","<b>").gsub("]b","</b>").gsub("i[","<i>").gsub("]i","</i>")
end
end
