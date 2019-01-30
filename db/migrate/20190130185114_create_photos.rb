class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.text :image_url, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :spot_id, null: false

      t.timestamps
    end

    add_index :photos, :spot_id
  end
end
