"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the entire map content to avoid SSR and initialization issues
const MapViewContent = dynamic(
    () => import("./MapViewContent"),
    {
        ssr: false,
        loading: () => (
            <div className="flex items-center justify-center h-full flex-col gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="text-gray-500">Initializing map...</p>
            </div>
        )
    }
);

export default function MapView({ restaurants }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <section className="flex-1 relative bg-gray-100 dark:bg-background-dark/50 hidden lg:block">
                <div className="flex items-center justify-center h-full flex-col gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    <p className="text-gray-500">Loading map environment...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="flex-1 relative bg-gray-100 dark:bg-background-dark/50 hidden lg:block overflow-hidden" id="map-section">
            <MapViewContent restaurants={restaurants} />
        </section>
    );
}
