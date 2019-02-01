import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from './review_index';
import { fetchReviews, destroyReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let ownReviews;
  if (state.entities.reviews.reviews) {
    ownReviews = Object.values(state.entities.reviews.reviews).filter(review => {
      return parseInt(ownProps.match.params.spotId) === review.spot_id;
    });
  } else {
    ownReviews = [];
  }
  return {
    reviews: ownReviews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews()),
    destroyReview: (id) => dispatch(destroyReview(id)),
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));