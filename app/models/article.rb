class Article < ApplicationRecord
has_many :paras
belongs_to :user, optional: true
has_many :pjs, through: :paras
has_and_belongs_to_many :comments, :join_table => :articleshavecomments
belongs_to :artcat, optional: true
attr_accessor :myphoto
attr_accessor :tagsearch,:periode,:keyword,:id_rubrique
validates_uniqueness_of :myurl
validates_uniqueness_of :titre
#validates_presence_of :a_titre
#validates_presence_of :a_email
#validates_presence_of :a_auteur
def myurl
read_attribute(:myurl).gsub('https://www.saintlaurentdumaroni.fr','')
end

def self.findbymyurl(u)
where("lower(myurl) like ?","%#{u.downcase}%")[0]
end
#validates :a_email, format: { with: URI::MailTo::EMAIL_REGEXP }
def self.lastarticle
#article où il n'a a pas de records e la table vues article par user 
Article.all.last(5)
end
def self.allmynews
a=Job.lastjob.to_a+Prouct.lastproduct.to_a+Comment.lastcomment.to_a
a.sort_by!{|h|h.created_at}
a.map! do |g|
if g.is_a?(Job)
["leftnewjob","job", g]
elsif g.is_a?(Product)
["leftnewproduct","product", g]
elsif g.is_a?(Comment)
["leftnewcomment","comment", g]
end
end
a.group_by{|h|h[1].created_at}
end
def id_article
self.myurl.split('_a')[1].split('.')[0]
end
attr_accessor :myonlyresults, :a_titre, :a_id_rubrique, :a_chapeau, :a_intertitre, :a_html, :a_texte, :a_email, :a_auteur
after_initialize :searchart
def searchart
if keyword
self.myonlyresults = Article.all.searchkeyword(keyword).searchtitre(titre).searchperiode(periode).searchauteur(auteur).searchtexte(texte).searchintertitre(intertitre).searchrubrique(id_rubrique).searchchapeau(chapeau)
end
end

def self.searchrubrique(k)
if k 
l=Artcat.find_by(catid: k) rescue nil
if l
where("artcat_id = ?",l.id)
end
else
select('*')
end

end
def self.searchchapeau(k)
if k
mystr="%#{k.downcase.gsub(' ','%')}%"
where('lower(chapeau) like ?',mystr)
else
select('*')
end

end
def self.searchintertitre(k)
if k
mystr="%#{k.downcase.gsub(' ','%')}%"
where('lower(intertitre) like ?',mystr)
else
select('*')
end
end
def self.searchtexte(k)
if k
mystr="%#{k.downcase.gsub(' ','%')}%"
where('lower(texte) like ?',mystr)
else
select('*')
end

end
def self.searchperiode(k)
if !k
all
else
where("created_at >= ?",k.to_i.days.ago)
end
end
def self.searchauteur(k)
if k
mystr="%#{k.downcase.gsub(' ','%')}%"
where('lower(auteur) like ?',mystr)
else
select('*')
end
end
def self.searchtitre(k)
if k
mystr="%#{k.downcase.gsub(' ','%')}%"
where('lower(titre) like ?',mystr)
else
all
end
end
def self.searchkeyword(k)
list=k.downcase.split(' ').map{|h|Array.new(5,"%#{h.gsub(' ','%')}%")}
check="lower(titre) like ? or lower(auteur) like ? or lower(texte) like ? or lower(intertitre) like ? or lower(chapeau) like ?"
where([Array.new(list.length, check).join(' or ')]+list.flatten)
end

before_validation :myinfo
def self.mostrecentwelcome
Article.all.limit(12).order(updated_at: :desc).each_slice(3).to_a
end
def self.mostrecent
Article.all.group("articles.titre").select("articles.*,cats.name as catname").having('catname = ?','Mairie').joins(:artcat).order(updated_at: :desc).limit(4)
end
def myfullurl(port)
"http://localhost:"+port.to_s+myurl
end
def artnb
myurl.split('_a')[1].gsub('.html','')
end
def self.findbyurl(i)
where(["myurl like ?",("%"+i.to_s+"%")])[0]
end
def self.findbyid(i)
where(["myurl like ?",("%"+i.to_s+"%")])[0]
end

def titre=(x)
write_attribute(:titre, x.strip.squish)
end
def myarticles
    self.otherarticles(0,3)
end
def mynext
    self.otherarticles((3),3).length > 0 ? (3 + 3) : 0
end
def myprev
  
        self.artcat.articles.length  - 4
   

end   
alias_attribute :description, :texte
def otherarticles(start,size)
artcat.articles.offset(start).limit(size).where.not(id: self.id)

end
def rubrique1
self.artcat.try(:rubriquemeres).try(:first)
end
def rubrique2
self.artcat.try(:rubriquemeres).try(:first).try(:rubriquemeres).try(:first)
end
def rubrique3
self.artcat.try(:rubriquemeres).try(:first).try(:rubriquemeres).try(:first).try(:rubriquemeres).try(:first)
end
def titre
read_attribute(:titre)
end
def myinfo
if a_id_rubrique
 self.artcat=Artcat.find_by(catid: a_id_rubrique)
 self.titre=a_titre
 self.chapeau = a_chapeau
 self.intertitre=a_intertitre
    self.html=a_html == "oui" ? true : false
     self.texte=a_texte
     
    self.email=a_email
    self.auteur=a_auteur
paramtitle=titre.gsub(' ','-').split('').select{|h|h.in?(["-", ".", "_", "~"]+("0".."9").to_a+("a".."z").to_a+("A".."Z").to_a)}.join('')
if self.myurl.to_s.strip.squish  == ""
self.myurl="/"+ERB::Util.url_encode(paramtitle)+"_a"+(Article.last.id + 1).to_s+".html"
end
 end
end
def self.twentylast
order(created_at: :desc).limit(20)
end
def a_photo=(file)
if file && !file.is_a?(String)
File.open(Rails.root.join('public', 'photo', file.original_filename), 'wb') do |f|
  f.write(file.read)
end
write_attribute(:photo,"/photo/"+file.original_filename)

elsif file && file.is_a?(String)
write_attribute(:photo,file)

end
    end
def a_photo
read_attribute(:photo)
end
def myphotos(myphoto)
if myphoto
`cd "#{Rails.root.to_s+"/public/photo/"}" && wget "#{myphoto}"`
write_attribute(:photo,myphoto.split('/').last)
self.save
end

end

end
