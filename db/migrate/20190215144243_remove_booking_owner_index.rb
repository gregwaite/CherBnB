class RemoveBookingOwnerIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :bookings, :owner_id
  end
end
