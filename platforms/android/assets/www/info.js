src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"

var map = L.map('map');
map.locate({setView: true, maxZoom: 16});
mapLink = 
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; ' + mapLink + ' Contributors',
   maxZoom: 18,
}).addTo(map);
			
			
function onLocationFound(e) {
var radius = e.accuracy / 2;
L.marker(e.latlng).addTo(map)
.bindPopup("You are within " + radius + " meters from this point").openPopup();
L.circle(e.latlng, radius).addTo(map);
}
map.on('locationfound', onLocationFound);