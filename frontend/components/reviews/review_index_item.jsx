import React from 'react';
import EditReviewContainer from './edit_review_container';
import Rating from 'react-rating';

class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    const editing = this.state.edit;
    this.setState({edit: !editing});
  }
  
  render() {
    const {updateReview, review, user} = this.props;
    const {body, rating, id} = review;
    let buttons;
    if (review.user_id === this.props.currentUserId) {
      buttons=
      (<div className="review-buttons" id="review-buttons">
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={() => this.props.handleDeleteSubmit(id)}>Delete</button>
      </div>)
    }
    if (this.state.edit) {
      return (
      <EditReviewContainer
        review={review}
        updateReview={updateReview}
        toggleEdit={this.toggleEdit}
      />
      )
    } else {
    return (
    <div className="review-index-item">

      <div className="review-content">
        <div className="review-icon-rating">
          <i className="material-icons">{user.username[0]}</i>
          <div className="review-name-rating">
            <p>{user.username}</p>
            <ul className="rating-item">
                <Rating
                  className="read-only-rating"
                  readonly
                  emptySymbol="fa fa-star-o"
                  fullSymbol="fa fa-star"
                  fractions={2}
                  initialRating={rating}
                  />
            </ul>
          </div>
            {buttons}
        </div>
        <ul className="body-item">
          <li>{body}
          </li>
        </ul>
      </div> 
      
    </div>
    )}
  }

}

export default ReviewIndexItem;