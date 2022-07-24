class Articleshavecomment < ApplicationRecord
belongs_to :article
belongs_to :comment
validates_uniqueness_of :article_id, scope: :comment_id
end

