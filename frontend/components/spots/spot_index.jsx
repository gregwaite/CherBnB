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
    let displaySpots;
    if (spots.length > 0) {
      displaySpots = spots.slice(0,6)
    } else {
      displaySpots = <li>No results here, sugar. Try Manhattan, Brooklyn, or San Fran. That's where Cher lives </li>
    }
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