class NewsletterAbo < ApplicationRecord
validates :email, format: { with: URI::MailTo::EMAIL_REGEXP , message: "Votre adresse email semble erronée."}
validates_uniqueness_of :email, message: "Désolé, vous êtes déjà inscrit à la newsletter."
attr_accessor :html_texte

before_validation :myparams
def myparams
self.html=self.html_texte == "html"
end
end