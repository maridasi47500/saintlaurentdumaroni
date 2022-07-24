require "nokogiri"
require "open-uri"
@url="https://www.saintlaurentdumaroni.fr"
(30..330).step(30).to_a.each do |start|
@doc = Nokogiri::HTML(URI.open("https://www.saintlaurentdumaroni.fr/photos/?start="+start.to_s))
@doc.css(".margin_titre").each do |titre|
@lien=titre.css('a')[0].attributes['href'].value
album=Nokogiri::HTML(URI.open(@url+"/slideshow/"+@lien.split("_ga")[1].split('.')[0]))
titre=album.title.split('|')[0].strip.squish
@album=Album.find_or_initialize_by(titre: titre)
album.css('.article-diaporama')[0].css('a').each do |g|
grandeimage=g.attributes['href'].value
petiteimage=g.css('img')[0].attributes['src'].value
@album.photos.find_or_initialize_by(petiteimage: petiteimage, grandeimage: grandeimage)
@album.myurl=@lien
end 
@album.save
end
end
