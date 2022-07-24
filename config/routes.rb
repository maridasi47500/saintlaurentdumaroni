Rails.application.routes.draw do
  get 'forum/voirchambre'
devise_for :users
    get "social/list", to: "social#list", as: :mysociallist
    get "social/wall/classifieds", to: "social#wallclassifieds" 
    get "social/wall/forum", to: "social#wallforums" 
    get "social/wall/comments", to: "social#wallcomments" 
    get "social/wall/followed", to: "social#wallfollowed" 
    get "social/archives/:id", to: "social#archivesshow"
    get "social/archives", to: "social#archives"
    get "social/compose", to: "social#compose"
    get "social/inbox", to: "social#inbox"

  get "/notes/:title:category:id.html", to: "welcome#showbreve", constraints: {category: "_b",:id => /[0-9]+(\%7C[0-9]+)*/}, as: :mynote
  post "notes/:titre:category:id.html", to: "welcome#notenewcomment", constraints: {category: "_b",:id => /[0-9]+(\%7C[0-9]+)*/}, as: :commentmynote  

get "/links/submit/:id/", to: "welcome#linkssubmit"
post "/links/submit/:id/", to: "welcome#linkssubmitpost"
get "/links/:titre_:rubrique:id.html", to: "welcome#showannuaire", constraints: {rubrique: "ai"}, as: :myannuaire
   devise_scope :user do
    get "subscription", to: "users/registrations#new"
    post "subscription", to: "users/registrations#create"

      get 'logout', to: 'users/sessions#destroy'
      get 'sign_in', to: 'devise/sessions#new'
get "/members/pass/", to: "users/passwords#new"
    end
post "uploadpic", to: "welcome#uploadpic", as: :uploadpic 
 patch "/social/:id/param", to:"welcome#modifier_profil", as: :modifier_profil
    get "/snsfile/:id", to: "social#renderattachment"
    post "social", to: "social#createmsg"
    get "social/:id/comments", to: "social#comments"
    get "social/:id/info", to: "social#info"
    get "social/:id/bookmarks", to: "social#bookmarks"
    get "social/:id/param", to: "social#mysocialparam"
    get "social/:id/forum", to: "social#myforum"
    get "social/:id", to: "social#mysocialpage", as: :myprofile


    get "social", to: "social#social1", as: :allnews
    get "/classifieds/Emploi_pc18793.html", to: "welcome#classifiedsjob", as: :classifiedsjob
    get "/classifieds/Produit_pc18791.html", to: "welcome#classifiedsproduct", as: :classifiedsproduct
    get "/classifieds/:title:rubrique:id.html", to: "welcome#classifiedarticle", constraints: {rubrique: "_pa"}
    get "/classifieds/:title:rubrique:id.html", to: "welcome#classifiedrubrique", constraints: {rubrique: "_pc"}
    get "/classifieds/:title:rubrique:id.html", to: "welcome#classifiedjob", constraints: {rubrique: "_jo"}, as: :myclassifiedjob
    post "/classifieds/:title:rubrique:id.html", to: "welcome#answerclassifiedjob", constraints: {rubrique: "_jo"}, as: :answermyclassifiedjob
    get "/classifieds/:title:rubrique:id.html", to: "welcome#classifiedproduct", constraints: {rubrique: "_pr"}, as: :myclassifiedproduct
    post "/classifieds/:title:rubrique:id.html", to: "welcome#answerclassifiedproduct", constraints: {rubrique: "_pr"}, as: :answermyclassifiedproduct
    get "/social/:id/classifieds", to: "welcome#myclassifieds"

    get "downloads", to: "welcome#downloads"
    get "faq", to: "welcome#faq"
    get "shop", to: "welcome#shop"
    get "tags", to: "welcome#tags" 
    get "gmap", to: "welcome#gmap"
    get "classifieds", to: "welcome#classifieds", as: :allclassifieds
    get "search/:term", to: "welcome#searchpage"
    get "glossary", to: "welcome#glossary"
    get "faq", to:"welcome#faq"
    get "links", to: "welcome#links"
    get "/forum", to: "welcome#forum"
    get "/forum/new/:id/", to: "forum#newforum", as: :newforum
    post "/forum/new/:id/", to: "forum#createforum", as: :createforum
    get "/forum/:nom_s:id.html", to: "welcome#myforum"
    get "/forum/:title:rubrique:id.html", to: "forum#voirsujet", as: :voirsujet, constraints: {rubrique: "_m"}
    post "/forum/:title:rubrique:id.html", to: "forum#createpost", as: :voirsujet, constraints: {rubrique: "_m"}, as: :createpost
    get "/forum/:title:rubrique:id.html", to: "forum#voirchambre", as: :voirchambre, constraints: {rubrique: "_s"}
    get "newsletter", to: "welcome#newsletter"
    post "newsletter", to: "welcome#mynewsletter"
  
  get "classifieds/submit", to: "welcome#newclassified"
  post "classifieds/submit", to: "welcome#createclassified"
  get "classifieds/submit/18791", to: "welcome#newclassified"
  post "classifieds/submit/18791", to: "welcome#createclassified"
  get "classifieds/submit/18793", to: "welcome#newclassifiedjob"
  post "classifieds/submit/18793", to: "welcome#createclassifiedjob"
  post "/", to: "welcome#getvideos"
    get "/xml/video.xml", to: "welcome#xml"
  get "/player/ads/list", to: "welcome#playerlist"
  post "/player/ads/list", to: "welcome#playerlist"
  get "embed/:id(/:id2)", to: "welcome#playvideo", as: :playvideo
  get "videos/all", to: "welcome#allvideos", as: :allvideos, sort: 'recent', mylayout: 'grid'
  get "videos/:sort(/:mylayout)", to: "welcome#allvideos", as: :videorecent, mylayout: 'grid'  
  get "videos", to: "welcome#videos", as: :videos
  get "/index.php", to: "welcome#galerieimage"  
  post "/index.php", to: "welcome#galerieimage"  
  post "/mymodule/5601812", to: "welcome#mymodule"  
  get "/photos/:titre:rubrique:id.html", to: "welcome#album", :constraints => {rubrique:"_ga", :id => /[0-9]+(\%7C[0-9]+)*/ }

  get "/slideshow/:id", to: "welcome#slideshow", as: :slideshow
  get "/photos", to: "welcome#galerie", as: :galerie  
  get "notes", to: "welcome#notes"
  post "/search/:keyword", to: "welcome#advancedsearchart"
  get "/search/:keyword", to: "welcome#advancedsearchart", as: :advancedsearch
  get "/search", to: "welcome#searcharticle"
  get "attachment/:id", to: "welcome#attachment"
  post "/agenda/send/:id/", to: "welcome#sendevent", as: :sendagenda
  post "/send/:id/", to: "welcome#sendart", as: :send

  get "/agenda/send/:id/", to: "welcome#recommendevent"
  get "/send/:id/", to: "welcome#recommendart"
  post "/mymodule/:id/", to: "welcome#otherarticles"
  get ":titre:rubrique:id.html", to: "welcome#artcat", :constraints => {rubrique:"_r", :id => /[0-9]+(\%7C[0-9]+)*/ }
  get ":titre:article:id.html", to: "welcome#article", :constraints => {article:"_a", :id => /[0-9]+(\%7C[0-9]+)*/ }, as: :myarticle
  post ":titre:article:id.html", to: "welcome#articlenewcomment", :constraints => {article:"_a", :id => /[0-9]+(\%7C[0-9]+)*/ }, as: :commentmyarticle

  get "/agenda/:titre:agenda:id.html", to: "welcome#catagenda", constraints: {agenda: "_ac",:id => /[0-9]+(\%7C[0-9]+)*/}
  get "/agenda/:titre:agenda:id.html", to: "welcome#eventagenda", constraints: {agenda: "_ae",:id => /[0-9]+(\%7C[0-9]+)*/}
  get "agenda/:yy/:mm/:dd/", to: "welcome#agenda"
  get "agenda", to: "welcome#agenda"
  get "submit", to: "welcome#submit"
  post "submit", to: "welcome#createarticle"
  get "/agenda/submit", to: "welcome#agendasubmit"
  post "/agenda/submit", to: "welcome#createevent"
 
 post "agenda", to: "welcome#agenda"
  get "sitemap", to: "welcome#sitemap"
    get "/mymodule/24606308/", to: "social#myjs"

  root to: 'welcome#index'

end
