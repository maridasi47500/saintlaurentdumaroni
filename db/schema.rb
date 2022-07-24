# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_23_003205) do

  create_table "albums", force: :cascade do |t|
    t.string "titre"
    t.string "cover"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "myurl"
  end

  create_table "answers", force: :cascade do |t|
    t.integer "answer"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "articles", force: :cascade do |t|
    t.integer "artcat_id"
    t.string "titre"
    t.string "chapeau"
    t.string "intertitre"
    t.text "texte"
    t.string "email"
    t.string "myurl"
    t.string "photo"
    t.boolean "html"
    t.string "auteur"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
  end

  create_table "articleshavecomments", force: :cascade do |t|
    t.integer "comment_id"
    t.integer "article_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cats", force: :cascade do |t|
    t.string "type"
    t.string "name"
    t.string "url"
    t.integer "catid"
  end

  create_table "comments", force: :cascade do |t|
    t.text "content"
    t.integer "user_id"
    t.boolean "notifyme"
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "url"
  end

  create_table "contactshavemessages", force: :cascade do |t|
    t.integer "user_id"
    t.integer "message_id"
  end

  create_table "countries", force: :cascade do |t|
    t.integer "countryid"
    t.string "name"
    t.string "mytype"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cvs", force: :cascade do |t|
    t.integer "job_id"
    t.string "filename"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "downloadpages", force: :cascade do |t|
    t.string "url"
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "emailarticles", force: :cascade do |t|
    t.text "ami"
    t.string "nom"
    t.string "email"
    t.text "message"
    t.integer "article_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "emailevents", force: :cascade do |t|
    t.text "ami"
    t.string "nom"
    t.string "email"
    t.text "message"
    t.integer "event_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer "agendacat_id"
    t.string "name"
    t.date "begindate"
    t.time "begintime"
    t.date "enddate"
    t.time "endtime"
    t.string "myurl"
    t.boolean "day"
    t.text "description"
    t.string "url"
    t.string "photo"
    t.string "zip"
    t.string "city"
    t.string "email"
    t.string "telephone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "adresse"
    t.string "ville"
    t.string "tel"
    t.string "auteur"
    t.integer "country_id"
    t.integer "user_id"
  end

  create_table "eventshaveartcats", force: :cascade do |t|
    t.integer "event_id"
    t.integer "artcat_id"
  end

  create_table "followingusers", force: :cascade do |t|
    t.integer "user_id"
    t.integer "followinguser_id"
  end

  create_table "jobanswers", force: :cascade do |t|
    t.integer "job_id"
    t.string "email"
    t.string "telephone"
    t.text "message"
    t.string "pj"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "titre"
    t.string "salaire"
    t.string "duree"
    t.string "entreprise"
    t.string "fonction"
    t.text "description"
    t.string "lieu"
    t.string "cp"
    t.string "ville"
    t.string "pays"
    t.string "photo"
    t.string "email"
    t.string "telephone"
    t.string "photo_1"
    t.string "photo_2"
    t.string "photo_3"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.integer "visite"
  end

  create_table "linkcats", force: :cascade do |t|
    t.string "name"
    t.integer "id_soum"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "links", force: :cascade do |t|
    t.string "url"
    t.string "titre"
    t.string "description"
    t.string "email"
    t.string "image"
    t.integer "id_soum"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "messages", force: :cascade do |t|
    t.integer "thread_id"
    t.text "content"
    t.string "attachment"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "vues"
  end

  create_table "newlinks", force: :cascade do |t|
    t.string "url"
    t.string "titre"
    t.string "description"
    t.string "email"
    t.integer "id_soum"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "newsletter_abos", force: :cascade do |t|
    t.string "email"
    t.boolean "html"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "notehavepjs", force: :cascade do |t|
    t.integer "note_id"
    t.integer "pj_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "noteposts", force: :cascade do |t|
    t.integer "post_id"
    t.integer "user_id"
    t.integer "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "notes", force: :cascade do |t|
    t.string "titre"
    t.text "content"
    t.string "myurl"
    t.date "mydate"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "noteshavecomments", force: :cascade do |t|
    t.integer "comment_id"
    t.integer "note_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "notesubjects", force: :cascade do |t|
    t.integer "subject_id"
    t.integer "user_id"
    t.integer "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "otherartcats", force: :cascade do |t|
    t.integer "artcat_id"
    t.integer "otherartcat_id"
  end

  create_table "paras", force: :cascade do |t|
    t.integer "article_id"
    t.string "photo"
    t.text "texte"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "parashavepjs", force: :cascade do |t|
    t.integer "para_id"
    t.integer "pj_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "photos", force: :cascade do |t|
    t.integer "album_id"
    t.string "petiteimage"
    t.string "grandeimage"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pjhavedownloadpages", force: :cascade do |t|
    t.integer "pj_id"
    t.integer "downloadpage_id"
  end

  create_table "pjs", force: :cascade do |t|
    t.string "mytype"
    t.string "name"
    t.string "filename"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "photo"
    t.date "created"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "subject_id"
    t.integer "user_id"
    t.string "content"
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "productanswers", force: :cascade do |t|
    t.integer "product_id"
    t.string "email"
    t.string "telephone"
    t.text "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "titre"
    t.string "prix"
    t.string "description"
    t.string "lieu"
    t.string "cp"
    t.string "ville"
    t.string "pays"
    t.string "photo_1"
    t.string "photo_2"
    t.string "photo_3"
    t.string "email"
    t.string "telephone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.integer "visite"
  end

  create_table "readmessages", force: :cascade do |t|
    t.integer "message_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rooms", force: :cascade do |t|
    t.string "titre"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "subjects", force: :cascade do |t|
    t.integer "room_id"
    t.integer "user_id"
    t.string "titre"
    t.string "content"
    t.integer "vues"
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "threads", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "encrypted_password", default: "", null: false
    t.boolean "private"
    t.boolean "newsletter"
    t.string "login", default: "", null: false
    t.string "pseudo"
    t.string "firstname", default: "", null: false
    t.string "lastname", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.text "description"
    t.boolean "message"
    t.boolean "follower"
    t.datetime "last_sign_in_at"
    t.integer "vues"
    t.index ["login"], name: "index_users_on_login", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "videos", force: :cascade do |t|
    t.string "image"
    t.string "filename"
    t.integer "vue"
    t.string "titre"
    t.string "creator"
    t.text "description"
    t.integer "videoid"
    t.time "time"
    t.integer "article_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "playid"
    t.integer "myvideoid"
  end

end
