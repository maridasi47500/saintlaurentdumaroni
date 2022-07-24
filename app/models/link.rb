class Link < ApplicationRecord
validates_presence_of :url
validates_presence_of :titre
end