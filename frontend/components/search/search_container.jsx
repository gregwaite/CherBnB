import Search from './search';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateFilter } from '../../actions/filter_actions';

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
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));