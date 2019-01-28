class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :spot_type, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :ammenities, null: false, array: true
      t.integer :price, null: false
      t.float :long, null: false
      t.float :lat, null: false
      t.string :address, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :spots, :spot_type
    add_index :spots, :description
    add_index :spots, :ammenities
    add_index :spots, :price
    add_index :spots, :long, unique: true
    add_index :spots, :lat, unique: true
    add_index :spots, :address, unique: true
    add_index :spots, :owner_id
  end
end
