class Pj < ApplicationRecord
has_many :parashavepjs
has_many :paras, through: :parashavepjs
has_many :notehavepjs
has_many :pjs, :through => :notehavepjs
has_many :pjhavedownloadpages
has_many :downloadpages, through: :pjhavedownloadpages


def dl(dl,filename)
open(("#{Rails.root.to_s}/public/myfiles/"+filename), 'wb') do |file|
  file << open(dl).read
end
end
def dl3(dl,filename)
open(("#{Rails.root.to_s}/public/myfiles"+filename), 'wb') do |file|
  file << open(dl).read
end
end
def dlpic(fileimage)
myurl="https://www.saintlaurentdumaroni.fr"
namefile=fileimage.gsub('photo','').gsub('thumb','').gsub("/",'')
open(("#{Rails.root.to_s}/public/myfiles"+namefile), 'wb') do |file|
  file << open((myurl+fileimage)).read
end
write_attribute(:photo,namefile)
end
def filesize
File.size(Rails.root.to_s+"/public/myfiles/"+filename)
end
end
