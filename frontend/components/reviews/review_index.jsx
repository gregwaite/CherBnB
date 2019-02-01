import React from 'react';
import CreateReview from './create_review_container';
import EditReviewContainer from './edit_review_container';
import ReviewIndexItem from './review_index_item';

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    this.handleClassSwitch = this.handleClassSwitch.bind(this);
    this.className = "show-index";
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.spotId);
  }

  handleDeleteSubmit(reviewId){
    this.props.destroyReview(reviewId);
  }

  handleClassSwitch(){
    if (this.className === "show-index") {
      this.className = "show-edit";
    } else {
      this.className = "show-index";
    }
    this.forceUpdate();
  }

  render() {
    const reviews = this.props.reviews.map(review =>{
      return (
        <div className={this.className}key={review.id}>
          <ReviewIndexItem
            review={review}
            handleDeleteSubmit={this.handleDeleteSubmit}
          ></ReviewIndexItem>
          <EditReviewContainer
            review={review}
            updateReview={this.props.updateReview}
            handleClassSwitch={this.handleClassSwitch}
            >
          </EditReviewContainer>
        </div>
      )}
      )
      return (
        <div>
          {reviews}
          <CreateReview></CreateReview>
        </div>
    )
  }

}

export default ReviewShow;