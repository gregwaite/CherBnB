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
  photos:["https://cdn.vox-cdn.com/thumbor/mlY5CB208mKNwbkOGjGUkRvTeSI=/0x0:2500x1663/1200x800/filters:focal(1050x632:1450x1032)/cdn.vox-cdn.com/uploads/chorus_image/image/60707371/9477_Gloaming_Dr_025_copy.0.jpg"],
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
  photos:["https://www.thepinnaclelist.com/wp-content/uploads/2013/02/cher-italian-renaissance-style-mansion-overlooking-the-pacific-ocean-in-malibu-california-920x614-1840-the-pinnacle-list-tpl.jpg"],
)
Spot.create!(
  spot_type: "House", 
  title: "Cher's Other House", 
  description: "Another Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: ["big old house"], 
  price: 7, 
  lat: 45.423021, 
  long: -120.083739, 
  address:"123 Greg Hole", 
  owner_id: kanye.id, 
  photos:["https://media.architecturaldigest.com/photos/55e78857302ba71f3017a639/master/pass/dam-images-celebrity-homes-2002-cher-cher-malibu-06-loggia.jpg"],
)
Spot.create!(
  spot_type: "Aquatic Fortress", 
  title: "Cher's Aqueous Domain", 
  description: "Cher is half mermaid and has this home for visiting relatives", 
  ammenities: ["big old aquatic fortress"], 
  price: 7, 
  lat: 48.423021, 
  long: -127.083739, 
  address:"123 Greg St", 
  owner_id: kanye.id, 
  photos:["https://icdn7.digitaltrends.com/image/poseidon-undersea-resorts-970x546-c-640x640.jpg?ver=1.jpg"],
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
  photos:["https://media.gq.com/photos/56e71c0b14cbe0637b261d7f/3:2/w_560/horseinsuit2.jpg"],
)
Spot.create!(
  spot_type: "Horseman", 
  title: "Cher's Horseman", 
  description: "It's a horseman", 
  ammenities: ["big old drunk horse"], 
  price: 7, 
  lat: 58.423021, 
  long: -110.083739, 
  address:"123 Greg Horse", 
  owner_id: kanye.id, 
  photos:["https://m.media-amazon.com/images/M/MV5BYTdmOTljNGUtMGJkMC00MmE2LTkwYzEtNmVlYjBmZjliNTlkXkEyXkFqcGdeQW1yb3NzZXI@._V1_UX477_CR0,0,477,268_AL_.jpg"],
)
