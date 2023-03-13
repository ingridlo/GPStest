import React, { useState, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showLocation);
    } else {
      alert('El navegador no dispone la capacidad de geolocalización');
    }
  }, []);

  function showLocation(position) {
    setPosition(position.coords.accuracy);
    //console.log(`Actualización de posición recibida: lat=${lat}, lon=${lon}, altitude=${altitude}`);
    //const timestamp = new Date(position.timestamp).toISOString().replace(/\..+/, '');
    //const nmea = `$GPGGA,${timestamp},${lat.toFixed(4)},N,${lon.toFixed(4)},W,1,08,1.0,${altitude.toFixed(1)},M,,-33.7,M,,`;
    //gps.update(nmea);
  }

  return (
    <div>
      {position ? (
        <p>Precision: {position}</p>
      ) : (
        <p>Retrieving geolocation data...</p>
      )}
    </div>
  );
}

export default App;


