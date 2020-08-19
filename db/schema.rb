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

ActiveRecord::Schema.define(version: 2020_08_18_234024) do


  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ballots", force: :cascade do |t|
    t.integer "user_id"
    t.integer "poll_id"
    t.integer "voted_option"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["poll_id"], name: "index_ballots_on_poll_id"
    t.index ["user_id"], name: "index_ballots_on_user_id"
  end

  create_table "polls", force: :cascade do |t|
    t.integer "user_id"
    t.string "question"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "options"
    t.index ["user_id"], name: "index_polls_on_user_id"
  end



  create_table "votes", force: :cascade do |t|
    t.integer "poll_id"
    t.integer "option_1", default: 0
    t.integer "option_2", default: 0
    t.integer "option_3", default: 0
    t.integer "option_4", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["poll_id"], name: "index_votes_on_poll_id"
  end

end
