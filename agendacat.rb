require "nokogiri"
require "open-uri"
@doc=Nokogiri::HTML(File.read(Rails.root.to_s+"/_selectcat.html.erb"))
@doc.css('[name=cat]').children.each do |y|
@j=Agendacat.find_by(name: y.inner_html.gsub('- ','').strip.squish)
if @j
@j.update(catid: y.attributes['value'].value)
end
end
