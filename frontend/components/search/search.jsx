import React from "react";
import Greeting from "../greeting/greeting_container";
import SpotIndex from "../spots/spot_index";
import SpotMap from "../spots/spot_map";
import Modal from "../session_form/session_modal";
import DatePicker from "../datepicker/date_picker";
import SearchIcon from "../../static_assets/search_icon";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      long: "",
      lat: "",
      center: this.props.center,
      bounds: this.props.bounds,
      guestsNum: 1,
      startDate: null,
      endDate: null,
      guestHideReveal: "hidden-guest-dropdown"
    };

    this.guestPluralSingle = "Cher";
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleGuestChange = this.handleGuestChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleApplyDate = this.handleApplyDate.bind(this);
    this.openGuests = this.openGuests.bind(this);
    this.event = this.event.bind(this);
  }

  componentDidMount() {
    this.props.updateFilter("bounds", this.props.bounds);
    this.elementCheck = document.querySelector("#guest-dropdown");
    document.body.addEventListener("click", this.event);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.event);
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

  openGuests() {
    this.setState({ guestHideReveal: "revealed-guest-dropdown" });
  }

  handleChange(address) {
    this.setState({ address });
  }

  handleSelect(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>
        this.setState(
          {
            long: parseFloat(latLng.lng),
            lat: parseFloat(latLng.lat),
            center: {
              lat: parseFloat(latLng.lat),
              lng: parseFloat(latLng.lng)
            },
            address
          },
          () => {
            this.search();
          }
        )
      )
      .catch(error => console.error("Error", error));
  }

  search() {
    this.props.updateCenter("center", {
      lat: this.state.lat,
      lng: this.state.long
    });
  }

  handleGuestChange(value) {
    if (this.state.guestsNum === 1 && value === "add") {
      this.guestPluralSingle = "Chers";
    } else if (this.state.guestsNum === 2 && value === "subtract") {
      this.guestPluralSingle = "Cher";
    }
    if (value === "add" && this.state.guestsNum < 10) {
      this.setState({ guestsNum: this.state.guestsNum + 1 });
      this.props.updateFilter("guest_request", {
        num: this.state.guestsNum + 1
      });
    } else if (value === "subtract" && this.state.guestsNum > 1) {
      this.setState({ guestsNum: this.state.guestsNum - 1 });
      this.props.updateFilter("guest_request", {
        num: this.state.guestsNum - 1
      });
    }
  }

  handleStartChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleEndChange(date) {
    this.setState({
      endDate: date
    });
  }
  handleApplyDate() {
    this.props.updateFilter("dates", {
      start_date: this.state.startDate,
      end_date: this.state.endDate
    });
  }

  render() {
    return (
      <div className="search-show-div">
        <div className="search-show-greeting-filter">
          <div className="search-show-greeting">
            <Modal
              closeModal={this.props.closeModal}
              destroyErrors={this.props.destroyErrors}
            />
            <Greeting noText={true} />
          </div>
          <div className="search-show-filters">
            <div className="spot-show-searchbar">
              <SearchIcon
                options={{ height: "18px", width: "18px", fill: "#333" }}
              />
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Try "Brooklyn"',
                        className: "location-search-input"
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style
                            })}
                          >
                            <span>
                              <i className="fas fa-map-marker-alt" />{" "}
                              {suggestion.description}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
            <section className="guests">
              <input
                type="text"
                placeholder="How many guests, sugar?"
                value={`${this.state.guestsNum} ${this.guestPluralSingle}`}
                readOnly={true}
                onClick={this.openGuests}
              />
              <div id="guest-dropdown" className={this.state.guestHideReveal}>
                <section>
                  <span>Chers</span>
                  <div className="guest-dropdown-buttons">
                    <button onClick={() => this.handleGuestChange("subtract")}>
                      -
                    </button>
                    <span>{this.state.guestsNum}</span>
                    <button onClick={() => this.handleGuestChange("add")}>
                      +
                    </button>
                  </div>
                </section>
              </div>
            </section>
            <section className="datepickers">
              <DatePicker
                handleStartChange={this.handleStartChange}
                handleEndChange={this.handleEndChange}
                numMonths={2}
                type="search"
              />

              <span onClick={this.handleApplyDate} className="date-apply-span">
                Apply
              </span>
            </section>
          </div>
        </div>
        <div className="search-show-contents">
          <div className="search-show-index">
            <SpotIndex
              spots={this.props.spots}
              updateFilter={this.props.updateFilter}
              bounds={this.state.bounds}
            />
          </div>
          <div className="search-show-map">
            <SpotMap
              spots={this.props.spots}
              updateFilter={this.props.updateFilter}
              center={this.state.center}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
