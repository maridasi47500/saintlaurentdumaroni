require "nokogiri"

require "open-uri"

@doc=Nokogiri::HTML(URI.open("https://www.saintlaurentdumaroni.fr/links/"))

@doc.css('.annuaire').each do |h|
@lien="https://www.saintlaurentdumaroni.fr"+h.css('a')[0].attributes['href'].value
@id_soum=@lien.split('_ai')[1].split('.')[0]
@cat=Linkcat.find_or_create_by(name: h.text.squish.strip)
@cat.update(id_soum: @id_soum)
(0..18).step(6).to_a.each do |t|
@doc2=Nokogiri::HTML(URI.open(@lien+"?start="+t.to_s))
@doc2.css('.photo').each do |y|
url=y.css('a')[0].attributes['href'].value
image=y.css('img')[0].attributes['src'].value rescue nil
description=y.css('img')[0].attributes['title'].value rescue nil
@link=Link.find_or_create_by(titre: description, url: url)
@link.update(image:image,id_soum: @id_soum)
end
end


end 