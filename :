require "nokogiri"
require "open-uri"
@url="https://www.saintlaurentdumaroni.fr"
begin
@doc=Nokogiri::HTML(URI.open(URI.parse(@url)))
rescue
@doc=Nokogiri::HTML(URI.open(URI.parse(URI.escape(@url))))
end
@doc.css('.titre')[1..].each do |h|
link=h.css('a')[0]
next if !link
url1=link.attributes['href'].value.gsub(@url, '')
name=link.text
next if name.include?('#')
urlid=url1.split('_r').last.gsub('.html','')
@category=Artcat.find_or_create_by(name: name,url: url1,catid: urlid)
begin
@url4=Nokogiri::HTML(URI.open(URI.parse(@url+@category.url)))
rescue
@url4=Nokogiri::HTML(URI.open(URI.parse(URI.escape(@url+@category.url))))
end
@url4.css('.rubrique_fille').each do |j|
name=j.css('a')[0].text
next if name.include?('#')
url1=j.css('a')[0].attributes['href'].value.gsub(@url,'')
urlid=url1.split('_r').last.gsub('.html','')
p "urlfille ---ici"
begin
@urlfille=Nokogiri::HTML(URI.open(URI.parse(@url+url1)))
rescue
@urlfille=Nokogiri::HTML(URI.open(URI.parse(URI.escape(@url+url1))))
end
#@cat=Artcat.find_or_create_by(url: url1, name: name,catid: urlid)
#begin
#@category.rubriquefilles << @cat
#rescue
#end
if @urlfille
#aller voir les sous sous categories
p "aller voir les sous sous categories"
def findcat(link)
name=link.text
url1=link.attributes['href'].value.gsub(@url,'')
urlid=url1.split('_r').last.gsub('.html','')
a=Artcat.find_or_create_by({name: name, url: url1, catid: urlid})
p a
a
end
lien=@urlfille.css('#breads').css('a')
if lien[0]
@cat1=findcat(lien[0])
end
if lien[1]
@cat2=findcat(lien[1])
begin
@cat1.rubriquefilles << @cat2
rescue
end
end
if lien[2]
@cat3=findcat(lien[2])
begin 
@cat2.rubriquefilles << @cat3
rescue
end
end
if lien[3]
@cat4=findcat(lien[3])
begin
@cat3.rubriquefilles << @cat4
rescue
end
end


end
rescue SocketError
rescue ActiveRecord::RecordInvalid
end
end
