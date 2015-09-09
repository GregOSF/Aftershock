L.mapbox.accessToken = 'pk.eyJ1IjoiZ3JlZ29zZiIsImEiOiIxMDRkNWRjNzQ0ODkzNzE2ZTE2YzQ3OGIxMzFjNzZmMCJ9.OA1rNWlN2qWZT03zyD0zGQ';

var geocoder = L.mapbox.geocoder('mapbox.places'),
    map = L.mapbox.map('map', 'examples.map-h67hf2ic');
    // map.dragging.disable();
      // map.touchZoom.disable();
      // map.doubleClickZoom.disable();
      // map.scrollWheelZoom.disable();
      // // Disable tap handler, if present.
      // if (map.tap) map.tap.disable();

geocoder.query('San Francisco, CA', showMap);

function showMap(err, data) {
    // The geocoder can return an area, like a city, or a
    // point, like an address. Here we handle both cases,
    // by fitting the map bounds to an area or zooming to a point.
    if (data.lbounds) {
        map.fitBounds(data.lbounds);
    } else if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 13);
    }
}

var geolocate, myLayer;

// L.mapbox.accessToken = 'pk.eyJ1IjoiZ3JlZ29zZiIsImEiOiIxMDRkNWRjNzQ0ODkzNzE2ZTE2YzQ3OGIxMzFjNzZmMCJ9.OA1rNWlN2qWZT03zyD0zGQ';

geolocate = document.getElementById('geolocate');

// map = L.mapbox.map('map', 'mapbox.streets');

myLayer = L.mapbox.featureLayer().addTo(map);

if (!navigator.geolocation) {
  geolocate.innerHTML = 'Geolocation is not available';
} else {
  geolocate.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    map.locate();
  };
}

map.on('locationfound', function(e) {
  map.fitBounds(e.bounds);
  myLayer.setGeoJSON({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [e.latlng.lng, e.latlng.lat]
    },
    properties: {
      'title': 'Here I am!',
      'marker-color': '#ff8888',
      'marker-symbol': 'star'
    }
  });
  geolocate.parentNode.removeChild(geolocate);
  map.attributionControl
      .addAttribution('<a href="https://foursquare.com/">Places data from Foursquare</a>');

  // Create a Foursquare developer account: https://developer.foursquare.com/
  // NOTE: CHANGE THESE VALUES TO YOUR OWN:
  // Otherwise they can be cycled or deactivated with zero notice.
  var CLIENT_ID = 'NEM4CDKQREBCMI1IQM1GQJI0Q2SEEDPWUVSZPRM4PDYNB0FJ';
  var CLIENT_SECRET = '3UBMFHJOGTRC3LNDRIHOU5ZMJKK0YLVRNLYTIBIVTTI4MCT0';

  // FOURSQUARE_ID: 
  // FOURSQUARE_SECRET: 
  var myLatLong = [e.latlng.lng, e.latlng.lat];
  // https://developer.foursquare.com/start/search
  var API_ENDPOINT = 'https://api.foursquare.com/v2/venues/search' +
    '?client_id=CLIENT_ID' +
    '&client_secret=CLIENT_SECRET' +
    '&v=20130815' +
    '&ll=LATLON' +
    // '&query=emergency' +
    '&categoryId=4bf58dd8d48988d104941735' +
    '&callback=?';
    
    console.log(myLatLong);
  // Keep our place markers organized in a nice group.
  var foursquarePlaces = L.layerGroup().addTo(map);

  // Use jQuery to make an AJAX request to Foursquare to load markers data.
  $.getJSON(API_ENDPOINT
      .replace('CLIENT_ID', CLIENT_ID)
      .replace('CLIENT_SECRET', CLIENT_SECRET)
      .replace('LATLON', map.getCenter().lat +
          ',' + map.getCenter().lng), function(result, status) {

      if (status !== 'success') return alert('Request to Foursquare failed');

      // Transform each venue result into a marker on the map.
      for (var i = 0; i < result.response.venues.length; i++) {
        var venue = result.response.venues[i];
        var latlng = L.latLng(venue.location.lat, venue.location.lng);
        var marker = L.marker(latlng, {
            icon: L.mapbox.marker.icon({
              'marker-color': '#ff0033',
              'marker-symbol': 'hospital',
              'marker-size': 'large'
            })
          })
        .bindPopup('<strong><a href="https://foursquare.com/v/' + venue.id + '">' +
          venue.name + '</a></strong>')
          .addTo(foursquarePlaces);
      }

  });


});

map.on('locationerror', function() {
  geolocate.innerHTML = 'Position could not be found';
});

var layers = {
      Streets: L.mapbox.tileLayer('mapbox.streets'),
      Outdoors: L.mapbox.tileLayer('mapbox.outdoors'),
      Satellite: L.mapbox.tileLayer('mapbox.satellite')
  };

  layers.Satellite.addTo(map);
  L.control.layers(layers).addTo(map);


// FOURSQUARE

// L.mapbox.accessToken = 'pk.eyJ1IjoiZ3JlZ29zZiIsImEiOiIxMDRkNWRjNzQ0ODkzNzE2ZTE2YzQ3OGIxMzFjNzZmMCJ9.OA1rNWlN2qWZT03zyD0zGQ';
// var map = L.mapbox.map('map', 'mapbox.emerald')
//     .setView([40, -74.50], 10);

// // Credit Foursquare for their wonderful data
// map.attributionControl
//     .addAttribution('<a href="https://foursquare.com/">Places data from Foursquare</a>');

// // Create a Foursquare developer account: https://developer.foursquare.com/
// // NOTE: CHANGE THESE VALUES TO YOUR OWN:
// // Otherwise they can be cycled or deactivated with zero notice.
// var CLIENT_ID = '';
// var CLIENT_SECRET = '';

// // FOURSQUARE_ID: 
// // FOURSQUARE_SECRET: 

// // https://developer.foursquare.com/start/search
// var API_ENDPOINT = 'https://api.foursquare.com/v2/venues/search' +
//   '?client_id=CLIENT_ID' +
//   '&client_secret=CLIENT_SECRET' +
//   '&v=20130815' +
//   '&ll=LATLON' +
//   '&query=' +
//   '&callback=?';

// // Keep our place markers organized in a nice group.
// var foursquarePlaces = L.layerGroup().addTo(map);

// // Use jQuery to make an AJAX request to Foursquare to load markers data.
// $.getJSON(API_ENDPOINT
//     .replace('CLIENT_ID', CLIENT_ID)
//     .replace('CLIENT_SECRET', CLIENT_SECRET)
//     .replace('LATLON', map.getCenter().lat +
//         ',' + map.getCenter().lng), function(result, status) {

//     if (status !== 'success') return alert('Request to Foursquare failed');

//     // Transform each venue result into a marker on the map.
//     for (var i = 0; i < result.response.venues.length; i++) {
//       var venue = result.response.venues[i];
//       var latlng = L.latLng(venue.location.lat, venue.location.lng);
//       var marker = L.marker(latlng, {
//           icon: L.mapbox.marker.icon({
//             'marker-color': '#BE9A6B',
//             'marker-symbol': 'cafe',
//             'marker-size': 'large'
//           })
//         })
//       .bindPopup('<strong><a href="https://foursquare.com/v/' + venue.id + '">' +
//         venue.name + '</a></strong>')
//         .addTo(foursquarePlaces);
//     }

// });

