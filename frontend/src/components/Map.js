import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer center={[0, 0]} zoom={3} style={{ height: '100%', width: '100%' }}>
        <TileLayer 
          url={`https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=ac4a00a310msh34a0fbb54b26482p16c4b1jsn47d8392c3c06`} 
          attribution='&copy; <a href="http://www.maptilesapi.com/">MapTiles API</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={19}
        />
      </MapContainer>
    </div>
  );
}

export default Map;