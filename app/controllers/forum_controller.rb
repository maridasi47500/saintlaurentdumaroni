class ForumController < ApplicationController
    before_action :setroom, only: [:createforum,:voirchambre, :newforum]
    before_action :setsujet, only: [:voirsujet,:createpost]
  def voirchambre
    
  end
def createpost

@subject.type_preview="message"
@subject.mymessage
@post=Post.new(post_params.merge(user_id: current_user.try(:id),subject_id:@subject.id))
if @post.save
redirect_to voirsujet_path(rubrique: "_m", id: @subject.id, title: @subject.titre.gsub(' ','-'), start: params[:start].to_i, anchor: "message")
else
render :voirsujet
end
end
    def voirsujet
    
    @subject.addvue
    @subject.htmlcodemessage
    @subject.posts.each {|x|x.htmlcodemessage}
    
    @post=Post.new
        @posts=@subject.myposts(params[:start])

    @subject.adejanote(current_user.try(:id), session["post_id"], session["subject_id"],@posts)

    end
    def newforum
        @subject=Subject.new
    end
    def createforum
    @subject=Subject.new(subject_params.merge(user_id: current_user.try(:id),room_id:@room.id))
    @subject1=@subject.dup
    if @subject1.save
    redirect_to voirsujet_path(id: @subject1.id,title:@subject1.titre,rubrique:"_m" )
    else
p @subject1.errors
    render :newforum
    end
end
private
def setroom
@room=Room.find(params[:id])
end
def setsujet
@subject=Subject.find(params[:id])

end
def subject_params
params.permit(:video,:n_video,:auteur,:mess,:n_message,:n_sujet,:n_email,:n_auteur)
end
def post_params
params.permit(:video,:n_video,:auteur,:mess,:n_message,:n_sujet,:n_email,:n_auteur)
end
end
