# README

# CherBnB

### [CherBnB live](https://cherbnb.herokuapp.com/#/search)

CherBnB is an AirBnB inspired site with a plethora of functionality:

## Sessions
* Secure log in and sign up with password hashing and user authentication with dynamic username and email check to see if either already exist in the database.


## Search
* Search for spots on an interactive map where results are populated in real time as the map moves and can be filtered by location, date, and number of guests.
  
## Bookings
* Listing page allows user to book the listing, leave reviews, see others' reviews, spot description, amenities, etc.
* Booking will not allow a user to book for the same dates as a conflicting reservation
* Booking calendar shades out unavailable days and prevents users from booking them on both client and server-side
* After booking is approved, the spot's availability calendar blocks off those dates, and the spot will no longer appear in search results for those dates


The search on the backend does not fetch spots unless the perameters of the search are met, and only fetches those spots specified in the parameters.
```rb
 def self.in_bounds(bounds, guest_request, dates)
    if dates
      conflicts = (self.select(:id)
        .joins(:bookings)
        .where.not('start_date > :end_date OR end_date < :start_date',
        end_date: dates[:end_date].to_datetime, start_date: dates[:start_date].to_datetime))

      self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:lng])
        .where("long < ?", bounds[:northEast][:lng])
        .where("max_guests >= ?", guest_request[:num])
        .where.not("id IN (?)", conflicts)
    else
      self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:lng])
        .where("long < ?", bounds[:northEast][:lng])
        .where("max_guests >= ?", guest_request[:num])
    end
  end