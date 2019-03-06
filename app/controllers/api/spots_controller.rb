class Api::SpotsController < ApplicationController

  def show
    @spot = Spot.with_attached_pictures.find(params[:id])
  end

  def create
    @spot = Spot.create!(spot_params)
  end

  def index
    if bounds && guest_request && dates
      spots = Spot.with_attached_pictures.in_bounds(bounds, guest_request, dates).includes(:bookings, :reviews)
    elsif bounds && !dates
      dates = nil
      spots = Spot.with_attached_pictures.in_bounds(bounds, guest_request, dates).includes(:bookings, :reviews)
    else
      spots = Spot.with_attached_pictures.all.includes(:bookings, :reviews)
    end
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

  def dates
    params[:dates]
  end

end