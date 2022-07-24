class User < ApplicationRecord
  # Include default devise modules. Others available are:
has_many :subjects
has_many :posts
has_many :followingusers
has_many :followers, through: :followingusers, source: :followinguser
has_many :articles
has_many :events
has_many :contactshavemessages
has_many :receivedmessages, through: :contactshavemessages, source: :message
has_many :sentmessages, foreign_key: "user_id", class_name: "Message"
has_many :comments
has_many :readmessages
has_many :myreadmessages, through: :readmessages, source: :message
def nbunreadforums
self.subjects.select('subjects.id,subjects.user_id,count(subjects.vues is null or subjects.vues = 0) as numb').group('subjects.user_id')[0].numb
end
def nb_read
allread.length
#Mythread.read.messagesthreads.select('threads.id, m1.id as mid1, m1.user_id as muserid1, m2.id as mid2, m2.user_id as muserid2').group('m2.thread_id').having(["(m1.user_id = ? and m2.user_id != ?) or (m1.user_id = ? and m2.user_id = ?)",self.id,self.id,self.id,self.id]).length
#receivedmessages.read.group("messages.thread_id").having(["(m1.user_id = ? and m2.user_id != ?) or (m1.user_id = ? and m2.user_id = ?)",self.id,self.id,self.id,self.id]).length


end


def allread
Message.read.mythreads.joins('left join messages m on m.thread_id = threads.id').group('messages.id').having([" (select tbl.myselect from (select count(contactshavemessages.user_id = ?)myselect from threads t left join messages m on m.thread_id = messages.thread_id and m.vues is not null left join contactshavemessages on contactshavemessages.message_id = m.id group by m.id  having contactshavemessages.user_id in (?) limit 1)tbl)  > 0 or messages.user_id = ?",self.id,self.id, self.id])
#.select(['*,(select tbl.myselect from (select count(contactshavemessages.user_id = ?) myselect from threads t left join messages m on m.thread_id = messages.thread_id and m.vues is null left join contactshavemessages on contactshavemessages.message_id = m.id group by t.id)tbl)  as counttbl',self.id])

#Message.select('messages.*, messages.thread_id').mythreads.messagesthreads.read.having(["messages.user_id = ? and (m1.user_id != ? and m2.user_id != ?) or (m1.user_id = ? and m2.user_id = ?)",self.id,self.id,self.id,self.id,self.id]).group('messages.id')

end

def allunread
Message.unread.mythreads.joins('left join messages m on m.thread_id = threads.id').group('messages.id').having(["(select tbl.myselect from (select count(contactshavemessages.user_id = ?) myselect from threads t left join messages m on m.thread_id = messages.thread_id and m.vues is null left join contactshavemessages on contactshavemessages.message_id = m.id group by m.id  having contactshavemessages.user_id in (?) limit 1)tbl)  > 0 or messages.user_id = ?",self.id,self.id, self.id])
#.select(['*,(select tbl.myselect from (select count(contactshavemessages.user_id = ?) myselect from threads t left join messages m on m.thread_id = messages.thread_id and m.vues is null left join contactshavemessages on contactshavemessages.message_id = m.id group by t.id having contactshavemessages.user_id = ?)tbl)  as counttbl',self.id, self.id])
#Message.select('messages.*, messages.thread_id').mythreads.messagesthreads.unread.having(["messages.user_id = ? and (m1.user_id != ? and m2.user_id != ?) or (m1.user_id = ? and m2.user_id = ?)",self.id,self.id,self.id,self.id,self.id]).group('messages.id')

end
def viewmypage
update(vues: (self.vues.to_i+1))
end
def nb_unread
allunread.length
#Mythread.unread.messagesthreads.select('threads.id, m1.id as mid1, m1.user_id as muserid1, m2.id as mid2, m2.user_id as muserid2').having(["m1.user_id = ? and cast(messages.vues as int) = 0 or m2.user_id != ? ",self.id,self.id]).group('m2.thread_id').length
#receivedmessages.unread.group("messages.thread_id").length
end
def updatelastsignin
update(last_sign_in_at: DateTime.now)
end
has_many :jobs
has_many :products
def myuserid
id
end
attr_accessor :description1
before_validation :mydescription
def self.allusers(page, l, order, photo,search)
lim=!search ? 10 : nil
allusers_page(page, l, order, photo,search).offset(page.to_i).limit(lim).each_slice(2).to_a
end
def self.allusers_page(page, l, order, photo,search)
if search && search.length > 0 
x=search.downcase.split(' ')
all.group('users.id').where(["lower(lastname) in (#{Array.new(x.length,'?').join(',')}) or lower(firstname) in (#{Array.new(x.length,'?').join(',')})"]+x+x)
else
all.select('users.*, users.id as myuserid').debutlettre(l).trierordre(order).avecphoto(photo).group('users.id')
end
end
def self.avecphoto(x)
if x==""
where.not("users.image" => ["",nil])
else
select("")
end
end
def self.debutlettre(k)
if k
where(["lower(lastname) like ?", "#{k.downcase}%"])
else
select('*')
end
end
def self.trierordre(k)
case k
when "alpha"
order(:lastname => :asc)
when "popular"
order(:vues => :desc)
when "recent"
orderarticles.orderevents.ordercomments.ordermessages
else
select('*')
end
end
def self.orderarticles
j=joins(:articles)
if j.length > 0
p j
left_joins(:articles).order("articlescreatedat" => :desc).select('max(articles.created_at) as articlescreatedat')
else
order("users.created_at" => :desc)
end
end
def self.orderevents
j=joins(:events)
if j.length > 0
p j
left_joins(:events).order("eventscreatedat" => :desc).select('max(events.created_at) as eventscreatedat')
else
order("users.created_at" => :desc)
end
end
def self.ordercomments
j=joins(:comments)
if j.length > 0
p j
left_joins(:comments).order("commentscreatedat" => :desc).select('max(comments.created_at) as commentscreatedat')
else
order("users.created_at" => :desc)
end
end
def self.ordermessages
j=joins(:receivedmessages)
if j.length > 0
p j
left_joins(:receivedmessages).order("messagescreatedat" => :desc).select('max(messages.created_at) as messagescreatedat')
else
order("users.created_at" => :desc)
end
end
def self.petitesannonces_page(page = nil)
myclassifieds=Job.all.offset(page.to_i).map{|h|["petiteannonce", "classified", h]}+Product.all.offset(page.to_i).map{|h|["petiteannonce", "classified", h]}
arr=myclassifieds
arr
end
def self.petitesannonces(page = nil)
petitesannonces_page(page.to_i).group_by{|x|x[2].created_at.to_date}
end
def self.petitesannonceslength(page = nil)
petitesannonces_page(page.to_i).length
end
def touscommentairesfollowed_page(page=nil)
#gens que je suis ont ecrit
followed=self.followedpeople.ids
mycomments=Comment.all.offset(page.to_i).joins(:notes).group('comments.id').select("comments.*, comments.user_id as myuserid").having(["myuserid in (#{Array.new(followed.length,"?").join(",")})", followed]).map{|h|[(h.articles.length > 0 ? "commentarticle" : "commentnote"), "comment", h]}+Comment.all.joins(:articles).group("comments.id").select("comments.*, articles.user_id as myuserid").having(["myuserid in (#{Array.new(followed.length,"?").join(",")})", followed]).map{|h|[(h.articles.length > 0 ? "commentarticle" : "commentnote"), "comment", h]}
arr=mycomments
arr
end
def touscommentairesfollowed(page = nil)
#gens que je suis ont ecrit
touscommentairesfollowed_page(page.to_i).group_by{|x|x[2].created_at.to_date}
end
def touscommentairesfollowedlength(page = nil)
#gens que je suis ont ecrit
touscommentairesfollowed_page(page.to_i).length
end
def touscommentaires_page(page=nil)
#j'ai ecrit
mycomments=Comment.all.joins(:notes).offset(page.to_i).group('comments.id').select("comments.*, comments.user_id as myuserid").having('myuserid = ?', self.id).map{|h|[(h.articles.length > 0 ? "commentarticle" : "commentnote"), "comment", h]}+Comment.all.joins(:articles).group("comments.id").select("comments.*, articles.user_id as myuserid").having('myuserid = ?', self.id).map{|h|[(h.articles.length > 0 ? "commentarticle" : "commentnote"), "comment", h]}
arr=mycomments
arr
end
def touscommentaires
#j'ai ecrit
touscommentaires_page(page.to_i).group_by{|x|x[2].created_at.to_date}
end
def touscommentaireslength(page = nil)
#j'ai ecrit
touscommentaires_page(page.to_i).length
end
def self.touscommentaires_page(page = nil)
mycomments=Comment.all.joins(:notes).offset(page.to_i).map{|h|[(h.articles.length > 0 ? "commentarticle" : "commentnote"), "comment", h]}+Comment.all.offset(page.to_i).joins(:articles).map{|h|[(h.articles.length > 0 ? "commentarticle" : "commentnote"), "comment", h]}
arr=mycomments
arr
end
def self.touscommentaires(page = nil)
touscommentaires_page(page.to_i).group_by{|x|x[2].created_at.to_date}
end
def self.touscommentaireslength(page = nil)
touscommentaires_page(page.to_i).length
end

def self.tousforums_page(page = nil)
mycomments=Subject.all.offset(page.to_i).map do |h|
h.htmlcodemessage
['forummessage', "post", h]
end
myposts=Post.all.offset(page.to_i).map do |h|
h.htmlcodemessage
['forummessage', "post", h]
end
arr=(mycomments+myposts).sort_by{|h|h[2].created_at}
arr
end
def self.tousforums(page = nil)
tousforums_page(page.to_i).group_by{|x|x[2].created_at.to_date}
end
def self.tousforumslength(page = nil)
tousforums_page(page.to_i).length
end

def self.allnews_page(page=nil)
mycomments=Comment.all.offset(page.to_i).joins(:notes).map{|h|[(h.articles.length > 0 ? "commentarticle" : "commentnote"), "comment", h]}+Comment.all.offset(page.to_i).joins(:articles).map{|h|[(h.articles.length > 0 ? "commentarticle" : "commentnote"), "comment", h]}
myclassifieds=Job.all.offset(page.to_i).map{|h|["petiteannonce", "classified", h]}+Product.all.offset(page.to_i).map{|h|["petiteannonce", "classified", h]}
arr=myclassifieds+mycomments
arr
end
def self.allnews(page = nil)
allnews_page(page.to_i).group_by{|x|x[2].created_at.to_date}
end
def self.allnewslength(page = nil)
allnews_page(page.to_i).length
end
def followedpeople
User.select("users.*, f.followinguser_id").joins('left join followingusers f on f.user_id = users.id').where('f.followinguser_id' => [self.id])
end
def allmynews_page(page = nil)
mycomments=self.comments.offset(page.to_i).map{|h|[(h.articles.length > 0 ? "commentarticle" : "commentnote"), "comment", h]}
myclassifieds=self.jobs.offset(page.to_i).map{|h|["myjob", "job", h]}+self.products.offset(page.to_i).map{|h|["myproduct", "product", h]}
arr=myclassifieds+mycomments
arr.group_by{|x|x[2].created_at}
end
def allmynews(page = nil)
allmynews_page(page.to_i).group_by{|x|x[2].created_at}
end
def allmynewslength(page = nil)
allmynews_page(page.to_i).length
end
def mydescription
if self.description1
User.clear_validators!
write_attribute(:description,self.description1.strip.squish)
end
end

  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
         attr_accessor :a_abo_newsletter, :subaction,:commande_a_regler, :esc_identity, :a_login, :a_password, :a_password2, :a_visibilite, :a_pseudo, :a_prenom, :a_nom, :a_email

devise :database_authenticatable, :authentication_keys => [:login]

validates :login, uniqueness: true

def updatemyimage(upload)
if upload
name = upload.original_filename
      directory = "public/userfiles"
      # create the file path
      path = Rails.root.to_s+'/'+File.join(directory, name)
      p path
    # write the file
      File.open(path, "wb") { |f| f.write(upload.read) }
      write_attribute(:image,name)
      User.clear_validators!
      self.save
end

end

def fullnametitle
self.fullname.titleize
end
def fullnamesmall
self.fullname.downcase
end
validates :a_login, :a_password, :a_password2, :a_visibilite, :a_prenom, :a_nom, :presence => true, on: :create
def self.listcontacts(field,term)
case field
when "a_dest"
k="%"+term.downcase+'%'
where(["lower(firstname) like ? or lower(lastname) like ?",k,k]).map {|h|{id: "prof_#{h.id}",label: h.fullnametitle,value:h.fullnametitle, real_key: "id_personne",term: term}}
else
[]
end
end
def fullname
firstname.capitalize+" "+lastname.upcase
end
def email_required?
false
end
def password_required?
false
end
before_validation :mydata
def mydata
if self.a_login
self.login = self.a_login
if self.a_password == self.a_password2
self.password = self.a_password
end
self.pseudo=self.a_pseudo
end
self.email = self.a_email if self.a_email
self.lastname=self.a_nom if self.a_nom
self.firstname=self.a_prenom if self.a_prenom
self.private = self.a_visibilite == "prive"
self.newsletter = self.a_abo_newsletter == "oui"

end
attr_accessor :a_notify_message, :a_notify_follower
def initializemyattributes
self.a_login = self.login
self.a_visibilite = self.private ? "prive" : "public"
self.a_abo_newsletter = self.newsletter ? "oui" : "non"
self.a_pseudo=self.pseudo
self.a_nom=self.lastname
self.a_email=self.email
self.a_prenom=self.firstname
end

end
