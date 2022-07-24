class SigninJob < ApplicationJob
  queue_as :default

  def perform(user)
    # Do something later
ActionCable.server.broadcast("chat_saintlaurent", { pseudo: user.try(:pseudo),user_id: user.try(:id),body: "This Room is Best Room." })

  end
end
