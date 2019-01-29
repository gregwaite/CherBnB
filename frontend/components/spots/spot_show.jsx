import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../session_form/session_modal';

class SpotShow extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render(){
    const spot = this.props.spot || {};
    return (
      <div id='show-greeting'>
        <section>
          <Modal />
          <GreetingContainer></GreetingContainer>
        </section>
        <div className='show-div'>

          <div className='basic-info'>
            <li className='show-spot-type'>
              {spot.spot_type}
            </li>
            <li className='show-title'>
              {spot.title}
            </li>
            <li className='show-address'>
              {spot.address}
            </li>
          </div>

          <div className='show-description'>
            <li>
              {spot.description}
            </li>
          </div>  

          <div className='show-ammenities'>
            <li>
              {spot.ammenities}
            </li>
          </div>

        </div>
      </div>
    )
  }
}

export default SpotShow