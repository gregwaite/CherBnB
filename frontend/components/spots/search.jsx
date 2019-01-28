import React from 'react';
import SpotIndex from './spot_index';
import SpotMap from './spot_map';

class Search extends React.Component {

  render(){
    return (
      <div>
        <ul>
          <SpotMap></SpotMap>
        </ul>
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