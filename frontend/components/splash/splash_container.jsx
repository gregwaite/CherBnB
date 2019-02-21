import { connect } from 'react-redux'
import Splash from './splash';
import { updateCenter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return {
    bounds: state.ui.filter.bounds,
  };
};
const mdp = dispatch => {
  return {
    updateCenter: (filter, center) => dispatch(updateCenter(filter, center)),
  };
};

export default withRouter(connect(msp, mdp)(Splash));