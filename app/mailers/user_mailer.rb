class UserMailer < ApplicationMailer
  default from: 'cleo.ordioni@gmail.com'

  def friend_article
    @email = params[:email]
    mail(to: @email.ami.split(';'), subject: "SAINTLAURENTDUMARONI.FR - #{@email.article.titre}")
  end
  def friend_event
    @email = params[:email]
    mail(to: @email.ami.split(';'), subject: "SAINTLAURENTDUMARONI.FR - #{@email.event.name}")
  end
end
