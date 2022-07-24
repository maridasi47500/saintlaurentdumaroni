class Para < ApplicationRecord
belongs_to :article
has_many :parashavepjs
has_many :pjs, through: :parashavepjs
end
