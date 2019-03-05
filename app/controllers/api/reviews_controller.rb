class Api::ReviewsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :destroy, :update]

  def create
    @review = Review.new (review_params)
    @review.user_id = @current_user.id
    @review.save!
    @spot = Spot.find(@review.spot_id)
    render "api/reviews/show"
  end

  def show
    @review = Review.find(params[:id])
    render "api/reviews/show"
  end

  def index
    @reviews = Review.all
    render "api/reviews/index"
  end

  def update
    @review = Review.find(params[:id])
    @review.update(review_params)
    render "api/reviews/show"
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    render "api/reviews/destroy"
  end
  


  def review_params
    params.require(:review).permit(:body, :rating, :spot_id)
  end
end