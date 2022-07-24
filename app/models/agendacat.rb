class Agendacat < Cat
has_many :events
after_initialize :myresults
attr_accessor :searchresults,:keyword, :keyword_safe, :cat, :period
def myresults
if keyword
p "---my params---"
p searchresults
p keyword
p keyword_safe
p cat
p period
p "---"
begin
self.searchresults=Event.findbyparams(keyword, keyword_safe, cat, period)
p self.searchresults
rescue => e
p e.message
end
else

self.keyword ||= ""
self.keyword_safe ||= "Mots-clés, Code Postal"
self.period ||= "0"

self.searchresults=Event.findbyparams(keyword, keyword_safe, cat, period)


end
end
def self.findbypath(p)
find_by(url: p)
end
end
