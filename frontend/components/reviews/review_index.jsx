import React from 'react';
import CreateReview from './create_review_container';

import ReviewIndexItem from './review_index_item';

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.spotId);
  }

  handleDeleteSubmit(reviewId){
    this.props.destroyReview(reviewId);
  }

  render() {
    const { userId, user, reviews } = this.props;
    const showReviews = reviews.map(review =>{
      return (
          <ReviewIndexItem
            review={review}
            handleDeleteSubmit={this.handleDeleteSubmit}
            currentUserId={userId}
            user={user}
            key={review.id}
          ></ReviewIndexItem>
      )}
      )
      return (
        <div className="show-index">
          {showReviews}
          <CreateReview></CreateReview>
        </div>
    )
  }

}

export default ReviewShow;