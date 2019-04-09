import React from "react";
import { Link } from "react-router-dom";
import SpotIndexItem from "../spots/spot_index_item";
import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots),
    bounds: state.ui.filter.bounds,
    initialCenter: state.ui.filter.initialCenter,
    amenities: state.entities.amenities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

class Featured extends React.Component {
  componentDidMount() {
    this.props.updateFilter();
  }

  render() {
    const featured = this.props.spots.slice(0, 3);
    const spots = featured.map(spot => {
      return <SpotIndexItem spot={spot} key={spot.id} />;
    });

    return (
      <div className="featured-div">
        <div id="explore">
          <h2>Explore Cher</h2>
          <Link className="explore-link" to="/search">
            <div id="explore-image" />
            <p>Chers</p>
          </Link>
        </div>
        <div className="index">
          <h2>Featured Cher Abodes</h2>
          <section>{spots}</section>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured);
