import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';
import React from 'react';
import Rating from 'react-rating';

const mapStateToProps = (state, ownProps) => {
  return {
    review: {
      title: "",
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
      this.setState({["title"]: ""});
      this.setState({["body"]: ""});
      this.setState({["rating"]: ""});
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
          <div className="create-review-title">
            <li>Title</li>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
            ></input>
          </div>
          
          <div className="create-review-body">
            <li>Review</li>
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
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              fractions={2}
              initialRating={this.state.rating}
              onChange={(e) => this.setState({
                  rating: e
              })}
              onClick={(e) => this.setState({
                  rating: e
              })}
            />
            <input 
              type="number"
              value={this.state.rating}
              onChange={this.update("rating")}
            ></input>
          </div>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div >
    );
  }

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateReview))