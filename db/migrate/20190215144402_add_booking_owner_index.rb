class AddBookingOwnerIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :bookings, :owner_id
  end
end
