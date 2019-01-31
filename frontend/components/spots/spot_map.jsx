import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoords = latLong => {
  return {
    lat: latLong.lat(),
    lng: latLong.lng(),
  };
};

const mapOptions = {
  center: {lat: 44.7758, lng: -122.435},
  zoom: 5,
};

class SpotMap extends React.Component {
  
  componentDidMount(){
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    
    this.registerListeners();
    
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.spots);
  }



  registerListeners() {
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoords(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(spotId) {
    this.props.history.push({
      pathname: `spots/${spotId}`
    });
    
  }

  render(){
    return (
      <div id='map-container' ref={map => this.mapNode = map} >
        Map Boys
      </div>
    )
  }

}

export default withRouter(SpotMap);