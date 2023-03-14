import React, { useState, useEffect } from 'react';

function App() {
  const [accuracy, setAccuracy] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showLocation);
    } else {
      alert('El navegador no dispone la capacidad de geolocalización');
    }
  }, []);

  function showLocation(position) {
    setAccuracy(position.coords.accuracy);
  }

  return (
    <div>
      {accuracy && <p>Precision: {accuracy.toFixed(2)}</p>}
    </div>
  );
}

export default App;


