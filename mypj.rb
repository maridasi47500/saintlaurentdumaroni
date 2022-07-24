require "nokogiri"
require "open-uri"
@url="https://www.saintlaurentdumaroni.fr"
@doc=Nokogiri::HTML(File.read(Rails.root.to_s+'/app/views/welcome/downloadsmodele.html.erb'))
@doc.css('.classeur, .delimiter').each do |u|
if u.attributes['class'].value.include?("classeur")
url=u.css('a')[0].attributes['href'].value
title=u.css('a')[0].text
@classeur=Downloadpage.find_or_create_by(title: title,url:url)
elsif u.attributes['class'].value.include?("delimiter")
name=u.css('a')[1].text rescue nil
p name
p "name"
filename=u.css('a')[0].attributes['href'].value.gsub("/","").gsub("file","")+".png" rescue nil
p filename
type=u.css('img')[1].attributes['src'].value.split('/').last.gsub('icon_','').gsub('.gif','') rescue nil
p type
image=u.css('img')[0].attributes['src'].value rescue nil
p image
file=u.css('a')[0].attributes['href'].value rescue nil
p file

pj=Pj.find_or_create_by(name: name,mytype: type,filename:name)
@classeur.pjs << pj
p "filepj"
pj.dl3((@url+file),filename)
pj.dlpic((image))
infodate=u.css('.information').text.split('|')[2].gsub('Publié le :','').strip.squish

pj.created=infodate
pj.save

end
rescue OpenURI::HTTPError => e
p e.message
next
end

