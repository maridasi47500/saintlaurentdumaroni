class Jobanswer < ApplicationRecord
belongs_to :job
attr_accessor :a_email, :a_telephone, :upload_pj, :a_message

validates_presence_of :a_email, :a_message
validates :a_email, format: { with: URI::MailTo::EMAIL_REGEXP }, on: :create

before_validation :fillin, on: :create
def fillin
self.email=self.a_email
self.telephone=self.a_telephone
self.message=self.a_message
self.pj=self.upload_pj
end
def pj=(x)
myname = x.original_filename
      directory = "public/cvs"
      # create the file path
      path = Rails.root.to_s+'/'+File.join(directory, myname)
write_attribute(:pj, name)
end
end