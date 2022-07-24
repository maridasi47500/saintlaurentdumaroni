class Job < ApplicationRecord
has_many :answers, class_name: "Jobanswer"
attr_accessor :mylocation, :pa_specs_max_0, :pa_specs_min_0,:keyword, :keyword_safe, :cp_safe, :cp
def all1
end
def self.findcp(cp)
if cp.blank?
all
else
where(cp: cp)
end
end
def self.findkeyword(keyword)
kw=keyword.strip.downcase.squish.split(' ')
if kw.length == 0
all
else
where((Array.new(1, "lower(titre) like ? or lower(description) like ?")+kw.map{|h|Array.new(2,("%"+h+"%"))}.flatten))
end
end
belongs_to :user
attr_accessor :a_photo_1,:a_photo_2,:a_photo_3
validates_numericality_of :a_46610, allow_nil: true #salaire
def monsalaire
self.salaire.to_s.reverse.scan(/.{1,3}/).join(' ').reverse
end
attr_accessor "a_titre", "a_46610", "a_46613", "a_46611", "a_46612", "a_46614", "a_description", "a_lieu", "a_cp", "a_ville", "a_pays", "a_photo_1", "a_photo_2", "a_photo_3", "a_idup_photo", "a_email", "a_telephone",:a_ville, :a_pays,:a_lieu
before_validation :savevalues, on: :create
def savevalues
self.titre=self.a_titre
self.salaire=self.a_46610
self.duree=self.a_46613
self.entreprise=self.a_46612
self.fonction=self.a_46614
self.lieu=self.a_lieu
self.description=self.a_description
self.cp=self.a_cp
self.ville=self.a_ville
self.pays=self.a_pays
self.photo_1 = self.a_photo_1
self.photo_2 = self.a_photo_2
self.photo_3 ||= self.a_photo_3
self.telephone=self.a_telephone
self.email=self.a_email

end

validates_presence_of :a_titre, :a_description, :a_email, on: :create
validates :a_email, format: { with: URI::MailTo::EMAIL_REGEXP }, on: :create
def addvisit
update(visite: (self.visite.to_i+1))
end
end