class Product < ApplicationRecord
belongs_to :user
has_many :answers, class_name: "Productanswer"
attr_accessor :all1, :mylocation, :pa_specs_max_0, :pa_specs_min_0,:keyword, :keyword_safe, :cp_safe, :cp
attr_accessor :a_titre, :a_description, :a_lieu, :a_cp, :a_ville, :a_pays, :a_idup_photo, :a_email, :a_telephone
after_initialize :setall1
attr_accessor "a_46601", :a_photo_1,:a_photo_2,:a_photo_3
validates_presence_of :a_titre, :a_description, :a_email, on: :create
validates :a_email, format: { with: URI::MailTo::EMAIL_REGEXP }, on: :create
before_validation :setvalues, on: :create
def setvalues
self.titre=self.a_titre
self.email = self.a_email
self.description = self.a_description
self.lieu=self.a_lieu
self.ville=self.a_ville
self.pays=self.a_pays
self.cp=self.a_cp
self.telephone=self.a_telephone
self.photo_1 = self.a_photo_1
self.photo_2 = self.a_photo_2
self.photo_3 ||= self.a_photo_3
self.prix ||= self.a_46601
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
where(Array.new(1, "lower(titre) like ? or lower(description) like ?")+kw.map{|h|Array.new(2,("%"+h+"%"))}.flatten)
end
end

def setall1
    if self.mylocation
        if self.mylocation.include?('Produit')
        ads=(Product.findkeyword(self.keyword).findcp(self.cp).to_a).sort_by{|x|x.created_at}.reverse
        
elsif self.mylocation.include?('Emploi')
        ads=(Job.findkeyword(self.keyword).findcp(self.cp).to_a).sort_by{|x|x.created_at}.reverse
        
else
        ads=(Product.findkeyword(self.keyword).findcp(self.cp).to_a+Job.findkeyword(self.keyword).findcp(self.cp).to_a).sort_by{|x|x.created_at}.reverse
        
        end
self.all1=ads
    end

self.all1||= []
end
def addvisit
update(visite: (self.visite.to_i+1))
end
end