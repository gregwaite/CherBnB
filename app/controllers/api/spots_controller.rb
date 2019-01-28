class Api::SpotsController < ApplicationController

  def show
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.create!(spot_params)
  end

  def index
    @spots = Spot.all
    render :index
  end

  def update

  end
 
  def spot_params
    params.require(:spot).permit(:spot_type, :title, :description, :ammenities, :price, :long, :lat, :address, :owner_id, :photos)
  end
end