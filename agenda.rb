require "nokogiri"
require "open-uri"
#@datedebut=Date.new(2018,8,6)
@datedebut=Date.new(2018,8,13)

def savearticle(apage,mlien)
titre=apage.css('div.titre')[0].text.strip.squish rescue nil
p titre
if titre
photo=apage.css('.photoevent')[0].css('a')[0].attributes['rel'].value.split('?')[0] rescue nil
p "photo"
`(cd #{Rails.root.to_s+"/public/photo"} && wget "#{@url+photo.split('?')[0]}")`
date=apage.css('.date')[0].inner_html.downcase rescue nil
p "date"
if date.include?('le')
datedebut=date
datefin=date
heurefin=date.split('-').last.to_time rescue ""
p "heurefin"
I18n.t('date.month_names',locale: :fr).zip(I18n.t('date.month_names',locale: :en)).each{|a,b|date.gsub!(a.to_s.downcase,b.to_s.downcase)}
heuredebut=date.to_time
p "heuredebut"
elsif date.include?('du')
datedebut=date.split('au')[0].downcase.gsub('du','')
datefin=date.split('au')[1].downcase.gsub('du','')
heurefin=date.split('-').last.to_time rescue ""
p "heurefin"
I18n.t('date.month_names',locale: :fr).zip(I18n.t('date.month_names',locale: :en)).each{|a,b|date.gsub!(a.to_s.downcase,b.to_s.downcase)}
heuredebut=date.to_time
p "heuredebut"
end
begin
texte=apage.css('.cel1')[0].css('.description')[1].inner_html.strip.squish rescue nil
someinfos=apage.css('.infos.bloc')[0].css('.infos').map{|h|h.text}
someotherinfos=apage.css('.moreinfos')[0].css('.infos').map{|h|h.text}
allinfos=someinfos+someotherinfos
if allinfos.length == 3
adresse=allinfos[0]
ville=allinfos[1]
tel=allinfos[2]
end
rescue => e
p e.message
end
p "heuretexte"
html=true
sepbread=apage.css('#breads')[0].css('a').last
namecat=sepbread.inner_html rescue nil
p "namecat"
urlcat=sepbread.attributes['href'].value rescue nil
p "urlcat"
@agenda=Agendacat.find_or_create_by(name: namecat, url: urlcat)
event=Event.find_or_create_by(adresse:adresse,tel:tel,ville:ville,agendacat_id: @agenda.id,myurl: mlien,begindate: datedebut,enddate: datefin, begintime: heuredebut, endtime: heurefin,name: titre,description: texte)
event.update(photo: photo)

end
end


#p i
@url="https://www.saintlaurentdumaroni.fr"

(@datedebut..Date.today).to_a.each do |date|
k=@url+"/agenda/#{date.year}/#{date.month}/#{date.day}/"
p k
@doc2=Nokogiri::HTML(URI.open(k))
@doc2.css('h3.titre').each do |h|
lien=h.css('a')[0].attributes['href'].value
@doc3=Nokogiri::HTML(URI.open(@url+lien))
savearticle(@doc3,lien)
end
end
