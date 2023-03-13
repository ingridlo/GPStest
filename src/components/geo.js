import React, { useState, useEffect } from 'react';

function GeoLocation() {
  const [coords, setCoords] = useState({ latitude: null, longitude: null,satellites:null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          satellites: position.coords.satellites
        });
      },
      error => console.log(error)
    );
  }, []);

  return (
    <div>
      <h2>Tu ubicación actual:</h2>
      <p>Latitud: {coords.latitude}</p>
      <p>Longitud: {coords.longitude}</p>
      <p>Número de satélites: {coords.satellites}</p>
    </div>
  );
}

export default GeoLocation;
