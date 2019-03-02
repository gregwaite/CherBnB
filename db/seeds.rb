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

diff = 0.03
sfLatStart = 37.77438675752185
sfLongStart = -122.42216208203126
mnLatStart = 40.7830603
mnLongStart = -73.97124880000222
bkLatStart = 40.6781784
bkLongStart = -73.9441579


house = Spot.create!(
  spot_type: "House", 
  title: "Cher's House", 
  description: "Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: [1,2,3,4,5,6], 
  price: 7, 
  lat: (sfLatStart + (diff * (rand))), 
  long: (sfLongStart + (diff * (rand))), 
  address:"123 Greg Rd", 
  owner_id: kanye.id, 
  max_guests: 7
)
house.pictures.attach(io: house_main_photo, filename: 'cher_house.jpg')

apt = Spot.create!(
  spot_type: "Apt", 
  title: "Cher's Apt", 
  description: "Apartment with lights and floors.", 
  ammenities: [1,2,3,4,5,6], 
  price: 7, 
  lat: (sfLatStart + (diff * (rand))), 
  long: (sfLongStart + (diff * (rand))), 
  address:"123 Greg Ave", 
  owner_id: kanye.id, 
  max_guests: 10
)
apt.pictures.attach(io: apt_main_photo, filename:'cher_apt.jpg')

other_house = Spot.create!(
  spot_type: "House", 
  title: "Cher's Other House", 
  description: "Another Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: [1,2,3,4,5,6], 
  price: 7, 
  lat: (sfLatStart + (diff * (rand))), 
  long: (sfLongStart + (diff * (rand))), 
  address:"123 Greg Hole", 
  owner_id: kanye.id, 
  max_guests: 6
)
other_house.pictures.attach(io: other_house__main_photo, filename: 'cher_other_house.jpg')

aquatic = Spot.create!(
  spot_type: "AquaticFortress", 
  title: "Cher's Aqueous Domain", 
  description: "Cher is half mermaid and has this home for visiting relatives", 
  ammenities: [1,2,3,4,5,6,7,8], 
  price: 7, 
  lat: (sfLatStart + (diff * (rand))), 
  long: (sfLongStart + (diff * (rand))), 
  address:"123 Greg St", 
  owner_id: kanye.id, 
  max_guests: 7
)
aquatic.pictures.attach(io: aquatic_main_photo, filename: 'aquatic_fortress.jpg')

house1 = Spot.create!(
  spot_type: "House", 
  title: "Cher's House1", 
  description: "Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: [1,2,3,4,5,6,7,8], 
  price: 7, 
  lat: (sfLatStart + (diff * (rand))), 
  long: (sfLongStart + (diff * (rand))), 
  address:"1234 Greg Rd", 
  owner_id: kanye.id, 
  max_guests: 8
)
house_main_photo = EzDownload.open("https://cdn.vox-cdn.com/thumbor/mlY5CB208mKNwbkOGjGUkRvTeSI=/0x0:2500x1663/1200x800/filters:focal(1050x632:1450x1032)/cdn.vox-cdn.com/uploads/chorus_image/image/60707371/9477_Gloaming_Dr_025_copy.0.jpg")
house1.pictures.attach(io: house_main_photo, filename: 'cher_house.jpg')

apt1 = Spot.create!(
  spot_type: "Apt", 
  title: "Cher's Apt1", 
  description: "Apartment with lights and floors.", 
  ammenities: [1,2,3,4,5,6,7,8], 
  price: 7, 
  lat: (mnLatStart + (diff * (rand))), 
  long: (mnLongStart + (diff * (rand))), 
  address:"1234 Greg Ave", 
  owner_id: kanye.id, 
  max_guests: 7
)
apt_main_photo = EzDownload.open("https://www.thepinnaclelist.com/wp-content/uploads/2013/02/cher-italian-renaissance-style-mansion-overlooking-the-pacific-ocean-in-malibu-california-920x614-1840-the-pinnacle-list-tpl.jpg")
apt1.pictures.attach(io: apt_main_photo, filename:'cher_apt.jpg')

other_house1 = Spot.create!(
  spot_type: "House", 
  title: "Cher's Other House1", 
  description: "Another Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: [1,2,3,4,5,6,7,8], 
  price: 7, 
  lat: (mnLatStart + (diff * (rand))), 
  long: (mnLongStart + (diff * (rand))), 
  address:"1234 Greg Hole", 
  owner_id: kanye.id, 
  max_guests: 7
)
other_house__main_photo = EzDownload.open("https://media.architecturaldigest.com/photos/55e78857302ba71f3017a639/master/pass/dam-images-celebrity-homes-2002-cher-cher-malibu-06-loggia.jpg")
other_house1.pictures.attach(io: other_house__main_photo, filename: 'cher_other_house.jpg')

aquatic1 = Spot.create!(
  spot_type: "Aquatic Fortress1", 
  title: "Cher's Aqueous Domain", 
  description: "Cher is half mermaid and has this home for visiting relatives", 
  ammenities: [1,2,3,4,5,6,9,10], 
  price: 7, 
  lat: (mnLatStart + (diff * (rand))), 
  long: (mnLongStart + (diff * (rand))), 
  address:"1234 Greg St", 
  owner_id: kanye.id, 
  max_guests: 5
)
aquatic_main_photo = EzDownload.open("https://icdn7.digitaltrends.com/image/poseidon-undersea-resorts-970x546-c-640x640.jpg?ver=1.jpg")
aquatic1.pictures.attach(io: aquatic_main_photo, filename: 'aquatic_fortress.jpg')

house2 = Spot.create!(
  spot_type: "House", 
  title: "Cher's House2", 
  description: "Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: [1,2,3,4,5,6,9,10], 
  price: 7, 
  lat: (mnLatStart + (diff * (rand))), 
  long: (mnLongStart + (diff * (rand))), 
  address:"1235 Greg Rd", 
  owner_id: kanye.id, 
  max_guests: 4
)
house_main_photo = EzDownload.open("https://cdn.vox-cdn.com/thumbor/mlY5CB208mKNwbkOGjGUkRvTeSI=/0x0:2500x1663/1200x800/filters:focal(1050x632:1450x1032)/cdn.vox-cdn.com/uploads/chorus_image/image/60707371/9477_Gloaming_Dr_025_copy.0.jpg")
house2.pictures.attach(io: house_main_photo, filename: 'cher_house.jpg')

apt2 = Spot.create!(
  spot_type: "Apt", 
  title: "Cher's Apt2", 
  description: "Apartment with lights and floors.", 
  ammenities: [1,2,3,4,5,6,9,10], 
  price: 7, 
  lat: (mnLatStart + (diff * (rand))), 
  long: (mnLongStart + (diff * (rand))), 
  address:"1235 Greg Ave", 
  owner_id: kanye.id, 
  max_guests: 7
)
apt_main_photo = EzDownload.open("https://www.thepinnaclelist.com/wp-content/uploads/2013/02/cher-italian-renaissance-style-mansion-overlooking-the-pacific-ocean-in-malibu-california-920x614-1840-the-pinnacle-list-tpl.jpg")
apt2.pictures.attach(io: apt_main_photo, filename:'cher_apt.jpg')

other_house2 = Spot.create!(
  spot_type: "House", 
  title: "Cher's Other House2", 
  description: "Another Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: [1,2,3,4,5,6,9,10], 
  price: 7, 
  lat: (bkLatStart + (diff * (rand))), 
  long: (bkLongStart + (diff * (rand))), 
  address:"1235 Greg Hole", 
  owner_id: kanye.id, 
  max_guests: 5
)
other_house__main_photo = EzDownload.open("https://media.architecturaldigest.com/photos/55e78857302ba71f3017a639/master/pass/dam-images-celebrity-homes-2002-cher-cher-malibu-06-loggia.jpg")
other_house2.pictures.attach(io: other_house__main_photo, filename: 'cher_other_house.jpg')

aquatic2 = Spot.create!(
  spot_type: "Aquatic Fortress2", 
  title: "Cher's Aqueous Domain", 
  description: "Cher is half mermaid and has this home for visiting relatives", 
  ammenities: [1,2,3,4,5,6,11,12], 
  price: 7, 
  lat: (bkLatStart + (diff * (rand))), 
  long: (bkLongStart + (diff * (rand))), 
  address:"1235 Greg St", 
  owner_id: kanye.id, 
  max_guests: 3
)
aquatic_main_photo = EzDownload.open("https://icdn7.digitaltrends.com/image/poseidon-undersea-resorts-970x546-c-640x640.jpg?ver=1.jpg")
aquatic2.pictures.attach(io: aquatic_main_photo, filename: 'aquatic_fortress.jpg')

house3 = Spot.create!(
  spot_type: "House", 
  title: "Cher's House3", 
  description: "Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: [1,2,3,4,5,6,11,12], 
  price: 7, 
  lat: (bkLatStart + (diff * (rand))), 
  long: (bkLongStart + (diff * (rand))), 
  address:"1236 Greg Rd", 
  owner_id: kanye.id, 
  max_guests: 7
)
house_main_photo = EzDownload.open("https://cdn.vox-cdn.com/thumbor/mlY5CB208mKNwbkOGjGUkRvTeSI=/0x0:2500x1663/1200x800/filters:focal(1050x632:1450x1032)/cdn.vox-cdn.com/uploads/chorus_image/image/60707371/9477_Gloaming_Dr_025_copy.0.jpg")
house3.pictures.attach(io: house_main_photo, filename: 'cher_house.jpg')

apt3 = Spot.create!(
  spot_type: "Apt", 
  title: "Cher's Apt3", 
  description: "Apartment with lights and floors.", 
  ammenities: [1,2,3,4,5,6,11,12], 
  price: 7, 
  lat: (bkLatStart + (diff * (rand))), 
  long: (bkLongStart + (diff * (rand))), 
  address:"1236 Greg Ave", 
  owner_id: kanye.id, 
  max_guests: 6
)
apt_main_photo = EzDownload.open("https://www.thepinnaclelist.com/wp-content/uploads/2013/02/cher-italian-renaissance-style-mansion-overlooking-the-pacific-ocean-in-malibu-california-920x614-1840-the-pinnacle-list-tpl.jpg")
apt3.pictures.attach(io: apt_main_photo, filename:'cher_apt.jpg')

other_house3 = Spot.create!(
  spot_type: "House3", 
  title: "Cher's Other House", 
  description: "Another Enormous mansion that you can't afford to live in unless you are Cher", 
  ammenities: [1,2,3,4,5,6,11,12], 
  price: 7, 
  lat: (bkLatStart + (diff * (rand))), 
  long: (bkLongStart + (diff * (rand))), 
  address:"1236 Greg Hole", 
  owner_id: kanye.id, 
  max_guests: 2
)
other_house__main_photo = EzDownload.open("https://media.architecturaldigest.com/photos/55e78857302ba71f3017a639/master/pass/dam-images-celebrity-homes-2002-cher-cher-malibu-06-loggia.jpg")
other_house3.pictures.attach(io: other_house__main_photo, filename: 'cher_other_house.jpg')

aquatic3 = Spot.create!(
  spot_type: "Aquatic Fortress3", 
  title: "Cher's Aqueous Domain", 
  description: "Cher is half mermaid and has this home for visiting relatives", 
  ammenities: [1,2,3,4,5,6,11,12], 
  price: 7, 
  lat: (bkLatStart + (diff * (rand))), 
  long: (bkLongStart + (diff * (rand))), 
  address:"1236 Greg St", 
  owner_id: kanye.id, 
  max_guests: 7
)
aquatic_main_photo = EzDownload.open("https://icdn7.digitaltrends.com/image/poseidon-undersea-resorts-970x546-c-640x640.jpg?ver=1.jpg")
aquatic3.pictures.attach(io: aquatic_main_photo, filename: 'aquatic_fortress.jpg')


horse = Spot.create!(
  spot_type: "Horse", 
  title: "Cher's Horse", 
  description: "It's a horse", 
  ammenities: [1,2,3,4,5,6], 
  price: 7, 
  lat: (bkLatStart + (diff * (rand))), 
  long: (bkLongStart + (diff * (rand))), 
  address:"123 Greg Dr", 
  owner_id: kanye.id, 
  max_guests: 4
)
horse.pictures.attach(io: horse_main_photo, filename:'cher_horse.jpg')

horseman = Spot.create!(
  spot_type: "Horseman", 
  title: "Cher's Horseman", 
  description: "It's a horseman", 
  ammenities: [1,2,3,4,5,6], 
  price: 7, 
  lat: (bkLatStart + (diff * (rand))), 
  long: (bkLongStart + (diff * (rand))), 
  address:"123 Greg Horse", 
  owner_id: kanye.id, 
  max_guests: 7
)
horseman.pictures.attach(io: horseman_main_photo, filename:'cher_horseman.jpg')

Booking.create!(
  status: "Approved", 
  start_date: '01/11/2019', 
  end_date: '02/11/2019', 
  spot_id: house.id, 
  owner_id: house.owner_id,
  guest_id: kanye.id,
  num_guests: 3,
)
Booking.create!(
  status: "Approved", 
  start_date: '01/09/2019', 
  end_date: '02/09/2019', 
  spot_id: apt.id, 
  owner_id: apt.owner_id,
  guest_id: kanye.id,
  num_guests: 4,
)
Booking.create!(
  status: "Approved", 
  start_date: '03/10/2019', 
  end_date: '10/10/2019', 
  spot_id: house.id, 
  owner_id: house.owner_id,
  guest_id: cher.id,
  num_guests: 1,
)



