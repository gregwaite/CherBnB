import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from './review_index';
import { fetchReviews, destroyReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state) => {
  return {
    reviews: Object.values(state.entities.reviews),
    userId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: (spotId) => dispatch(fetchReviews(spotId)),
    destroyReview: (id) => dispatch(destroyReview(id)),
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));