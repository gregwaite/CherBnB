  json.set! @bookingId do
    json.extract! @booking, :id
  end