/* global google:false */

export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(spots) {
    const unmarkedSpots = {};
    spots.forEach(spot => unmarkedSpots[spot.id] = spot);
    
    spots.filter(spot => 
      (this.markers[spot.id] !== spot)
    ).forEach(unmarked => 
      this.createMarkerFromSpot(unmarked)
    );
    
    Object.keys(this.markers).filter(spotId => 
      !unmarkedSpots[spotId]).forEach(spotId => 
        this.removeMarker(this.markers[spotId]));
  }

  createMarkerFromSpot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id,
      label: {
        text: `$${spot.price}`,
        fontWeight: 'bolder',
        fontSize: '12px',
      },
      icon: {
        path: 'M22-48h-44v43h16l6 5 6-5h16z',
        fillColor: 'white',
        fillOpacity: 1,
        labelOrigin: new google.maps.Point(-2, -25),
        strokeColor: 'gray',
      },
    });
    marker.addListener('click', (event) => {
      this.handleClick(marker.spotId);
    });
  }


  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.marks[marker.spotId];
  }
}