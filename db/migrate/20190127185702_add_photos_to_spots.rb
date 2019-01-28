class AddPhotosToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :photos, :string, array: true
  end
end
