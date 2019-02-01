import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return {
    review: {
      title: "",
      body: "",
      rating: "",      
      spot_id: ownProps.match.params.spotId,
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: (review) => dispatch(createReview(review)),
  };
};

class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.createReview(this.state);
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