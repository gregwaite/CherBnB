import React from 'react';
import Greeting from '../greeting/greeting_container';
import SpotIndex from '../spots/spot_index';
import SpotMap from '../spots/spot_map';


class Search extends React.Component {
  componentDidMount() {
    this.props.updateFilter('bounds', this.props.bounds);
  }
  render() {
    return (
      <div className='search-show-div'>
        <Greeting></Greeting>
        <ul>
          <SpotIndex
            spots={this.props.spots}
            updateFilter={this.props.updateFilter}
            bounds={this.props.bounds}
          ></SpotIndex>
        </ul>
        <ul>
          <SpotMap
            spots={this.props.spots}
            updateFilter={this.props.updateFilter}
            center={this.props.center}
          ></SpotMap>
        </ul>
      </div>
    )
  }
}

export default Search;