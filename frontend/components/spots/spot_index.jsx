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
          {spot.title}
        </Link>
        <li className='spot-address'>
          {spot.address}
        </li>
        <li className='spot-ammenities'>
          {spot.ammenities}
        </li>
        <li className='spot-price'>
          ${spot.price}.00
        </li>
      </div>
      )
    });
    return (
      <div className='index'>
        <h2>Some excellent places to be Cher</h2>
        <section>
          {spots}
        </section>
      </div>
    )
  }
}

export default SpotIndex;