import { connect } from 'react-redux'
import Splash from './splash';
import { updateCenter, updateFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { destroyErrors } from '../../actions/session_actions';

const msp = state => {
  return {
    bounds: state.ui.filter.bounds,
  };
};
const mdp = dispatch => {
  return {
    updateCenter: (filter, center) => dispatch(updateCenter(filter, center)),
    updateFilter: (filter, bounds) => dispatch(updateFilter(filter, bounds)),
    closeModal: () => dispatch(closeModal()),
    destroyErrors: () => dispatch(destroyErrors()),
  };
};

export default withRouter(connect(msp, mdp)(Splash));