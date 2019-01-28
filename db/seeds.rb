# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Spot.destroy_all

kanye = User.create!(email: "yeezyyeezywhatsgood@ye.ye", username: "Kanye", password: "hurryupwithmydamncroissants")

Spot.create!(spot_type: "Greg", title: "Greg", description: "Greg", ammenities: ["Greg"], price:7, long: 2.0, lat: 2.0, address:"123 Greg Rd", owner_id: kanye.id, photos:["Greg"])