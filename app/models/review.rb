# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :string           not null
#  rating     :integer          not null
#  user_id    :integer          not null
#  spot_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :body, :rating, presence: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id

  belongs_to :spot,
    class_name: "Spot",
    foreign_key: :spot_id
end
