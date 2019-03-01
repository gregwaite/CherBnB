import Search from './search';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots),
    bounds: state.ui.filter.bounds,
    initialCenter: state.ui.filter.initialCenter,
    amenities: state.entities.amenities,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);