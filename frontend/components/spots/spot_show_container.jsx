import SpotShow from './spot_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSpot } from '../../actions/spot_actions';
import { createBooking } from '../../actions/booking_actions';
import { closeModal } from '../../actions/modal_actions';
import { destroyErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    spot: state.entities.spots[ownProps.match.params.spotId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
    fetchSpot: id => dispatch(fetchSpot(id)),
    closeModal: () => dispatch(closeModal()),
    destroyErrors: () => dispatch(destroyErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpotShow));