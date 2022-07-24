require 'open-uri'

class Noteattachment < ApplicationRecord
belongs_to :note
validates_presence_of :filename
has_many :notehavepjs
has_many :notes, through: :notehavepjs

def dl(dl,filename)
open(("#{Rails.root.to_s}/public/myfiles/"+filename), 'wb') do |file|
  file << open(dl).read
end
end
def filesize
File.size(Rails.root.to_s+"/public/myfiles/"+filename)
end

end
