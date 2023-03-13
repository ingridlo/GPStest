import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import GeoLocation from './components/geo';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeoLocation />
  </React.StrictMode>
);
