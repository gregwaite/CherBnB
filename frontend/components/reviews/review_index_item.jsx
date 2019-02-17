import React from 'react';
import EditReviewContainer from './edit_review_container';

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
    const {updateReview, review} = this.props;
    const {title, body, rating, id} = review;
    let buttons;
    if (review.user_id == this.props.currentUserId) {
      buttons=
      (<div className="review-buttons">
        <button onClick={() => this.props.handleDeleteSubmit(id)}>Delete</button>
        <button onClick={this.toggleEdit}>Edit</button>
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
    <div className="index-item">
      <ul className="title-item">
        <li>{title}</li>
      </ul>
      <ul className="body-item">
        <li>{body}</li>
        <li>Review</li>
      </ul>
      <ul className="rating-item">
        <li>{rating}</li>
        <li>Rating</li>
      </ul>
      {buttons}
    </div>
    )}
  }

}

export default ReviewIndexItem;