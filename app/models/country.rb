class Country < ApplicationRecord
def self.findbytype(x)
where('mytype = ?',x)
end
def self.findbytwotypes(x,y)
where('mytype = ? or mytype = ?',x,y)
end
def self.findbythreetypes(x,y,z)
where('mytype = ? or mytype = ? or mytype = ?',x,y,z)
end
end
