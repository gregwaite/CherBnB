import React from 'react';

class SpotIndex extends React.Component {
  componentDidMount(){
    this.props.fetchSpots();
  }

  render() {
    const spots = this.props.spots.map(spot => {
      return (
      <ul key={spot.id}>
        <li key={spot.id}>
          {spot.title}
        </li>
        <li>
          {spot.description}
        </li>
      </ul>
      )
    });
    return (
      <div className='index'>
          {spots}
      </div>
    )
  }
}

export default SpotIndex;