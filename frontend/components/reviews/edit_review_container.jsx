import React from "react";
import { connect } from "react-redux";
import { updateReview } from "../../actions/review_actions";
import Rating from "react-rating";

const mapDispatchToProps = dispatch => {
  return {
    updateReview: review => dispatch(updateReview(review))
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
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className="edit-index-item">
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <div className="edit-review-body">
            <li>Review:</li>
            <textarea onChange={this.update("body")} value={this.state.body} />
          </div>

          <div className="edit-review-rating">
            <li>Rating:</li>
            <Rating
              name="rating"
              className="rating-selector"
              emptySymbol="fa fa-star-o"
              fullSymbol="fa fa-star"
              fractions={2}
              initialRating={this.state.rating}
              onChange={e =>
                this.setState({
                  rating: e
                })
              }
              onClick={e =>
                this.setState({
                  rating: e
                })
              }
            />
            <p>{this.state.rating || ""}</p>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(EditReview);
