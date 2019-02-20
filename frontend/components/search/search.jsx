import React from 'react';
import { Link } from 'react-router-dom';
import SpotIndex from '../spots/spot_index_container';
import SpotMap from '../spots/spot_map';


class Search extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();
  }
  render() {
    return (
      <div className='spot-search'>
        <ul>
          <SpotIndex
            spots={this.props.spots}
            fetchSpots={this.props.fetchSpots}
          ></SpotIndex>
        </ul>
      </div>
    )
  }
}

export default Search;