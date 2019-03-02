import React from 'react';
import { Link } from 'react-router-dom';
import Geocode from 'react-geocode';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
    this.handleGeocode = this.handleGeocode.bind(this);
    Geocode.setApiKey("AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U");
  }
  
  componentDidMount(){
    const { spot } = this.props;
    Geocode.fromLatLng(spot.lat, spot.long).then(
      response => {
        this.handleGeocode(response);
      },
      error => {
        console.error(error);
      }
    );
  }

  handleGeocode(response) {
    const location = response.plus_code.compound_code.split(" ").slice(1).join(" ").split(",")[0];
    if (this.state.location !== location) {
      this.setState({ location: location });
    }
  }

  render() {
    const {spot} = this.props;
    Geocode.fromLatLng(spot.lat, spot.long).then(
      response => {
        this.handleGeocode(response);
      },
      error => {
        console.error(error);
      }
    );
    spot.location = this.state.location;
    return (
      <div key={spot.id}>
        <Link className='spot-link' to={`/spots/${spot.id}`}>
          <img src={spot.photoUrls[0]} />
          <span className='spot-address'>
            {`${spot.spot_type} : ${spot.location}`}
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
  };


}

export default SpotIndexItem