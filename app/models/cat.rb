class Cat < ApplicationRecord
validates_uniqueness_of :name
end
