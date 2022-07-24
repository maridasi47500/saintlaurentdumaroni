class Emailevent < ApplicationRecord
validates_presence_of :a_ami
validates :a_ami,
   :format => { :with => /(\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})(;\s*([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,}))*\z)/i },
   :allow_blank => true
validates_presence_of :a_nom
validates_presence_of :a_email
validates :a_email, format: { with: URI::MailTo::EMAIL_REGEXP }

validates_presence_of :a_message
attr_accessor :id_soum,:a_ami, :a_email, :a_nom, :a_message
belongs_to :event
before_validation :myid
def myerror(h)
self.errors.messages.keys.include?(h)
end
def myerrormessage(h)
self.errors.messages.to_h[h][0] rescue nil
end
def myid
self.event_id=(Event.findbyid(id_soum).id rescue nil)
self.ami = a_ami
self.nom = a_nom
self.email = a_email
self.message = a_message
end
after_initialize :mycontent
def mycontent
self.a_message = a_message || "Bonjour,\r\n
cet événement est susceptible de vous intéresser."

end
end