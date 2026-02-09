"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Backup import if CDN fails
import L from "leaflet";

// Fix for default marker icons in Leaflet with Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

import { useEffect } from "react";

function MapControls() {
    const map = useMap();

    useEffect(() => {
        const onLocationFound = (e) => {
            console.log("Location found:", e.latlng);
            // Optionally add a temporary marker for the user's location
        };

        const onLocationError = (e) => {
            console.error("Location error:", e.message);
            let msg = "Could not find your location.";
            if (e.message.includes("denied")) {
                msg = "Location access denied. Please enable location permissions in your browser.";
            } else if (e.message.includes("timeout")) {
                msg = "Location request timed out. Please try again.";
            }
            alert(msg);
        };

        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);

        return () => {
            map.off('locationfound', onLocationFound);
            map.off('locationerror', onLocationError);
        };
    }, [map]);

    const handleLocate = () => {
        map.locate({ setView: true, maxZoom: 16 });
    };

    return (
        <div className="absolute bottom-8 right-8 flex flex-col gap-2 z-[1000]">
            <button
                onClick={handleLocate}
                title="Your Location"
                className="size-12 bg-white dark:bg-background-dark rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 dark:border-white/10"
            >
                <span className="material-symbols-outlined">my_location</span>
            </button>
            <div className="flex flex-col bg-white dark:bg-background-dark rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-white/10">
                <button
                    onClick={() => map.zoomIn()}
                    title="Zoom In"
                    className="size-12 flex items-center justify-center hover:bg-gray-50 border-b border-gray-100 dark:border-white/10"
                >
                    <span className="material-symbols-outlined">add</span>
                </button>
                <button
                    onClick={() => map.zoomOut()}
                    title="Zoom Out"
                    className="size-12 flex items-center justify-center hover:bg-gray-50"
                >
                    <span className="material-symbols-outlined">remove</span>
                </button>
            </div>
        </div>
    );
}

export default function MapViewContent({ restaurants = [] }) {
    const restaurantList = Array.isArray(restaurants) ? restaurants : [];

    const handleViewDetails = (restaurant) => {
        console.log("Viewing details for:", restaurant.name);
        // TODO: Navigate to restaurant detail page or open modal
    };

    return (
        <div className="h-full w-full relative">
            <MapContainer
                center={[0.3136, 32.5811]} // Kampala, Uganda
                zoom={14}
                style={{ height: "100%", width: "100%" }}
                className="z-0"
                zoomControl={false} // Disable default zoom control to use custom one
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {restaurantList
                    .filter(r => Array.isArray(r.position) && r.position.length === 2)
                    .map((restaurant) => (
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
                                    <button
                                        onClick={() => handleViewDetails(restaurant)}
                                        className="mt-2 w-full bg-[#f27f0d] text-white text-xs font-bold py-1.5 px-3 rounded-lg hover:bg-orange-600 transition-colors"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                <MapControls />
            </MapContainer>
        </div>
    );
}
