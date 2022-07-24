class Event < ApplicationRecord
belongs_to :agendacat 
belongs_to :country, optional: true
has_many :eventshaveartcats
belongs_to :user, optional: true
validates_presence_of :a_titre
validates_presence_of :a_description
validates_presence_of :a_ville
validates_presence_of :a_cp
validates_presence_of :a_auteur
validates :a_auteur, format: { with: URI::MailTo::EMAIL_REGEXP }
validates :a_cp, length: {minimum: 3}
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

after_initialize :myvalues
def myvalues
self.a_date_fin = Date.today
self.a_heure_date_fin = I18n.l(DateTime.now, format: :timeform)
self.a_date_debut = Date.today
self.a_heure_date_debut = I18n.l(DateTime.now, format: :timeform)
self.a_pays=Country.find_by(name:"Guyane, Mayotte").countryid

self.a_url="http://"
end
attr_accessor :a_email, :a_telephone,:a_auteur,:a_pays_etat246,:a_pays_etat108, :a_pays_etat224,:a_pays_etat38,:a_pays,:a_ville,:a_cp,:a_lieu, :a_url,:a_description, :a_allday,:a_heure_date_fin,:a_date_fin,:a_heure_date_debut,:a_date_debut, :a_id_soum, :a_titre, :a_heure_date_debut 
before_validation :enterparams
def setcountry(a_pays,a_pays_etat246,a_pays_etat108, a_pays_etat224,a_pays_etat38)
self.country = a_pays ? Country.findbytwotypes('euro','RDM').find_by(countryid: a_pays) : nil
self.country = a_pays_etat246 ? Country.find_by(mytype: 'etat246',countryid: a_pays_etat246) : nil
self.country = a_pays_etat108 ? Country.find_by(mytype: 'etat108',countryid: a_pays_etat108) : nil
self.country = a_pays_etat224 ? Country.find_by(mytype: 'etat224',countryid: a_pays_etat224) : nil
self.country = a_pays_etat38 ? Country.find_by(mytype: 'etat224',countryid: a_pays_etat38) : nil
end
def enterparams
if a_telephone
self.tel = a_telephone
self.auteur=a_auteur
self.ville=a_cp+" "+a_ville
self.name = a_titre
self.adresse = a_lieu
self.url=a_url
self.description=a_description
self.day = a_allday
self.begintime = a_heure_date_debut
self.begindate = a_date_debut
self.endtime = a_heure_date_fin
self.setcountry(a_pays,a_pays_etat246,a_pays_etat108, a_pays_etat224,a_pays_etat38)
self.enddate=a_date_fin
 self.agendacat=Agendacat.find_by(catid: a_id_soum)
paramtitle=name.gsub(' ','-').split('').select{|h|h.in?(["-", ".", "_", "~"]+("0".."9").to_a+("a".."z").to_a+("A".."Z").to_a)}.join('')
self.myurl="/agenda/"+ERB::Util.url_encode(paramtitle)+"_a"+(Article.last.id + 1).to_s+".html"

end
end

alias_attribute :titre, :name
has_many :artcats, through: :eventshaveartcats
def self.findbydate(d)
where("begindate <= ? and enddate >= ?",d,d)
end
def myfullurl(port)
"http://localhost:"+port.to_s+myurl
end
def self.findbyid(i)
where(["myurl like ?",("%"+i.to_s+"%")])[0]
end
def eventnb
myurl.split('_ae')[1].gsub('.html','')
end
def date
begindate
end
def description
read_attribute(:description).to_s
end
def self.findbyparams(keyword, keyword_safe, cat, period)
all.findkeywordsafe(keyword_safe).findbycat(cat).findbyperiod(period)
end

def self.findkeywordsafe(k)
if k=="Mots-clés, Code Postal"
all
else
str="lower(name) like ? or lower(adresse) like ? or lower(ville) like ?"
ll=Array.new(3,k.split(' ')).flatten
mot=ll.map{|h|"%#{h.downcase.gsub(' ','%')}%"}.flatten
where(([Array.new(ll.length,str).join(' and ')]+Array.new(ll.length,mot).flatten))
end
end
def self.findbycat(k)
if k=="0"
all
else
where(agendacat_id: k)
end
end
def self.findbyperiod(k)
today=Date.today
case k
when "0"
#a venir
where('(begindate > ?)',today)
when "1"
#aujourdhui
where('begindate <= ? and enddate >= ?',today,today)
when "2"
#cette semaine
where("(begindate >= ? and begindate <= ?) or (enddate >= ? and enddate <= ?) or (begindate < ? and enddate > ?)",today.monday,today.sunday,today.monday,today.sunday,today.monday,today.sunday)
when "3"
#ce mois ci
where("(begindate >= ? and begindate <= ?) or (enddate >= ? and enddate <= ?) or (begindate < ? and enddate > ?)",today.beginning_of_month,today.end_of_month,today.beginning_of_month,today.end_of_month,today.beginning_of_month,today.end_of_month)
when "4"
#archives
where("begindate < ? and enddate < ?",today,today)
end
end
def self.mostrecent
all.order(begindate: :desc,begintime: :desc).limit(12).each_slice(3).to_a
end
def self.lotsofevents(j)
self.findbydate(j).length > 0
end
def self.firsteventname(j)
self.findbydate(j)[0].titre
end
def self.findbypath(p)
find_by(myurl: p)
end

end
