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

Spot.create!(
  spot_type: "House", 
  title: "Cher's House", 
  description: "Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: ["big old house"], 
  price: 7, 
  lat: 37.423021, 
  long: -122.083739, 
  address:"123 Greg Rd", 
  owner_id: kanye.id, 
  photos:["Greg"],
)
Spot.create!(
  spot_type: "Apt", 
  title: "Cher's Apt", 
  description: "Apartment with lights and floors.", 
  ammenities: ["big old apartment"], 
  price: 7, 
  lat: 40.423021, 
  long: -123.083739, 
  address:"123 Greg Ave", 
  owner_id: kanye.id, 
  photos:["Greg"],
)
Spot.create!(
  spot_type: "House", 
  title: "Cher's Other House", 
  description: "Another Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: ["big old house"], 
  price: 7, 
  lat: 45.423021, 
  long: -125.083739, 
  address:"123 Greg Hole", 
  owner_id: kanye.id, 
  photos:["Greg"],
)
Spot.create!(
  spot_type: "Half House", 
  title: "Cher's Half House", 
  description: "Enormous mansion that you can't afford to live in unless you are Cher, or half at least", 
  ammenities: ["big old half house"], 
  price: 7, 
  lat: 48.423021, 
  long: -127.083739, 
  address:"123 Greg St", 
  owner_id: kanye.id, 
  photos:["Greg"],
)
Spot.create!(
  spot_type: "Horse", 
  title: "Cher's Horse", 
  description: "It's a horse", 
  ammenities: ["big old horse"], 
  price: 7, 
  lat: 52.423021, 
  long: -118.083739, 
  address:"123 Greg Dr", 
  owner_id: kanye.id, 
  photos:["Greg"],
)
