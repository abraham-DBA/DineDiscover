"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Backup import if CDN fails
import L from "leaflet";

// Fix for default marker icons in Leaflet with Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapViewContent({ restaurants }) {
    return (
        <MapContainer
            center={[0.3136, 32.5811]} // Kampala, Uganda
            zoom={14}
            style={{ height: "100%", width: "100%" }}
            className="z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {restaurants.map((restaurant) => (
                <Marker key={restaurant.id} position={restaurant.position}>
                    <Popup>
                        <div className="min-w-[180px]">
                            <h3 className="font-bold text-sm text-black">{restaurant.name}</h3>
                            <p className="text-xs text-gray-500 mt-1">
                                {restaurant.cuisine} • {restaurant.rating}★
                            </p>
                            <p className="text-xs font-bold text-[#f27f0d] mt-1">
                                {restaurant.price}
                            </p>
                            <button className="mt-2 w-full bg-[#f27f0d] text-white text-xs font-bold py-1.5 px-3 rounded-lg hover:bg-orange-600 transition-colors">
                                View Details
                            </button>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
