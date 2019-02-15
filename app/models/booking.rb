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
  validates :status, :start_date, :end_date, :owner_id, presence: true
  validate :no_conflicts
  validate :chronological_start_end

  belongs_to :user,
    class_name: "User",
    foreign_key: :guest_id
  belongs_to :user,
    class_name: "User",
    foreign_key: :owner_id
  belongs_to :spot,
    class_name: "Spot",
    foreign_key: :spot_id

    def conflicting_dates
      Booking.where.not(id: self.id).where(spot_id: spot_id)
        .where.not('start_date > :end_date OR end_date < :start_date', start_date: start_date, end_date: end_date)
    end

    def no_conflicts
      return true if conflicting_dates.empty?
      errors[:base] << 'Can\'t book these dates, honey. Somebody is already staying then'
    end

    def chronological_start_end
      return true if start_date < end_date
      errors[:start_date] << 'You can not check out before checking in'
      errors[:end_date] << 'You can not check out before checking in'
    end
end
