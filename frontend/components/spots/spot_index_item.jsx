import React from 'react';
import { Link } from 'react-router-dom';
import Geocode from 'react-geocode';
import Rating from 'react-rating';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
    this.handleGeocode = this.handleGeocode.bind(this);
    this.checkAverage = this.checkAverage.bind(this);
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

  checkAverage() {
    if (this.props.spot) {
      let total = 0;
      this.props.spot.reviews.forEach(review => {
        total += review.rating;
      });
      if (this.props.spot.reviews.length === 0) {
        this.averageRating = ("Not yet reviewed");
      } else {
        this.averageRating = parseFloat(total) / this.props.spot.reviews.length
      }
    } else {
      this.averageRating = 0;
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
    this.checkAverage();
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
          <li className='spot-price'>
            This many Chers {spot.max_guests}
          </li>
          <ul className="rating-item">
            <Rating
              className="read-only-rating"
              readonly
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              fractions={2}
              initialRating={this.averageRating}
            />
            <li>{this.averageRating}</li>
            <li>Average Rating</li>
          </ul>
        </Link>
      </div>
    )
  };


}

export default SpotIndexItem