class Review < ApplicationRecord
  validates :title, :body, :rating, presence: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id

  belongs_to :spot,
    class_name: "Spot",
    foreign_key: :spot_id
end