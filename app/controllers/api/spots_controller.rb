class Api::SpotsController < ApplicationController

  def show
    @spot = Spot.with_attached_pictures.find(params[:id])
  end

  def create
    @spot = Spot.create!(spot_params)
  end

  def index
    if bounds && guest_request
      spots = Spot.in_bounds(bounds, guest_request)
    elsif bounds && !guest_request
      guest_request = { num: 1 }
      spots = Spot.in_bounds(bounds, guest_request)
    else
      spots = Spot.all
    end
    # spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    # spots = guest_request ? spots.enough_space(guest_request) : spots
    @spots = spots
    render :index
  end

  def update

  end
 
  def spot_params
    params.require(:spot).permit(:spot_type, :title, :description, :ammenities, :price, :long, :lat, :address, :owner_id, pictures:[])
  end

  def bounds
    params[:bounds]
  end

  def guest_request
   params[:guest_request]
  end

end