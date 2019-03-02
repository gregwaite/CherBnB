# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_02_011932) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.string "status", null: false
    t.datetime "start_date", null: false
    t.datetime "end_date", null: false
    t.integer "owner_id", null: false
    t.integer "guest_id", null: false
    t.integer "spot_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "num_guests"
    t.index ["guest_id"], name: "index_bookings_on_guest_id"
    t.index ["owner_id"], name: "index_bookings_on_owner_id"
    t.index ["spot_id"], name: "index_bookings_on_spot_id"
  end

  create_table "creatorfor_reviews", force: :cascade do |t|
  end

  create_table "photos", force: :cascade do |t|
    t.text "image_url", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.integer "spot_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_photos_on_spot_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title", null: false
    t.string "body", null: false
    t.integer "user_id", null: false
    t.integer "spot_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "creator_id"
    t.float "rating"
    t.index ["spot_id"], name: "index_reviews_on_spot_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "spots", force: :cascade do |t|
    t.string "spot_type", null: false
    t.string "title", null: false
    t.string "description", null: false
    t.string "ammenities", null: false, array: true
    t.integer "price", null: false
    t.float "long", null: false
    t.float "lat", null: false
    t.string "address", null: false
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photos", array: true
    t.integer "max_guests"
    t.index ["address"], name: "index_spots_on_address", unique: true
    t.index ["ammenities"], name: "index_spots_on_ammenities"
    t.index ["description"], name: "index_spots_on_description"
    t.index ["lat"], name: "index_spots_on_lat", unique: true
    t.index ["long"], name: "index_spots_on_long", unique: true
    t.index ["owner_id"], name: "index_spots_on_owner_id"
    t.index ["price"], name: "index_spots_on_price"
    t.index ["spot_type"], name: "index_spots_on_spot_type"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
