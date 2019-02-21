import React from 'react';
import Greeting from '../greeting/greeting_container';
import SpotIndex from '../spots/spot_index';
import SpotMap from '../spots/spot_map';
import Modal from '../session_form/session_modal';


class Search extends React.Component {
  componentDidMount() {
    this.props.updateFilter('bounds', this.props.bounds);
  }
  render() {
    return (
      <div className='search-show-div'>
        <div className='search-show-greeting'>
          <Modal></Modal>
          <Greeting></Greeting>
        </div>
        <div className='search-show-contents'>
          <div className='search-show-index'>
            <SpotIndex
              spots={this.props.spots}
              updateFilter={this.props.updateFilter}
              bounds={this.props.bounds}
            ></SpotIndex>
          </div>
          <div className='search-show-map'>
            <SpotMap
              spots={this.props.spots}
              updateFilter={this.props.updateFilter}
              center={this.props.center}
            ></SpotMap>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;