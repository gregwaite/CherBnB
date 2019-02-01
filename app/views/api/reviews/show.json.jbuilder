  json.set! @review.id do
    json.extract! @review, :id, :title, :body, :rating, :spot_id
  end