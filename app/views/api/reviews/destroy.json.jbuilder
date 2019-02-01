  json.set! @reviewId do
    json.extract! @review, :id
  end