import React, { useEffect, useState } from "react";
import GPS from "gps";

const App = () => {
  const [gpsData, setGpsData] = useState(null);
  const [gps, setGps] = useState(null);

  useEffect(() => {
    const gps = new GPS();
    setGps(gps);

    gps.on("data", (parsed) => {
      setGpsData(parsed);
    });

    return () => {
      gps.removeAllListeners();
    };
  }, []);

  return (
    <div>
      {gpsData && (
        <div>
          Latitude: {gpsData.lat} <br />
          Longitude: {gpsData.lon} <br />
          Altitude: {gpsData.alt} <br />
          Speed: {gpsData.speed} <br />
          Course: {gpsData.course} <br />
          Time: {gpsData.time} <br />
        </div>
      )}
    </div>
  );
};

export default App;
