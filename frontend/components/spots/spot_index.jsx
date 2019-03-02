import React from 'react';
import { Link } from 'react-router-dom';
import SpotIndexItem from './spot_index_item';


class SpotIndex extends React.Component {

  componentDidMount(){
    this.props.updateFilter('bounds', this.props.bounds);
  }


  render() {
    const spots = this.props.spots.map(spot => {
      return (
        <SpotIndexItem
          spot={spot}
          key={spot.id}
        ></SpotIndexItem>
      )
    });
    const displaySpots = spots.slice(0,6)
    return (
      <div className='index'>
        <h2>Some excellent places to be Cher</h2>
        <section>
          {displaySpots}
        </section>
      </div>
    )
  }
}

export default SpotIndex;