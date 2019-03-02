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

class SpotMap extends React.Component {
  
  componentDidMount(){
    let initialCenter;
    if (this.props.center) {
      if (this.props.center.lat) {
        initialCenter = this.props.center;
      } else {
        initialCenter = { lat: 37.77438675752185, lng: -122.42216208203126 };
      }
    } else {
      initialCenter = { lat: 37.77438675752185, lng: -122.42216208203126 };
    }

    const mapOptions = {
      center: initialCenter,
      zoom: 13,
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    
    this.registerListeners();
    
    this.MarkerManager.updateMarkers(this.props.spots);
    
  }

  componentDidUpdate(prevProps) {
    const { center } = this.props;

    this.MarkerManager.updateMarkers(this.props.spots);
    if (prevProps.center){
      if (prevProps.center.lat !== center.lat) {
        
        this.map.setCenter({ lat: center.lat, lng: center.lng });
      }
    }
  }


  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'tilesloaded', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
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
    debugger
    return (
      <div id='map-container' ref={map => this.mapNode = map} >
        Map Boys
      </div>
    )
  }

}

export default withRouter(SpotMap);