class Newlink < ApplicationRecord
validates_presence_of :a_url
validates_presence_of :a_titre
validates_presence_of :a_auteur
attr_accessor :a_url, :a_titre, :a_auteur, :a_description


before_validation :fillinparam, on: [:create]
def fillinparam
self.url=self.a_url
self.email=self.a_auteur
self.titre=self.a_titre
self.description=self.a_description
end 
after_initialize do
self.a_url||="http://"
end

end