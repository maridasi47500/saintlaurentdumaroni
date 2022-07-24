class Productanswer < ApplicationRecord
belongs_to :product
attr_accessor :a_email, :a_telephone, :a_message
 
validates_presence_of :a_email, :a_message
validates :a_email, format: { with: URI::MailTo::EMAIL_REGEXP }, on: :create

before_validation :fillin, on: :create
def fillin
self.email=self.a_email
self.telephone=self.a_telephone
self.message=self.a_message
end
end