json.spot do
  json.partial! '/api/spots/spot', spot: @spot
  json.photoUrls @spot.pictures.map { |file| url_for(file) }
end