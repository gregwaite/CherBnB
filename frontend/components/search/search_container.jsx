import Search from './search';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateFilter, updateCenter } from '../../actions/filter_actions';
import { closeModal } from '../../actions/modal_actions';
import { destroyErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots),
    center: state.ui.filter.center,
    bounds: state.ui.filter.bounds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    updateCenter: (filter, center) => dispatch(updateCenter(filter, center)),
    closeModal: () => dispatch(closeModal()),
    destroyErrors: () => dispatch(destroyErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));