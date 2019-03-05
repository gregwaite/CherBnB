import SpotShow from './spot_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSpot } from '../../actions/spot_actions';
import { fetchReviews } from '../../actions/review_actions';
import { createBooking } from '../../actions/booking_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { destroyErrors } from '../../actions/session_actions';
import { updateCenter, updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
  
  return {
    spot: state.entities.spots[ownProps.match.params.spotId],
    bounds: state.ui.filter.bounds,
    center: state.ui.filter.center,
    amenities: state.entities.amenities,
    reviews: Object.values(state.entities.reviews),
    loggedIn: Boolean(state.session.id),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
    fetchSpot: id => dispatch(fetchSpot(id)),
    fetchReviews: id => dispatch(fetchReviews(id)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    destroyErrors: () => dispatch(destroyErrors()),
    updateCenter: (filter, center) => dispatch(updateCenter(filter, center)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpotShow));