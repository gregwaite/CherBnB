class CreateCreatorforReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :creatorfor_reviews do |t|
      add_column :reviews, :creator_id, :integer
    end
  end
end
