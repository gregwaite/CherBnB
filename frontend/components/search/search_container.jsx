import Search from './search';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSpots } from '../../actions/spot_actions';

const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));