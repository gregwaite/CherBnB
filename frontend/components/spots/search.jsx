import React from 'react';
import SpotIndex from './spot_index';
import SpotMap from './spot_map';

class Search extends React.Component {

  render(){
    return (
      <div className='spot-search'>
        <ul>
          <SpotIndex
            spots={this.props.spots}
            fetchSpots={this.props.fetchSpots}
            updateFilter={this.props.updateFilter}
            bounds={this.props.bounds}
          ></SpotIndex>
        </ul>
        <ul>
          <SpotMap 
            spots={this.props.spots} 
            fetchSpots={this.props.fetchSpots}
            updateFilter={this.props.updateFilter}
          ></SpotMap>
        </ul>
      </div>
    )
  }
}


export default Search;