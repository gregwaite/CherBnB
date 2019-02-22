import React from 'react';
import Greeting from '../greeting/greeting_container';
import SpotIndex from '../spots/spot_index';
import SpotMap from '../spots/spot_map';
import Modal from '../session_form/session_modal';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: "",
      long: "",
      lat: "",
      center: this.props.center,
      bounds: this.props.bounds,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.updateFilter('bounds', this.props.bounds);
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
    this.props.updateCenter('center', { lat: this.state.lat, lng: this.state.long });
  }

  
  render() {
    return (
      <div className='search-show-div'>
        <div className='search-show-greeting'>
          <Modal></Modal>
          <Greeting></Greeting>
        </div>
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
        <div className='search-show-contents'>
          <div className='search-show-index'>
            <SpotIndex
              spots={this.props.spots}
              updateFilter={this.props.updateFilter}
              bounds={this.state.bounds}
            ></SpotIndex>
          </div>
          <div className='search-show-map'>
            <SpotMap
              spots={this.props.spots}
              updateFilter={this.props.updateFilter}
              center={this.state.center}
            ></SpotMap>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;