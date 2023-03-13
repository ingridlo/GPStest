import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';



// import GPS from 'gps';


// var gps = new GPS ();

// var sentence = '$GPGGA,224900.000,4832.3762,N,00903.5393,E,1,04,7.8,498.6,M,48.0,M,,0000*5E';

// gps.on('data', function(parsed) {

//   console.log(parsed);
// });

// gps.update(sentence);


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



