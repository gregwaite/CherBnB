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

  belongs_to :user,
    class_name: "User",
    foreign_key: :owner_id
end
