class Downloadpage < ApplicationRecord
has_many :pjhavedownloadpages
has_many :pjs, through: :pjhavedownloadpages
def mypjs
self.pjs.limit(4)
end
def nbpjs
self.pjs.length
end
def lotofpjs?
self.nbpjs > 4
end
end
