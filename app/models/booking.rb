# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  status     :string           not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  owner_id   :integer          not null
#  guest_id   :integer          not null
#  spot_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :status, :start_date, :end_date, presence: true
  validates :owner_id, presence: true, uniqueness: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :guest_id
  belongs_to :user,
    class_name: "User",
    foreign_key: :owner_id
  belongs_to :spot,
    class_name: "Spot",
    foreign_key: :spot_id
end
