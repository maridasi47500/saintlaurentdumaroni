class Album < ApplicationRecord
has_many :photos
def self.findby(st)
if st
all.offset(st.to_i).limit(30)
else
all.limit(30)

end
end
def id_album
self.myurl.split('_ga')[1].split('.')[0]
end
def self.findbyid(x)
where("myurl like ?",("%"+x.to_s+"%"))[0]
end
end