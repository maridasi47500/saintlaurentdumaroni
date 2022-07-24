require "nokogiri"
require "open-uri"
@doc=Nokogiri::HTML(File.read(Rails.root.to_s+"/app/views/welcome/submit.html.erb"))
@doc.css('#a_id_rubrique').children.each do |y|
@j=Cat.find_by(name: y.inner_html.gsub('- ','').strip.squish)
if @j
@j.update(catid: y.attributes['value'].value)
end
end
