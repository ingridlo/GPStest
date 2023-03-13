import React, { useState, useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';

function App() {
  const [satelliteCount, setSatelliteCount] = useState(null);

  useEffect(() => {
    // Pide permiso para acceder a la ubicación del usuario
    Geolocation.requestAuthorization('whenInUse').then((granted) => {
      if (granted) {
        // Obtiene la ubicación del usuario
        Geolocation.getCurrentPosition(
          (position) => {
            // Obtiene información sobre los satélites GPS visibles
            Geolocation.getGpsStatus((status) => {
              const count = status && status.satellites && status.satellites.length;
              setSatelliteCount(count);
            });
          },
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      } else {
        console.log('Location permission not granted');
      }
    });
  }, []);

  return (
    <div>
      <p>Number of GPS satellites: {satelliteCount}</p>
    </div>
  );
}

export default App;


