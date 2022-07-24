class Note < ApplicationRecord
has_many :notehavepjs
has_many :noteattachments, :through => :notehavepjs, :source => :pj

has_and_belongs_to_many :comments, :join_table => :noteshavecomments

def self.nbpages
Note.all.length / 10
end
def self.findby(start)

all.offset(start.to_i).limit((start.to_i == 1 ? 9 : 10))
end
alias_attribute :date,:mydate
def mypage
k=Note.all.ids.index(self.id).round(-1, half: :up)
k >= 10 ? ("?start="+k.to_s) : ""

end
def self.findbyurl(i)
Note.where('myurl like ?',"%#{i}%")[0]
end
end
