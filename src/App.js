import React, { useState, useEffect } from 'react';

function App() {
  const [NMEA, setNMEA] = useState(null);

  function showPosition(position) {
    const NMEA = position.coords.altitudeAccuracy;
    setNMEA(NMEA);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {NMEA !== null ? (
        <p>NMEA: {NMEA}</p>
      ) : (
        <p>Retrieving geolocation data...</p>
      )}
    </div>
  );
}

export default App;


