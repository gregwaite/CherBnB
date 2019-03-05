class Api::BookingsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = @current_user.id
    @spot = Spot.find(@booking.spot_id)
    if @booking.num_guests > @spot.max_guests
      render json:["Too many guests, honey. Stop AJAXING ME BRO --Cher"], status: 401
    else
      @booking.owner_id = @spot.owner_id
      @booking.save!
      render "api/bookings/show"
    end
  end

  def show
    @booking = Booking.find(params[:id])
    render "api/bookings/show"
  end

  def index
    @bookings = Booking.where(guest_id: @current_user.id)
    render "api/bookings/index"
  end

  def update
    @booking = Booking.find(params[:id])
    @booking.update!(booking_params)
    render "api/bookings/show"
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy!
    render "api/bookings/destroy"
  end
  


  def booking_params
    params.require(:booking).permit(:status, :start_date, :end_date, :spot_id, :num_guests)
  end
end