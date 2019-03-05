
@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :rating, :spot_id, :user_id
  end
end