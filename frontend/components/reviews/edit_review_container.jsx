import React from 'react';
import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions';

const mapDispatchToProps = dispatch => {
  return {
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

class EditReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview(this.state);
    this.props.toggleEdit();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className="edit-index-item">
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <div className="edit-review-title">
            <li>Title:</li>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
            ></input>
          </div> 

          <div className="edit-review-body">
            <li>Review:</li>
            <textarea
              onChange={this.update("body")}
              value={this.state.body}
            >
            </textarea>
          </div>

          <div className="edit-review-rating">
            <li>Rating:</li>
            <input
              type="number"
              value={this.state.rating}
              onChange={this.update("rating")}
            />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div >
    );
  }

}


export default connect(null, mapDispatchToProps)(EditReview);