require "nokogiri"
require "open-uri"

@doc=Nokogiri::HTML(URI.open("https://www.saintlaurentdumaroni.fr/agenda/submit/"))
@doc.css('#a_pays')[0].css('option').each do |pays|
p pays.attributes
Country.find_or_create_by(name: pays.text.strip.squish,countryid:pays.attributes['value'].value,mytype:pays.attributes['class'].value)
end
@doc.css('#a_pays_etat38')[0].css('option').each do |pays|
Country.find_or_create_by(name: pays.text.strip.squish,countryid:pays.attributes['value'].value,mytype:"etat38")
end
@doc.css('#a_pays_etat224')[0].css('option').each do |pays|
Country.find_or_create_by(name: pays.text.strip.squish,countryid:pays.attributes['value'].value,mytype:"etat224")
end
@doc.css('#a_pays_etat108')[0].css('option').each do |pays|
Country.find_or_create_by(name: pays.text.strip.squish,countryid:pays.attributes['value'].value,mytype:"etat108")
end
@doc.css('#a_pays_etat246')[0].css('option').each do |pays|
Country.find_or_create_by(name: pays.text.strip.squish,countryid:pays.attributes['value'].value,mytype:"etat246")
end
