require "nokogiri"
require "open-uri"
@url="https://www.saintlaurentdumaroni.fr"
Event.all.each do |e|
@event=Nokogiri::HTML(URI.open(@url+e.myurl))
@photo=@event.css('.photoevent')[0].css('a')[0].attributes['rel'].value.split('?')[0]
e.update(photo: @photo)
`(cd "#{Rails.root.to_s}/public/photo" && wget "#{@url+@photo}")`
end
