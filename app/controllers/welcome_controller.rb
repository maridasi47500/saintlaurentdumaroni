class WelcomeController < ApplicationController
before_action :set_my_article, only: [:article, :articlenewcomment]
before_action :set_my_note, only: [:showbreve,:notenewcomment]
protect_from_forgery except: [:uploadpic,:galerieimage,:otherarticles,:getvideos, :subscription,:mymodule,:agenda,:createarticle,:archives,:compose,:info,:comments,:mysocialparam,:inbox,:bookmarks,:mysocialparam,:mysocialpage,:social1,:social]
 before_action :find_catagenda, only: [:catagenda]
  before_action :find_eventagenda, only: [:eventagenda]
  before_action :set_calendar, except: [:otherarticles]
before_action :findcatorart, only: [:artcat]
before_action :authenticate_user!, only: [:newclassified, :newclassifiedjob]
def forum
@rooms=Room.myforums
@sujets=Subject.cinqderniers
end

def classifiedarticle
@job=Job.find(params[:id])

@product=Product.find(params[:id])
if params[:title] == @product.try(:titre).try(:parameterize)
@product.addvisit
@answer=Productanswer.new
render :classifiedproduct
elsif params[:title] == @job.try(:titre).try(:parameterize)
@job.addvisit
@answer=Jobanswer.new
render :classifiedjob

end
end
def uploadpic
name = params[:file].original_filename
      directory = "app/assets/images"
      # create the file path
      path = Rails.root.to_s+'/'+File.join(directory, name)
      p path
    # write the file
      File.open(path, "wb") { |f| f.write(params[:file].read) }
render inline: "/assets/"+name, layout: false
end
def modifier_profil
if current_user.update(modifieruser_params)
redirect_to request.path
else
p current_user.errors
end
end    
def newsletter
        @abo=NewsletterAbo.new
    end
def mynewsletter
        @abo=NewsletterAbo.new(abo_params)
        if @abo.save
            render :abonewsletterreussi
        else
            render :newsletter
        end    
    end
    def showannuaire
        @cat=Linkcat.find_by(id_soum: params[:id])
@links=Link.where(id_soum: params[:id]).limit(6).offset(params[:start].to_i).group('links.id').select("links.*, (select count(*) from links where id_soum = '#{params[:id]}' ) as total") 
   end
    def linkssubmit
        @link=Newlink.new(id_soum: params[:id])

    end
    def linkssubmitpost
        @link=Newlink.new(newlink_params)
        if @link.save   
            render :linksaved
        else
            render :linkssubmit
        end    
    end
    def mysocialpage
    @news=Article.allmynews(params[:start])
    @mynews=Article.allmynews_page(params[:start])

    end
    def getvideos
        
      case params[:ajax_subaction]


      when "get_page"
	@videos=Video.bystart(params[:start])
	@prev=Video.prevbystart(params[:start])
	@next=Video.nextbystart(params[:start])
	render :getthevideos
      else
        case params[:ajax_preview]
        when "1"
        @message=Message.newmessage(params[:mess],current_user)
        render :ajaxpreview, layout: false, locals:{message: @message} 
        else
        case params[:objet_type]
        when "forum"
        p "forum"
        @subject=Subject.find(params[:id_article])
        @subject.notes.create(note: params[:value], user_id: current_user.try(:id))
        session[:subject_id] ||={}
        session[:subject_id][@subject.id] ||=params[:value]
        when "post"
        p "post"
        @post=Post.find(params[:id_article])
        @post.notes.create(note: params[:value], user_id: current_user.try(:id))
        session[:post_id] ||={}
        session[:post_id][@post.id] ||=params[:value]

        else
	@article=Article.find(params[:id])
        @video=Video.find_by(article_id: params[:id])
      render :playthevideo, layout: false
      end
      end
      end
      
    end
    def playerlist
        @list=[]
    respond_to do |format| 
        format.json { render json: @list } 
    end
    end
    def newclassified
        @product=Product.new(a_email: current_user.email, user_id: current_user.id)
        render :classifiedsubmit
    end
    def newclassifiedjob
    @job=Job.new(a_email:current_user.email,user_id: current_user.id)
    end
    def playvideo
	@article=Article.findbyurl(params[:id])
        @video=Video.find_by(article_id: @article.id)
        render :playvideo
    end
    def gmap
    end
    def allvideos
        @videos=Video.findthreeparams(params[:sort],params[:start])
        render layout: "video"
    end
    def recent

        @video=Video.find_by(videoid: params[:p])
        @videos=Video.tenmostrecent
        render :videos

    end
    def videos
        @videos=Video.tenmostrecent
        @video=@videos.first
        render layout: "video"
    end
    def slideshow
        @album=Album.findbyid(params[:id])
    end
    def tags
        render layout: "colonneunique" 
    end
    def galerieimage
        p "test"
        yparams=params["amp;ABSOLUTE_HREF"] ? myfavparams.to_query : ""
        yparams=params["ABSOLUTE_HREF"] ? myotherfavparams.to_query : ""
        p yparams
        if params[:preaction] == "galerie"
                @photo=Photo.findbyid(params[:id_photo])
        render :galerieimage,layout:false

        elsif yparams.include?('login') || params[:iboxaction] == "login"
        if params[:r_login]
        @user=User.find_by_login(params[:r_login])
        if @user.try(:valid_password?,params[:r_password])
        @user.updatelastsignin
        bypass_sign_in(@user)
        head :ok, content_type: "text/html"

        else
        render :login, layout:false, locals: {user: @user}
        end
        else
        render :login, layout:false, locals: {user: User.new}
        end
        else
        case params[:actions]
        when "print"
        render :print
        when "rubrique"
        render :rubrique
        when "article"
        render :article
        when "commentaire"
        render :commentaire
        else
        
        case params[:iboxaction]
        when "login"
       
        
        @photo=Photo.findbyid(params[:id_photo])
        render :galerieimage
        
        end
        end

        end
     end
    def mymodule
        @photo=Photo.findbyid(params[:id_photo])
        render layout: false
     end
    def album
    @album=Album.findbyid(params[:id])
    end
    def galerie
    @albums=Album.findby(params[:start])
    end
    def article
    end 
    def articlenewcomment
        @comment=Comment.new(comment_params)
  if @comment.save
@article.comments << @comment
redirect_to request.path, notice: "Le commentaire a été publié."
    else
    p @comment.errors
    render :article
    end  
    end
    def showbreve
    end
    def notenewcomment
        @comment=Comment.new(comment_params)
if @comment.save
@note.comments << @comment
redirect_to request.path, notice: "Le commentaire a été publié."
    else
    render :showbreve
    end
    end
    def notes
        @notes=Note.findby(params[:start])
        @nbpages=@notes.nbpages    
    end
  def advancedsearchart
    @myadvancedparamslength=searcharticle_params.to_h.to_a.select{|a,b| b.strip.squish != "" && (a.to_s == "periode" ? b.to_s != "0" : a.to_s != "periode")}.length

    @article=Article.new(searchmyarticle_params)
    @results=@article.myonlyresults
  end
  def searcharticle
    notemptyparams=searcharticle_params.to_h.to_a.select{|a,b| b.strip.squish != "" && (a.to_s == "periode" ? b.to_s != "0" : a.to_s != "periode")}.to_h
    redirect_to advancedsearch_path(keyword: params[:keyword])+"/?"+notemptyparams.to_query
  end
  def attachment
    @pj=Pj.find(params[:id])
  send_data File.read(Rails.root.to_s+"/public/myfiles/"+@pj.filename),disposition:"inline",filename: (Rails.root.to_s+"/public/"+@pj.filename)
  end
  def agendasubmit
    @event=Event.new(user_id: current_user.try(:id))
  end
def classifiedproduct
@product=Product.find(params[:id])
if params[:delid] && params[:delid]
@product.destroy
@products=Product.all
render :classifiedsproduct
else

    
    @product.addvisit
@answer=Productanswer.new
render :classifiedproduct
end
    end
def answerclassifiedproduct
    @product=Product.find(params[:id])
    
@answer=@product.answers.new(answerclassified_params)
  @answer.save
        p @answer.errors
render :classifiedproduct
    
    end
    def classifiedjob
    @job=Job.find(params[:id])
if params[:delid] && params[:delid]
@job.destroy
@jobs=Job.all
render :classifiedsjob
else
    @job.addvisit

@answer=Jobanswer.new
render :classifiedjob
end
    end
def answerclassifiedjob
    @job=Job.find(params[:id])
    
@answer=@job.answers.new(answerclassified_params)
    @answer.save
    p @answer.errors
    render :classifiedjob
    
    end
  def classifieds
    @product=Product.new(myclassified_params.merge(mylocation: ""))
    @classifieds=@product.all1
  end  
  def classifiedsjob
@product=Product.new(myclassified_params.merge(mylocation: "Emploi"))
    @classifieds=@product.all1
    render :classifieds
  end  
  def classifiedsproduct
@product=Product.new(myclassified_params.merge(mylocation: "Produit"))
    @classifieds=@product.all1
  end  
  def createevent
    @event=Event.new(event_params)
    if @event.save
        render :createevent
    else  
        p @event.errors.messages
        render :agendasubmit

    end
  end
  def submit
    @article=Article.new(user_id: current_user.try(:id))

  end
  def createarticle
    @article=Article.new(article_params)
    if @article.save
        render :createarticle
    else  
        render :submit

    end
  end

    
def recommendevent
    @event=Event.findbyid(params[:id])
    @email=Emailevent.new(event:@event,id_soum: params[:id]) 
  end
  def sitemap
    @articles=Article.twentylast
  end
  def sendevent
    @email=Emailevent.new(event_email_params)
    
    if @email.save
        UserMailer.with(email: @email).friend_event.deliver_now

        render :sendevent
    else    
        render :recommendevent
    end
  end
  def recommendart
    @article=Article.findbyid(params[:id])
    @email=Emailarticle.new(article: @article,id_soum: params[:id])
    end
  def sendart
    @email=Emailarticle.new(article_email_params)
    if @email.save
        UserMailer.with(email: @email).friend_article.deliver_now

        render :sendevent
    else    
        render :recommendevent
    end
  
  end  
    def createclassifiedjob
        @job=Job.new(job_params)
        if @job.save
            redirect_to myclassifiedjob_path(title:@job.titre.parameterize,rubrique:"_jo",id:@job.id)
        else
            render :newclassifiedjob

        end
    end
    def createclassified
        @product=Product.new(product_params)
        if @product.save
            redirect_to myclassifiedproduct_path(title:@product.titre.parameterize,rubrique:"_pr",id:@product.id)
        else
            render :classifiedsubmit

        end  
    end
  def otherarticles

if params[:save_about] == "1" && params[:value]
current_user.update(description1: params[:value])
p current_user.errors
render :userdescription, layout: false
elsif params[:"void"] == "1" && params[:"iboxaction"] == "photo"
elsif params[:type_preview] == "message" && params[:"ajax"] == "true" && params[:"preview_ajax"] == "1"
@subject=Subject.new(newforum_params.merge(user_id: current_user.id))
render partial: "forum/previewanswer", layout: false
elsif params[:"ajax"] == "true" && params[:"iboxaction"] == "photo" && params[:a_photo]
current_user.updatemyimage(params[:a_photo])
p current_user.errors
render inline: "", layout: false
elsif params[:type] =="3"
if current_user.image
    render partial: "formreplacephoto", layout: false

else
    render partial: "formchangephoto", layout: false
   end 

elsif params[:edit_about] =="1"
    render partial: "formdescriptionuser", layout: false
    elsif params[:id] == "23406954"
@year=params[:yr].to_i
@month=params[:mo].to_i
        @selectdate=Date.new(@year,@month,1) rescue Date.today
@date=@selectdate.beginning_of_month 
@debut=@selectdate.monday
@fin=@date.end_of_month.sunday       
@semaines=(@debut..@fin).to_a.map{|h|h.month.to_i == @month.to_i ? h : nil}.each_slice(7).to_a
       render "calendrier",locals: {date: @selectdate,semaines: @semaines,nextmonth: (@month < 12 ? (@month + 1) : 1),nextyear: (@month < 12 ? @year : (@year + 1)),prevmonth: (@month > 1 ? (@month - 1) : 12),prevyear: (@month > 1 ? @year : @year - 1)}
     elsif params[:follow]
@user=User.find(params[:follow])
begin
@user.followers << current_user
rescue
end
p @user.errors
if ["social", "/social/wall/classifieds/"].any?{|h|params[:REQUEST_URI] == h}
@news=User.allnews(params[:start])
@mynews=User.allnews_page(params[:start])
render :petitesannonces, layout: false
else
render :follow, layout: false
end
elsif params[:unfollow]
@user=User.find(params[:unfollow])
@user.followers.delete(current_user)
if ["social", "/social/wall/classifieds/"].any?{|h|params[:REQUEST_URI] == h}
@news=User.allnews(params[:start])
@mynews=User.allnews_page(params[:start])
render :petitesannonces, layout: false
else
render :unfollow, layout: false
end


     else
    @article=Article.find(params[:numero])
    @articles=@article.otherarticles(params[:start],params[:mod_size])
    @next=@article.otherarticles((params[:start].to_i + 3),params[:mod_size]).length > 0 ? params[:start].to_i + 3 : 0
    calculate=(params[:start].to_i - 3)
    if calculate > 0 
    @prev= calculate 
    elsif calculate < 0 
        @prev=@article.artcat.articles.length + calculate - 1
    else
    @prev= 0
    end
    render :otherarticles
    end
  end
  def agenda
if params[:yy] && params[:dd] && params[:mm]
@date=Date.strptime((params[:yy]+'/'+params[:mm]+'/'+params[:dd]), '%Y/%m/%d')
end
if params[:keyword]
@search=Agendacat.new(agendasearch_params)
@events=@search.searchresults
else
@search=Agendacat.new
@events=Event.findbydate(@date)
end
  end
  def index
    @mostrecentarticlesmairie=Article.mostrecent
    @mostrecentarticles=Article.mostrecentwelcome
  end
  def artcat
    @myarticles=@rubrique.myarticles(params[:start])
    
  end
  def catagenda
@rubrique=Agendacat.find_by_url(request.path)
@search=Agendacat.new(cat: @rubrique.id)
@events=@search.searchresults
render :agenda

  end
  def eventagenda
    render :event
  end
  private
  def article_params
    params.permit(:a_titre, :a_id_rubrique, :a_chapeau, :a_intertitre, :a_html, :a_texte, :a_photo, :a_email, :a_auteur)
  end
  def set_calendar
if params[:yy] && params[:dd] && params[:mm]
@selectdate=Date.strptime((params[:yy]+'/'+params[:mm]+'/'+params[:dd]), '%Y/%m/%d')
p @selectdate
else
@selectdate=Date.today
end
p "select date"
p @selectdate
@year=@selectdate.year.to_i
@month=@selectdate.month.to_i
@date=Date.new(@year,@month,1)
@date=@date.beginning_of_month 
@debut=@date.monday
@fin=@date.end_of_month.sunday       
@semaines=(@debut..@fin).to_a.map{|h|h.month.to_i == @month.to_i ? h : nil}.each_slice(7).to_a
@nextmonth= (@month < 12 ? (@month + 1) : 1)
@nextyear= (@month < 12 ? @year : (@year + 1))
@prevmonth= (@month > 1 ? (@month - 1) : 12)
@prevyear= (@month > 1 ? @year : @year - 1)
  end
  def find_catagenda
    @rubrique = Agendacat.findbypath(request.path)
  end
  def find_eventagenda
    @event = Event.findbypath(request.path)

  end
  def findcatorart
    @rubrique=Artcat.find_by(url: request.path) 
    
end
  def agendasearch_params
    params.permit(:keyword, :keyword_safe, :cat, :period)
  end
  def article_email_params
    params.permit(:id_soum,:a_ami, :a_email, :a_nom, :a_message)
  end
  def event_email_params
    params.permit(:id_soum,:a_ami, :a_email, :a_nom, :a_message)
  end
  def searcharticle_params
    params.permit(:tagsearch,:periode,:titre, :id_rubrique, :chapeau, :intertitre, :html, :texte, :photo, :email, :auteur)
  end
  def searchmyarticle_params
    params.permit(:keyword,:tagsearch,:periode,:titre, :id_rubrique, :chapeau, :intertitre, :html, :texte, :photo, :email, :auteur)
  end

  def article_params
    params.permit(:user_id,:a_titre, :a_id_rubrique, :a_chapeau, :a_intertitre, :a_html, :a_texte, :a_photo, :a_email, :a_auteur)
  end
  def event_params
params.permit(:user_id,:a_telephone,:a_auteur,:a_pays_etat246,:a_pays_etat108, :a_pays_etat224,:a_pays_etat38,:a_pays,:a_ville,:a_cp,:a_lieu, :a_photo,:a_url,:a_description, :a_allday,:a_heure_date_fin,:a_date_fin,:a_heure_date_debut,:a_date_debut, :a_id_soum, :a_titre, :a_heure_date_debut)
  end
    def modifieruser_params
        params.require(:user).permit(:subaction,:commande_a_regler, :esc_identity, :a_login, :a_password, :a_password2, :a_visibilite, :a_pseudo, :a_prenom, :a_nom, :a_email,:a_abo_newsletter)
    end
    def user_params
        params.permit(:subaction,:commande_a_regler, :esc_identity, :a_login, :a_password, :a_password2, :a_visibilite, :a_pseudo, :a_prenom, :a_nom, :a_email,:a_abo_newsletter)
    end    

    def myfavparams
params.permit("preaction", "amp;action", "amp;iboxaction", "amp;ABSOLUTE_HREF")
    end
    def myotherfavparams
params.permit("preaction", "action", "iboxaction", "ABSOLUTE_HREF")
    end
    def myuser_params
        params.permit(:value)
    end
    def job_params
        params.permit(:a_46610, :a_46613, :a_46611, :a_46612, :a_46614,:a_photo_1,:a_photo_2,:a_photo_3,:user_id,"a_titre", "a_46601", "a_description", "a_lieu", "a_cp", "a_ville", "a_pays", "a_idup_photo", "a_email", "a_telephone")
    end
    def product_params
        params.permit(:a_photo_1,:a_photo_2,:a_photo_3,:user_id,"a_titre", "a_46610", "a_46613", "a_46611", "a_46612", "a_46614", "a_description", "a_lieu", "a_cp", "a_ville", "a_pays", "a_idup_photo", "a_email", "a_telephone")
    end
    def newlink_params
        params.permit(:id_soum,:a_url, :a_description, :a_titre, :a_auteur)
    end
def abo_params
        params.permit(:email,:html_texte)
    end
def set_my_article
    @article=Article.findbymyurl(params[:titre]) 
    @rubrique=@article.artcat
@comment=Comment.new(myuserid: current_user.try(:id))

end
def set_my_note
        @note=Note.findbyurl(params[:id])
@comment=Comment.new(myuserid: current_user.try(:id))
end
def comment_params
params.permit(:a_commentaire,:a_url,:a_commentaire,:a_pseudo,:a_email,:a_notify)
end
def myclassified_params
params.permit(:mylocation,:pa_specs_max_0, :pa_specs_min_0,:keyword, :keyword_safe, :cp_safe, :cp)
end
def answerclassified_params
params.permit(:a_email, :a_telephone, :upload_pj, :a_message)
end
def newforum_params
params.permit(:type_preview, :mess,:auteur)
end
end
