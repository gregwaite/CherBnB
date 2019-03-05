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
  validate :rating_exists
  validate :rating_under_five

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id

  belongs_to :spot,
    class_name: "Spot",
    foreign_key: :spot_id


  def rating_exists
    return true if self.rating > 0
    errors[:base] << 'Gotta rate it. You got to'
  end

  def rating_under_five
    return true if self.rating <= 5
    errors[:base] << 'Don\'t AJAX me bro'
  end
end
