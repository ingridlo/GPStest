import GPS from 'gps';

const gps = new GPS;

// ...

gps.on('data', (data) => {
  console.log(data);
  console.log(data.satellitesInView.length); // Número de satélites
});

navigator.geolocation.watchPosition(
  (position) => {
    gps.updatePosition(position.coords.latitude, position.coords.longitude);
  },
  (error) => {
    console.log(error);
  },
  { enableHighAccuracy: true }
);

export default gps