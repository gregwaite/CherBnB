class AddGuestsColumnToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :num_guests, :integer
  end
end
