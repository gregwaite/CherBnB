import React from 'react';

class SpotIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSpots();
  }

  render() {
    const spots = this.props.spots.map(spot => {
      return (
      <div key={spot.id}>
        <li className= 'spot-title'key={spot.id}>
          {spot.title}
        </li>
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