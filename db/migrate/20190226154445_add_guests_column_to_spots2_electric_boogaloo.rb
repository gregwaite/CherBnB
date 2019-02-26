class AddGuestsColumnToSpots2ElectricBoogaloo < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :max_guests, :integer
  end
end
