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
      startDate: new Date(),
      endDate: new Date(),
      address: '',
      lat: '',
      long: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
    this.props.updateCenter('center', { lat: this.state.lat, lng: this.state.long }).then(() => {
      this.props.history.push('/search');
    });
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
            <input type="text" placeholder='Guests dropdown will go here'/>
          </section>

          <button className='search-button' onClick={this.handleClick}>Search</button>
      </div>
    </div>
    )
  }
}

export default Splash