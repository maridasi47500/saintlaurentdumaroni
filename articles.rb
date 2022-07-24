require "nokogiri"
require "open-uri"
#begin
#@urlfille=Nokogiri::HTML(URI.open(URI.parse(@url+url1)))
#rescue
#@urlfille=Nokogiri::HTML(URI.open(URI.parse(URI.escape(@url+url1))))
#end
def hackarticle(apage)
titre=apage.css('h1').text.strip.squish
p "titre"
texte=apage.css('.texte').inner_html.strip.squish rescue nil
p "texte"
auteur=apage.css('.auteur')[0].text.gsub('Rédigé le','').split('-') 
p "auteur"
mydate=auteur[0].downcase
p "mydate"
I18n.t('date.month_names',locale: :fr).zip(I18n.t('date.month_names',locale: :en)).each{|a,b|mydate.gsub!(a.to_s.downcase,b.to_s.downcase)}
p "photo"
photo=apage.css('.photo')[0].css('img')[0].attributes['src'].value rescue nil
p "myauteur"
myauteur=auteur[1]
p "creatarticle"

article=cat.articles.find_or_create_by(myurl:mlien, titre: titre,texte:texte,auteur: myauteur,created_at: mydate.to_datetime)
article.myphotos(photo)
apage.css('[class^=para_]').each do |t|
myphototop=t.css('.photo.top')[0]
myphoto=myphototop.try(:css, "img").try(:first)
myphoto = (myphoto ? myphoto.attributes['src'].value : nil) rescue nil
mytext=t.css('.texte').inner_html rescue nil
para=article.paras.find_or_initialize_by(photo: myphoto, texte:mytext)
p para
pjs=t.css('div.pj').each do |u|
name=u.css('a')[0].inner_html rescue nil
p name
file=u.css('a')[0].attributes['href'].value rescue nil
p file
type=u.css('img')[0].attributes['src'].value.split('/').last.gsub('icon_','').gsub('.gif','') rescue nil
p type
filename=u.css('img')[0].attributes['alt'].value rescue nil
p filename
pj=para.pjs.find_or_initialize_by(name: name,mytype: type,filename:filename)
filepj=u.css('a.pj')[0].attributes['href'].value rescue nil
pj.dl(filepj,filename)

end
end
article.save

article
end

@url="https://www.saintlaurentdumaroni.fr"
begin
@doc=Nokogiri::HTML(URI.open(URI.parse(@url)))
rescue
@doc=Nokogiri::HTML(URI.open(URI.parse(URI.escape(@url))))
end
@doc.css('.titre')[1..].each do |h|
link=h.css('a')[0]
next if !link
url1=link.attributes['href'].value.gsub(@url, '') rescue nil
name=link.text
next if name.include?('#')
urlid=url1.split('_r').last.gsub('.html','')
@category=Artcat.find_by(url: url1)
begin
@url4=Nokogiri::HTML(URI.open(URI.parse(@url+@category.url)))
rescue
@url4=Nokogiri::HTML(URI.open(URI.parse(URI.escape(@url+@category.url))))
end
@url4.css('.rubrique_fille').each do |j|
name=j.css('a')[0].text
next if name.include?('#')
url1=j.css('a')[0].attributes['href'].value.gsub(@url,'') rescue nil
urlid=url1.split('_r').last.gsub('.html','')
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

def articleinthispage(cat)
("0".."160").step(8).to_a.each do |mystart|
mycat=Nokogiri::HTML(URI.open(@url+cat.url+"?start="+mystart))
mycat.css('.lire_suite').each do |h|
mlien=h.css('a')[0].attributes['href'].value rescue nil
begin
@apage=Nokogiri::HTML(URI.open(URI.parse(@url+mlien)))
rescue
@apage=Nokogiri::HTML(URI.open(URI.parse(URI.escape(@url+mlien))))
end
titre=@apage.css('.titre.bloc')[0].inner_html.strip.squish rescue nil
if titre
photo=@apage.css('.photoevent')[0].children[0].attributes['rel'].value rescue nil
p "photo"
date=@apage.css('.date.bloc')[0].inner_html.downcase rescue nil
p "date"
heurefin=date.split('-').last.to_time
p "heurefin"
I18n.t('date.month_names',locale: :fr).zip(I18n.t('date.month_names',locale: :en)).each{|a,b|date.gsub!(a.to_s.downcase,b.to_s.downcase)}
heuredebut=date.to_time
p "heuredebut"
texte=@apage.css('.cel1')[0].css('.description')[1].inner_html.strip.squish rescue nil
p "heuretexte"
html=true
sepbread=@apage.css('.sepbread').last.css('a')[0]
namecat=sepbread.inner_html rescue nil
p "namecat"
urlcat=sepbread.attributes['href'].value rescue nil
p "urlcat"
@agenda=Agendacat.find_or_create_by(name: namecat, url: urlcat)
cat.events.find_or_create_by(myurl: mlien,agendacat: @agenda,begindate: date,enddate: date, begintime: heuredebut, endtime: heurefin,titre: titre,description: description)

else
article=hackarticle(apage)


end
end
end
end
if @urlfille
#aller voir les sous sous categories
p "aller voir les sous sous categories"
def findcat(link)
name=link.text
url1=link.attributes['href'].value.gsub(@url,'') rescue nil
urlid=url1.split('_r').last.gsub('.html','')
a=Artcat.find_by({url: url1})
p a
a
end
lien=@urlfille.css('#breads').css('a')
if lien[0]
@cat1=findcat(lien[0])
articleinthispage(@cat1)
end
if lien[1]
@cat2=findcat(lien[1])
begin
@cat1.rubriquefilles << @cat2
articleinthispage(@cat2)
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
if lien[2] && !lien[3]

#derniere categorie du bread, chercher les articles , commencer de 8 en 8 
articleinthispage(@cat3)
elsif lien[3]
articleinthispage(@cat4)
end


end
rescue SocketError
rescue ActiveRecord::RecordInvalid
end
end
