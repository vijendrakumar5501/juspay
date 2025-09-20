import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
// });

const locations = [
  { name: "New York", coordinates: [40.7128, -74.006], revenue: 72000 },
  { name: "San Francisco", coordinates: [37.7749, -122.4194], revenue: 39000 },
  { name: "Sydney", coordinates: [-33.8688, 151.2093], revenue: 25000 },
  { name: "Singapore", coordinates: [1.3521, 103.8198], revenue: 61000 },
];

const Location = () => {
  return (
    <div
      style={{
        minWidth: 250,
        padding: 15,
        borderRadius: 10,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        background: "#fff",
      }}
    >
      <h3 style={{ marginBottom: 20 }}>Revenue by Location</h3>

      {/* Map */}
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: 200, width: "100%", borderRadius: 12 }}
         attributionControl={false} 
           zoomControl={false}  
      >
        <TileLayer

  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
  // attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
  subdomains={["a", "b", "c", "d"]}
/>

        {locations.map((loc) => (
          <Marker key={loc.name} position={loc.coordinates}>
            <Popup>
              {loc.name}: ${(loc.revenue / 1000).toFixed(0)}K
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Revenue Bars */}
      <div style={{ marginTop: 20 }}>
        {locations.map((loc) => (
          <div key={loc.name} style={{ marginBottom: 12 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
                marginBottom: 4,
              }}
            >
              <span>{loc.name}</span>
              <span>{(loc.revenue / 1000).toFixed(0)}K</span>
            </div>
            <div
              style={{
                height: 6,
                background: "#E0E0E0",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(loc.revenue / 72000) * 100}%`,
                  height: "100%",
                  background: "#3b82f6",
                  borderRadius: 3,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
