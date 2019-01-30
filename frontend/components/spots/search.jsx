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
          ></SpotIndex>
        </ul>
        <ul>
          <SpotMap 
            spots={this.props.spots} 
            fetchSpots={this.props.fetchSpots}
          ></SpotMap>
        </ul>
      </div>
    )
  }
}


export default Search;