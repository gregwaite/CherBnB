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
    this.initialRating = typeof this.averageRating === "string" ? 0 : this.averageRating;
    if (this.props.spot) {
      if (this.props.spot.reviews.length > 0) {
        this.numOfRevs = this.props.spot.reviews.length;
      }
    } else {
      this.numOfRevs = "";
    }
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
          <div className="index-item-ratings">
            <p className="index-item-average">{this.averageRating}</p>
            <p className="rating-item">
              <Rating
                className="read-only-rating"
                readonly
                emptySymbol="fa fa-star-o"
                fullSymbol="fa fa-star"
                fractions={2}
                initialRating={this.initialRating }
              />
              
            </p>
            <p>
              {this.numOfRevs}
            </p>
          </div>
        </Link>
      </div>
    )
  };


}

export default SpotIndexItem