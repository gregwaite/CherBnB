class RemoveIntegerFromRating < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :rating
  end
end
