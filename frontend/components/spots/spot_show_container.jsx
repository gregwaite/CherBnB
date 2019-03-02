import SpotShow from './spot_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSpot } from '../../actions/spot_actions';
import { createBooking } from '../../actions/booking_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { destroyErrors } from '../../actions/session_actions';
import { updateCenter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    spot: state.entities.spots[ownProps.match.params.spotId],
    amenities: state.entities.amenities,
    loggedIn: Boolean(state.session.id),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
    fetchSpot: id => dispatch(fetchSpot(id)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    destroyErrors: () => dispatch(destroyErrors()),
    updateCenter: (filter, center) => dispatch(updateCenter(filter, center)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpotShow));