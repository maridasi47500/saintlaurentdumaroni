class Artcat < Cat
has_many :otherartcats
has_many :rubriquefilles, through: :otherartcats, source: :otherartcat
has_many :otherartcatbis, foreign_key: "otherartcat_id", class_name: "Otherartcat"
has_many :rubriquemeres, through: :otherartcatbis, source: :artcat
has_many :articles
has_many :eventshaveartcats
has_many :events, through: :eventshaveartcats
def self.firstcats
Artcat.where(name: ["Mairie","Vie pratique","Culture/patrimoine","Sport","Education","Aménagement urbain","Economie/Emploi","Citoyenneté","Associations"])
end
def self.catsform
firstcats.map {|x|[[x.name,x.id]]+x.rubriquefilles.collect{|y|[[("- "+y.name),y.id]]+y.rubriquefilles.collect{|z|[[("- - "+z.name),z.id]]}}}.flatten.each_slice(2).to_a
end
def myarticles(st)
articles.each_slice(2).to_a

#.offset((st ? st.to_i : nil)).limit(8)
end
def myarticlesbis(st)
articles.offset(st.to_i).limit(4).each_slice(2).to_a
end
def rubrique1
self.try(:rubriquemeres).try(:first)
end
def rubrique2
self.try(:rubriquemeres).try(:first).try(:rubriquemeres).try(:first)
end
def rubrique3
self.try(:rubriquemeres).try(:first).try(:rubriquemeres).try(:first).try(:rubriquemeres).try(:first)
end
def self.findcatorart(x)
Artcat.find_by(url: x) || Article.find_by(myurl: x)
end

end
