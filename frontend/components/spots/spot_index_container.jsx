import Search from './search';
import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots),
    bounds: state.ui.filter.bounds,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);