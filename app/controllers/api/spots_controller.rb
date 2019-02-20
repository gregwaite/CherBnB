class Api::SpotsController < ApplicationController

  def show
    @spot = Spot.with_attached_pictures.find(params[:id])
  end

  def create
    @spot = Spot.create!(spot_params)
  end

  def index
    spots = bounds ? Spot.in_bounds(bounds) : Spot.all
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
end