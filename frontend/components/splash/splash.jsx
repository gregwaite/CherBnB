import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../session_form/session_modal';
import DatePicker from '../datepicker/date_picker';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class Splash extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      address: '',
      lat: '',
      long: '',
      guestsNum: 1,
      guestDropHidden: false,
      guestHideReveal: "hidden-guest-dropdown",
    };

    this.guestPluralSingle = "Cher";

    this.handleClick = this.handleClick.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.openGuests = this.openGuests.bind(this);
    this.event = this.event.bind(this);
  }

  componentDidMount() {
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
    debugger
    this.setState({
      startDate: date,
    });
  }
  handleEndChange(date) {
    this.setState({
      endDate: date,
    });
  }
  handleChange(address){
    this.setState({ address });
  }

  handleSelect(address){
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({
        long: parseFloat(latLng.lng),
        lat: parseFloat(latLng.lat),
        address,
      }, () => {
        this.search();
      }))
      .catch(error => console.error('Error', error));
  }

  search(){
    this.props.updateCenter('center', { lat: this.state.lat, lng: this.state.long });
  }

  handleClick(){
    debugger
    if (this.state.startDate && this.state.endDate) {
      this.props.updateCenter('center', { lat: this.state.lat, lng: this.state.long }).then(() => {
        this.props.updateFilter('guest_request', {num: this.state.guestsNum}).then(() => 
        this.props.updateFilter('dates', {start_date: this.state.startDate, end_date: this.state.endDate})).then(() => 
        this.props.history.push('/search'));
      });
    } else {
      this.props.updateCenter('center', { lat: this.state.lat, lng: this.state.long }).then(() => {
        this.props.updateFilter('guest_request', { num: this.state.guestsNum }).then(() =>
        this.props.updateFilter('dates', null)).then(() =>
        this.props.history.push('/search'));
      });
    }
  }

  openGuests(){
    this.setState({guestHideReveal: "revealed-guest-dropdown"});
  }

  handleGuestChange(value){
    if (this.state.guestsNum === 1 && value === "add") {
      this.guestPluralSingle = "Chers";
    } else if (this.state.guestsNum === 2 && value === "subtract") {
      this.guestPluralSingle = "Cher";
    }
    if (value === "add" && this.state.guestsNum < 10) {
      this.setState({guestsNum: this.state.guestsNum + 1});
    } else if (value === "subtract" && this.state.guestsNum > 1) {
      this.setState({guestsNum: this.state.guestsNum - 1});
    }
  }
  
  render() {
    return (
    <div className="home-page">
      <Modal />
      <header className="home-header">
        <GreetingContainer></GreetingContainer>
        <h1>Take Me Home, to CherBnB</h1>
      </header>
      <div className='bookings-search'>
        <h1>Share homes and experiences exclusively with Cher.</h1>
        <p className='where'>Where</p>
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Anywhere that you, Cher, own, because you are Cher',
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
          
          <div className='checkin-checkout'>
            <p>Check In</p>
            <p>Check Out</p>
          </div>
          <section className="datepickers">
            <DatePicker
              handleStartChange={this.handleStartChange}
              handleEndChange={this.handleEndChange}
            />
          </section>
          <section className='guests'>
            <p>Guests</p>
            <input type="text" placeholder="How many guests, sugar?" value={`${this.state.guestsNum} ${this.guestPluralSingle}`} readOnly={true} onClick={this.openGuests}/>
            <div id="guest-dropdown"className={this.state.guestHideReveal}>
                <section>
                  <span>{`${this.state.guestsNum} ${this.guestPluralSingle}`}</span>
                  <button onClick={() => this.handleGuestChange("subtract")}>-</button>
                  <button onClick={() => this.handleGuestChange("add")}>+</button>
                </section>
            </div>
          </section> 

          <button className='search-button' onClick={this.handleClick}>Search</button>
      </div>
    </div>
    )
  }
}

export default Splash