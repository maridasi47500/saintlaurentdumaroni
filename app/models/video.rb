class Video < ApplicationRecord
#belongs_to :article, optional: true
def article
Article.find(self.article_id) rescue nil
end
def self.findthreeparams(sort,page)
sortvid(sort).pagevid(page).limit(20)
end
def self.sortvid(j)
unless !j

case j
when 'popular'
order(:vue => :desc)
when 'recent'
order(:created_at => :desc)
end

else
select('*')
end
end
def self.pagevid(j)
unless !j
offset(j.to_i)

else
select('*')

end
end
def self.bystart(h)
all.offset(h.to_i).limit(10)
end
def self.prevbystart(h)
if h.to_i > 0
(h.to_i - 10)
else
 nil
end
end
def self.nextbystart(h)
j=bystart((h.to_i + 10))
j.length > 0 ? (h.to_i + 10) : nil
end
def self.findby(p)
all.offset(p.to_i).limit(20)
end
def self.tenmostrecent
all.limit(10)
end
def myurl
article.try(:myurl)
end
def idimage
image.split("video/")[1].split("/module")[0]
end
def playid
h=read_attribute(:playid)
h.to_i > 0 ? h : nil
end
def idarticle
article.try(:id_article)
end
end
