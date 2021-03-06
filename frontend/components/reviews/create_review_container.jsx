import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';
import React from 'react';
import Rating from 'react-rating';

const mapStateToProps = (state, ownProps) => {
  return {
    review: {
      body: "",
      rating: 0,      
      spot_id: ownProps.match.params.spotId,
    },
    loggedIn: Boolean(state.session.id),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.loggedIn = this.props.loggedIn;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.loggedIn) {
      this.props.createReview(this.state);
      this.setState({["body"]: ""});
      this.setState({["rating"]: 0});
    } else {
      this.props.openModal("login");
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render(){
    return (
      <div>
        <form className="create-form" onSubmit={this.handleSubmit}>
          
          <div className="create-review-body">
            <li>Leave a review if you dare to critque Cher.</li>
            <textarea
              onChange={this.update("body")}
              value={this.state.body}
            >
            </textarea>
          </div>

          <div className="create-review-rating">
            <li>Rating</li>
            <Rating
              name="rating"
              className="rating-selector"
              emptySymbol="fa fa-star-o"
              fullSymbol="fa fa-star"
              fractions={2}
              initialRating={this.state.rating}
              onChange={(e) => this.setState({
                  rating: e
              })}
              onClick={(e) => this.setState({
                  rating: e
              })}
            />
            <p>{this.state.rating || ""}</p>
          </div>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div >
    );
  }

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateReview))