class Classified < ApplicationRecord
def all1
y=Product.all.to_a+Job.all.to_a
y.sort_by{|h|h.created_at}
y
end
end