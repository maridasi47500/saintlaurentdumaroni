class Photo < ApplicationRecord
belongs_to :album
def iphone
grandeimage.gsub("pic/gal","iphone/igal")
end
def crop
grandeimage.gsub("pic/gal","pic/crop")
end
def id_prev_photo
j=self.album.photo_ids

Photo.find(j[(j.index(self.id) - 1)] || j.last).id_photo
end
def id_next_photo
j=self.album.photo_ids

Photo.find(j[(j.index(self.id) + 1)] || j[0]).id_photo

end
def id_photo
petiteimage.split('-')[1].split('.')[0]
end
def self.findbyid(x)
where("petiteimage like ?",("%-"+x.to_s+".%"))[0]
end

end
