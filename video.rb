require "nokogiri"
require "open-uri"
Video.delete_all
@url="https://www.saintlaurentdumaroni.fr"

@myvar=false
def hackarticle(apage,mlien)
titre=apage.css('h1').text.strip.squish
p "mon titre"
texte=apage.css('.texte').inner_html.strip.squish rescue nil
p "mon texte"
auteur=apage.css('.auteur')[0].text.gsub('Rédigé le','').split('-') 
p "mon auteur 1"
mydate=auteur[0].downcase
p "ma date"
I18n.t('date.month_names',locale: :fr).zip(I18n.t('date.month_names',locale: :en)).each{|a,b|mydate.gsub!(a.to_s.downcase,b.to_s.downcase)}
p "ma photo"
photo=apage.css('.photo')[0].css('img')[0].attributes['src'].value rescue nil
p "mon auteur"
myauteur=auteur[1]

cat=Artcat.find_by(name: apage.css('.access')[0].text.strip.squish)
#article1=Article.where(titre: titre,myurl: mlien)
#if article1
#p "supprimer l'article"
#article1.destroy_all
#end
p "créer l'article"
article=cat.articles.find_or_create_by(myurl:mlien, titre: titre,texte:texte,auteur: myauteur,created_at: mydate.to_datetime)
p "ajouter les photos"
article.myphotos(photo)

apage.css('[class^=para_]').each_with_index do |t,iii|
p "paragraphe de l'article n°#{iii}"
myphototop=t.css('.photo.top')[0]
myphoto=myphototop.try(:css, "img").try(:first)
myphoto = (myphoto ? myphoto.attributes['src'].value : nil) rescue nil
mytext=t.css('.texte').inner_html rescue nil
para=article.paras.find_or_initialize_by(photo: myphoto, texte:mytext)
p "mon paragraphe"
p para
pjs=t.css('div.pj').each do |u|
name=u.css('a')[0].inner_html rescue nil
p "nom de ma pièce jointe"
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

return article
end
def url_decode(s)
s.gsub(/((?:%[0-9a-fA-F]{2})+)/n) do
[$1.delete('%')].pack('H*')
end
end
def findarticle(str)
@articleurl=url_decode(str.split('url=')[1])
doc=Nokogiri::HTML(URI.open(@articleurl))
p doc.title
article=hackarticle(doc,@articleurl)
return article.try(:id)
end
(0..40).step(20).each do |vid|
@doc = Nokogiri::HTML(URI.open("https://www.saintlaurentdumaroni.fr/videos/all/?start="+vid.to_s))
@doc.css(".video_box").each do |video|
img=video.css('img')[0]
filename=img.attributes['alt'].value
image=img.attributes['src'].value
videoid=video.css('a')[0].attributes['href'].value.split('p=')[1]
@video=Video.find_or_create_by(filename: filename,image: image,videoid: videoid)
@page=Nokogiri::HTML(URI.open("https://www.saintlaurentdumaroni.fr/videos/recent/?p="+@video.videoid.to_s))
p @page.title
@video.titre=@page.css('#titre_video')[0].text.strip.squish
p @video
@video.description=@page.css('.infos-video')[0].text.strip.squish
@urlframe=@page.css('iframe')[0].attributes['src'].value
p "iframe"
p @urlframe
id5=@urlframe.split("/")[5].split('?')[0].to_i rescue nil
id4=@urlframe.split("/")[4].split('?')[0].to_i rescue nil
@video.playid = (id5 == id4) ? nil : id5
@video.myvideoid = id4
p @urlframe
@k= @page.css('#video_select_buzz')[0].children.select{|h|!h.is_a?(Nokogiri::XML::Text)}[2]
p @k
@video.article_id ||= findarticle(@k.attributes['value'].value)

#Article.findbyid(@urlframe.split('/embed/')[1].split('/')[0])
mytime=@page.css('.lien')[0].css('.texte')[0].text.gsub('sec','').strip.squish.gsub('min',':').gsub(' ','')
@video.time=['00',mytime[0].to_s, mytime[1].to_s].join(':')
@video.vue=@page.css('.lien')[1].css('.texte')[0].text
#@doc2=Nokogiri::HTML(URI.open(@urlframe))
@video.save
end
end
#@doc=Nokogiri::XML(URI.open("https://www.saintlaurentdumaroni.fr/xml/videopodcast.xml"))
#@doc.xpath("//item")
