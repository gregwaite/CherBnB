@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :status, :start_date, :end_date, :spot_id, :guest_id, :owner_id
  end
end