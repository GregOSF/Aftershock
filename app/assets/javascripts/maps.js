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



