import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


// const SatellitesAbove = require('satellites-above');
 
// let satellites = new SatellitesAbove();
// satellites
// .load({download: true})
// .then(() => {
//     let sats = satellites.above(52.520645, 13.409779);
//     console.log(sats);
// });


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
// import GPS from 'gps';

// const gps = new GPS();

// gps.on('data', parsed => {
//   console.log("Recibí un evento 'data' del objeto GPS:");
//   console.log(parsed);
// });


// if (navigator.geolocation) {
//   navigator.geolocation.watchPosition(showLocation);
// } else {
//   alert('El navegador no dispone la capacidad de geolocalización');
// }

// function showLocation(position) {
//   console.log("estoy aqui")
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   const altitude = position.coords.altitude || 0;
//   console.log(`Actualización de posición recibida: lat=${lat}, lon=${lon}, altitude=${altitude}`);
//   const timestamp = new Date(position.timestamp).toISOString().replace(/\..+/, '');
//   const nmea = `$GPGGA,${timestamp},${lat.toFixed(4)},N,${lon.toFixed(4)},W,1,08,1.0,${altitude.toFixed(1)},M,,-33.7,M,,`;
//   gps.update(nmea);
// }
