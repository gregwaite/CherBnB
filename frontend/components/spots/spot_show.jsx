import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../session_form/session_modal';
import DatePicker from '../datepicker/date_picker';
import ReviewIndexContainer from '../reviews/review_index_container';
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
    };
    
    this.guestPluralSingle = "Cher";
    

    this.handleGeocode = this.handleGeocode.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
    this.openGuests = this.openGuests.bind(this);
    this.event = this.event.bind(this);
    
    Geocode.setApiKey("AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U");
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
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
    const booking = {
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      status: 'Approved',
      spot_id: this.props.match.params.spotId,
      num_guests: this.state.guestsNum,
    };
    this.props.createBooking(booking).then(booking => this.props.openModal('booking'));
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
//   else if(this.state.location !== response.plus_code.compound_code.split(" ")[1] + " " + response.plus_code.compound_code.split(" ")[2]) {
//   this.setState({ location: response.plus_code.compound_code.split(" ")[1] + " " + response.plus_code.compound_code.split(" ")[2] });
// }

  render() {
    const spot = this.props.spot || {
      photoUrls: [], ammenities: [], lat: "", long: ""};
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
      <div id='show-greeting'>
        <section>
          <Modal
            closeModal={this.props.closeModal}
            destroyErrors={this.props.destroyErrors}
          />
          <GreetingContainer></GreetingContainer>
        </section>
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
                  />
              </section>
            </div>
            <section className='guests'>
              <p>Guests</p>
              <input type="text" placeholder="How many guests, sugar?" value={`${this.state.guestsNum} ${this.guestPluralSingle}`} readOnly={true} onClick={this.openGuests} />
              <div id="guest-dropdown" className={this.state.guestHideReveal}>
                <section>
                  <span>{`${this.state.guestsNum} ${this.guestPluralSingle}`}</span>
                  <button onClick={() => this.handleGuestChange("subtract")}>-</button>
                  <button onClick={() => this.handleGuestChange("add")}>+</button>
                </section>
              </div>
            </section> 

            <button className='search-button' onClick={this.handleBookSubmit}>Book</button>
          </div>


        </div>
        <div className="reviews-container">
          <ReviewIndexContainer></ReviewIndexContainer>
        </div>
      </div>
    )
  }
}

export default SpotShow