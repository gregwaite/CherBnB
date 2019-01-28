export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.marker = {};
  }

  updateMarkers(spots) {
    spots.forEach(spot => 
      this.marker[spot.id] = spot
    );
  }
}