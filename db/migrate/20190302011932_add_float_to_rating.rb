class AddFloatToRating < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :rating, :float
  end
end
