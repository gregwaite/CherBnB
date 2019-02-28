# == Schema Information
#
# Table name: spots
#
#  id          :bigint(8)        not null, primary key
#  spot_type   :string           not null
#  title       :string           not null
#  description :string           not null
#  ammenities  :string           not null, is an Array
#  price       :integer          not null
#  long        :float            not null
#  lat         :float            not null
#  address     :string           not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  photos      :string           is an Array
#

class Spot < ApplicationRecord
  validates :spot_type, :title, :description, :ammenities, :price, :owner_id, presence: true
  validates :lat, :long, :address, presence: true, uniqueness: true

  has_many :reviews
  has_many :bookings

  has_many_attached :pictures

  belongs_to :user,
    class_name: "User",
    foreign_key: :owner_id

  def self.in_bounds(bounds, guest_request, dates)
    if dates
      conflicts = (self.select(:id)
        .joins(:bookings)
        .where.not('start_date > :end_date OR end_date < :start_date',
        end_date: dates[:end_date].to_datetime, start_date: dates[:start_date].to_datetime))

      self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:lng])
        .where("long < ?", bounds[:northEast][:lng])
        .where("max_guests >= ?", guest_request[:num])
        .where.not("id IN (?)", conflicts)
        
        # .where('start_date < :end_date OR end_date > :start_date', 
        # start_date: dates[:start_date].to_datetime, 
        # end_date: dates[:end_date].to_datetime)
    else
      self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:lng])
        .where("long < ?", bounds[:northEast][:lng])
        .where("max_guests >= ?", guest_request[:num])
    end
  end

end
