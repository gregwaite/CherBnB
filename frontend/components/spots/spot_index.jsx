import React from 'react';

class SpotIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSpots();
  }

  render() {
    const spots = this.props.spots.map(spot => {
      return (
      <div key={spot.id}>
        <li key={spot.id}>
          {spot.title}
        </li>
        <li>
          {spot.description}
        </li>
        <li>
          {spot.address}
        </li>
        <li>
          {spot.ammenities}
        </li>
        <li>
          {spot.price}
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