# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Spot.delete_all
Review.destroy_all
Booking.destroy_all

kanye = User.create!(email: "yeezyyeezywhatsgood@ye.ye", username: "Kanye", password: "hurryupwithmydamncroissants")
cher = User.create!(email: "cher@ye.ye", username: "Cher", password: "chercher")

house_main_photo = EzDownload.open("https://cdn.vox-cdn.com/thumbor/mlY5CB208mKNwbkOGjGUkRvTeSI=/0x0:2500x1663/1200x800/filters:focal(1050x632:1450x1032)/cdn.vox-cdn.com/uploads/chorus_image/image/60707371/9477_Gloaming_Dr_025_copy.0.jpg")
apt_main_photo = EzDownload.open("https://www.thepinnaclelist.com/wp-content/uploads/2013/02/cher-italian-renaissance-style-mansion-overlooking-the-pacific-ocean-in-malibu-california-920x614-1840-the-pinnacle-list-tpl.jpg")
other_house__main_photo = EzDownload.open("https://media.architecturaldigest.com/photos/55e78857302ba71f3017a639/master/pass/dam-images-celebrity-homes-2002-cher-cher-malibu-06-loggia.jpg")
aquatic_main_photo = EzDownload.open("https://icdn7.digitaltrends.com/image/poseidon-undersea-resorts-970x546-c-640x640.jpg?ver=1.jpg")
horse_main_photo = EzDownload.open("https://media.gq.com/photos/56e71c0b14cbe0637b261d7f/3:2/w_560/horseinsuit2.jpg")
horseman_main_photo = EzDownload.open("https://m.media-amazon.com/images/M/MV5BYTdmOTljNGUtMGJkMC00MmE2LTkwYzEtNmVlYjBmZjliNTlkXkEyXkFqcGdeQW1yb3NzZXI@._V1_UX477_CR0,0,477,268_AL_.jpg")


house = Spot.create!(
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
house.pictures.attach(io: house_main_photo, filename: 'cher_house.jpg')

apt = Spot.create!(
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
apt.pictures.attach(io: apt_main_photo, filename:'cher_apt.jpg')

other_house = Spot.create!(
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
other_house.pictures.attach(io: other_house__main_photo, filename: 'cher_other_house.jpg')

aquatic = Spot.create!(
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
aquatic.pictures.attach(io: aquatic_main_photo, filename: 'aquatic_fortress.jpg')

horse = Spot.create!(
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
horse.pictures.attach(io: horse_main_photo, filename:'cher_horse.jpg')

horseman = Spot.create!(
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
horseman.pictures.attach(io: horseman_main_photo, filename:'cher_horseman.jpg')

Booking.create!(
  status: "Pending", 
  start_date: '28/02/2019', 
  end_date: '01/03/2019', 
  spot_id: house.id, 
  owner_id: house.owner_id,
  guest_id: kanye.id
)
Booking.create!(
  status: "Pending", 
  start_date: '28/02/2019', 
  end_date: '01/03/2019', 
  spot_id: apt.id, 
  owner_id: apt.owner_id,
  guest_id: kanye.id
)
Booking.create!(
  status: "Pending", 
  start_date: '03/03/2019', 
  end_date: '10/03/2019', 
  spot_id: house.id, 
  owner_id: house.owner_id,
  guest_id: cher.id
)



