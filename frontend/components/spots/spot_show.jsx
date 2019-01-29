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
        <ul>
          <li>
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
        </ul>
      </div>
    )
  }
}

export default SpotShow