import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../session_form/session_modal';
import DatePicker from '../datepicker/date_picker';
import ReviewIndexContainer from '../reviews/review_index_container';
import SpotMap from './spot_map';
import Rating from 'react-rating';
import Geocode from 'react-geocode';
import {
  AirCon,
  Iron,
  Wifi,
  Kitchen,
  TV,
  Washer,
  Dryer,
  Parking,
  HairDryer,
  HotTub,
  Coffee,
  Laptop
} from '../../static_assets/amenity_icons';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      focusedInput: 'startDate',
      calendarFocused: null,
      openDatePicker: false,
      dropDownMode: 'scroll',
      guestsNum: 1,
      guestDropHidden: true,
      guestHideReveal: "hidden-guest-dropdown",
      location: "",
      address: "",
      center: this.props.center,
      bounds: this.props.bounds
    };
    
    this.guestPluralSingle = "Cher";
    

    this.handleGeocode = this.handleGeocode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
    this.openGuests = this.openGuests.bind(this);
    this.checkAverage = this.checkAverage.bind(this);
    this.event = this.event.bind(this);
    
    Geocode.setApiKey("AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U");
  }

  componentDidMount() {
    const that = this;
    this.props.fetchSpot(this.props.match.params.spotId).then((result) => {
      if (that.state.center.lat !== result.spot.lat){
        that.setState({center: { lat: result.spot.lat, lng: result.spot.long }});
        that.props.updateCenter("center", { lat: result.spot.lat, lng: result.spot.long });
        this.props.updateFilter('bounds', this.props.bounds);
      }
    });
    this.elementCheck = document.querySelector('#guest-dropdown');
    document.body.addEventListener('click', this.event);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.event);
  }

  event(event) {
    if (this.elementCheck.contains(event.target)) {
      this.setState({
        guestHideReveal: "revealed-guest-dropdown",
        guestDropHidden: false
      });
    } else {
      this.setState({
        guestHideReveal: "hidden-guest-dropdown",
        guestDropHidden: true
      });
    }
  }

  handleStartChange(date) {
    this.setState({
      startDate: date,
    });
  }
  handleEndChange(date) {
    this.setState({
      endDate: date,
    });
  }
  handleBookSubmit() {
    if (this.props.loggedIn){
      const booking = {
        start_date: this.state.startDate,
        end_date: this.state.endDate,
        status: 'Approved',
        spot_id: this.props.match.params.spotId,
        num_guests: this.state.guestsNum,
      };
      this.props.createBooking(booking).then(booking => this.props.openModal('booking'));
    } else {
      this.props.openModal('login');
    }
  }

  openGuests() {
    this.setState({ guestHideReveal: "revealed-guest-dropdown" });
  }

  handleGuestChange(value) {
    if (this.state.guestsNum === 1 && value === "add") {
      this.guestPluralSingle = "Chers";
    } else if (this.state.guestsNum === 2 && value === "subtract") {
      this.guestPluralSingle = "Cher";
    }
    if (value === "add" && this.state.guestsNum < this.props.spot.max_guests) {
      this.setState({ guestsNum: this.state.guestsNum + 1 });
    } else if (value === "subtract" && this.state.guestsNum > 1) {
      this.setState({ guestsNum: this.state.guestsNum - 1 });
    }
  }

  handleGeocode(response) {
    const location = response.plus_code.compound_code.split(" ").slice(1).join(" ").split(",")[0];
    if (this.state.location !== location){
      this.setState({location: location});
    }
  }

  handleChange(address) {
    this.setState({ address });
  }

  handleSelect(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({
        long: parseFloat(latLng.lng),
        lat: parseFloat(latLng.lat),
        center: { lat: parseFloat(latLng.lat), lng: parseFloat(latLng.lng) },
        address,
      }, () => {
        this.search();
      }))
      .catch(error => console.error('Error', error));
  }

  search() {
    this.props.updateCenter('center', { lat: this.state.lat, lng: this.state.long }).then(
      () => this.props.history.push('/search')
    );
  }

  checkAverage(){
    if (this.props.spot) {
      let total = 0;
      this.props.spot.reviews.forEach(review => {
        total += review.rating;
      });
      if (this.props.spot.reviews.length === 0){
        this.averageRating = ("Not yet reviewed");
      } else {
        this.averageRating = parseFloat(total) / this.props.spot.reviews.length
      }
    } else {
      this.averageRating = 0;
    }
  }

  render() {
    const spot = this.props.spot || {
      photoUrls: [], ammenities: [], lat: "", long: "", reviews: []};
    const amenityList = {
      AirCon,
      Iron,
      Wifi,
      Kitchen,
      TV,
      Washer,
      Dryer,
      Parking,
      HairDryer,
      HotTub,
      Coffee,
      Laptop
    };
    const {amenities} = this.props;
    if (spot.lat !== "") {
      Geocode.fromLatLng(spot.lat, spot.long).then(
        response => {
          this.handleGeocode(response);
        },
        error => {
          console.error(error);
        }
      );
    }
    spot.location = this.state.location;
    
    this.checkAverage();
    return (
      <div id='show-greeting'>
      <div className="show-navbar-div">
        <section className="show-navbar">
          <Modal
            closeModal={this.props.closeModal}
            destroyErrors={this.props.destroyErrors}
          />
          <GreetingContainer></GreetingContainer>
        </section>
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Try Brooklyn',
                    className: 'location-search-input',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
      </div>
        <div className="whole-show">
          <div className='show-div'>
            <img src={spot.photoUrls[0]} />
            <div className='basic-info'>
              <li className='show-spot-type'>
                {spot.spot_type}
              </li>
              <li className='show-title'>
                {spot.title}
              </li>
              <li className='show-address'>
                {spot.location}
              </li>
              <li>
                {spot.max_guests} Chers
              </li>
            </div>

            <div className='show-description'>
              <li>
                {spot.description}
              </li>
            </div>

            <div className='show-ammenities'>
              <div className="amenities">
                {Object.values(amenities).filter(a => { 
                  return spot.ammenities.map(a => parseInt(a)).includes(a.id)
                }).map(amenity => {
                  const Amenity = amenityList[amenity.icon];
                  return <div className="grid--50 amenity" key={amenity.id}><Amenity /> {amenity.name}</div>
                })}
              </div>
            </div>
            <ul className="rating-item">
              <Rating
                className="read-only-rating"
                readonly
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                initialRating={this.initialRating}
              />
              <li>{this.averageRating}</li>
              <li>Average Rating</li>
            </ul>

            <div className="show-datepickers">
                  <h1>Availabity</h1>
              <section className="datepickers">
                <DatePicker
                  handleStartChange={this.handleStartChange}
                  handleEndChange={this.handleEndChange}
                  spot={spot}
                  blockSome={true}
                  availCal={true}
                />
              </section>
            </div>
        <div className="reviews-container">
          <ReviewIndexContainer></ReviewIndexContainer>
        </div>
          </div>
          <section className="spot-show-map-search">
            <h1>The Cherborhood</h1>
            <div className='spot-map'>
              <SpotMap
                spots={this.props.spots}
                updateFilter={this.props.updateFilter}
                center={this.state.center}
              ></SpotMap>
            </div>

            <div className="bookings-search">
              <h1>Book this spot, me. I am Cher.</h1>
              <div className='checkin-checkout'>
                <p>Check In</p>
                <p>Check Out</p>
              </div>
              <div className="show-datepickers">
                <section className="datepickers">
                    <DatePicker
                      handleStartChange={this.handleStartChange}
                      handleEndChange={this.handleEndChange}
                      spot={spot}
                      blockSome={true}
                      numMonths={1}
                    />
                </section>
              </div>
              <section className='guests'>
                <p>Guests</p>
                <input type="text" placeholder="How many guests, sugar?" value={`${this.state.guestsNum} ${this.guestPluralSingle}`} readOnly={true} onClick={this.openGuests} />
                <div id="guest-dropdown" className={this.state.guestHideReveal}>
                  <section>
                    <span>Chers</span>
                    <div className="guest-dropdown-buttons">
                      <button onClick={() => this.handleGuestChange("subtract")}>-</button>
                      <span>{this.state.guestsNum}</span>
                      <button onClick={() => this.handleGuestChange("add")}>+</button>
                    </div>
                  </section>
                </div>
              </section> 

              <button className='search-button' onClick={this.handleBookSubmit}>Book</button>
            </div>
          </section>
        </div>

      </div>
    )
  }
}

export default SpotShow