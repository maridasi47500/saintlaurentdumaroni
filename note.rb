require "nokogiri"
require "open-uri"

def findnote(start)
@doc=Nokogiri::HTML(URI.open("https://www.saintlaurentdumaroni.fr/notes/?start="+start.to_s))
@doc.css('.cel1').each do |breve|
next if !breve.css('a')[0]
url=breve.css('a')[0].attributes['href'].value
@doc2=Nokogiri::HTML(URI.open("https://www.saintlaurentdumaroni.fr"+url))
title=@doc2.css('.titre_a')[0].inner_html
content=@doc2.css('#z_col2')[0].css('.texte')[0].inner_html
date=@doc2.css('.date')[0].inner_html.strip.squish
@note=Note.find_or_initialize_by(titre: title,myurl: url,mydate: date)
@note.content=content
#pj
pjs=@doc2.css('div.pj').each do |u|
p u
name=u.css('a')[0].inner_html rescue nil
p name, "name"
file=u.css('a')[0].attributes['href'].value rescue nil
p file, "file"

type=u.css('img')[0].attributes['src'].value.split('/').last.gsub('icon_','').gsub('.gif','') rescue nil
p type
filename=u.css('img')[0].attributes['alt'].value rescue nil
p filename, "filename"
next if !name
pj=@note.noteattachments.find_or_initialize_by(name: name,mytype: type,filename:filename)
filepj=u.css('a.pj')[0].attributes['href'].value rescue nil
pj.dl(filepj,filename)
end
#pj
@note.save
rescue => e
p e.message
next
end
end
findnote("")
(10..30).step(10).to_a.each do |h|
findnote(h)
end
