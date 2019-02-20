import React from 'react';
import { Link } from 'react-router-dom';


class SpotIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSpots();
  }
  render() {
    const spots = this.props.spots.map(spot => {
      return (
      <div key={spot.id}>
        <Link className='spot-link' to={`/spots/${spot.id}`}>
          <img src={spot.photoUrls[0]}/>
        <span className='spot-address'>
          {`${spot.spot_type} : ${spot.address}`}
        </span>
        <li className='spot-title'>
          {spot.title}
        </li>
        <li className='spot-price'>
          ${spot.price} per night
        </li>
        </Link>
      </div>
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