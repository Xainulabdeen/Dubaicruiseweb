import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Find Us Here</h2>
      <MapContainer
        center={[25.276987, 55.296249]} // Example coordinates for Dubai
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.276987, 55.296249]}>
          <Popup>
            Dubai <br /> We are here.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
