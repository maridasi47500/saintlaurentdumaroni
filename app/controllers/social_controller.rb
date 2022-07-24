class SocialController < ApplicationController
layout "colonneunique"
    before_action :connect, except: [:social1,:list]
protect_from_forgery except: [:ajaxpreview,:createmsg]
def list
@users=User.allusers(params[:start], params[:l], params[:order], params[:photo],params[:snskey])
@mylist=User.allusers_page(params[:start], params[:l], params[:order], params[:photo],params[:snskey])
if params[:snskey]
render :searchlist
else
render :list
end
end

def comments
@user=User.find(params[:id])
@news=@user.touscommentaires(params[:start])
@mynews=@user.touscommentaires_page(params[:start])
if current_user.id == @user.id
render :mysocialpage
else
render :mysocialpageeveryone
end
end
def mysocialpage
@user=User.find(params[:id])
@user.viewmypage
@news=@user.allmynews(params[:start])
@mynews=@user.allmynews_page(params[:start])
if current_user.id == @user.id
render :mysocialpage
else
render :mysocialpageeveryone
end
end
def myforum
@user=User.find(params[:id])
@news=[]
if current_user.id == @user.id
render :mysocialpage
else
render :mysocialpageeveryone
end
end
def info
@user=User.find(params[:id])

if current_user.id == @user.id
render :info
else
render :infoeveryone
end
end
def myjs
if params[:void] == "1" && params[:iboxaction] == "photo"
p "option 1"
render :blankpage, layout: false

elsif params[:iframe] == "1" && params[:iboxaction] == "photo"
p "option 2"
if  current_user.image
render partial: "formresizephoto", layout: false
else
render partial: "welcome/formaddphoto", layout: false
end
end
end
def mysocialparam
current_user.initializemyattributes
end
def social1
@news=User.allnews(params[:start])
@mynews=User.allnews_page(params[:start])
render :activites

end
def wallforums
@news=User.tousforums(params[:start])
@mynews=User.tousforums_page(params[:start])
render :activites
end
def wallcomments
@news=User.touscommentaires(params[:start])
@mynews=User.touscommentaires_page(params[:start])
render :activites
end
def wallfollowed
@news=current_user.touscommentairesfollowed(params[:start])
@mynews=current_user.touscommentairesfollowed_page(params[:start])
render :activites
end
def wallclassifieds
@news=User.petitesannonces(params[:start])
@mynews=User.petitesannonces_page(params[:start])
render :activites
end
def renderattachment
    @message=Message.find(params[:id])
  send_data File.read(Rails.root.to_s+"/public/msgfiles/"+@message.attachment),disposition:"attachment",filename: @message.attachment
end
def compose
case params[:autocomplete]
when "1"
render json: User.listcontacts(params[:field],params[:term])
else
end
end
def ajaxpreview
render layout: false
end
def createmsg
@message=Message.new(msg_params.merge(myuserid: current_user.id))
if @message.save
redirect_to "/social/archives/#{@message.thread_id}/"
else
p @message.errors
end
end
def archivesshow
@thread=Mythread.find(params[:id])
@allmessages=@thread.messages.updatevues(current_user.try(:id))
@message=@allmessages.first

@othermsg=@allmessages[1..-1]
end
def archives
@messages=current_user.allread
render :inbox, layout: "colonneunique"
end 
def inbox
@messages=current_user.allunread
    render layout: "colonneunique"
    end
private
def msg_params
params.permit("envoyer_message", "id_thread","envoyer_nmessage",  "a_dest", "a_sujet", "a_message", "a_file","a_destinataires"=>[])
end
def connect
if !user_signed_in?
redirect_to "/social"
end
end
end
