"use client";

import { useState, useMemo } from "react";
import Header from "../components/Header";
import FilterBar from "../components/explore/FilterBar";
import RestaurantListing from "../components/explore/RestaurantListing";
import MapView from "../components/explore/MapView";
import { restaurants } from "./data";

export default function ExplorePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        cuisine: "All",
        priceRange: "All",
        minRating: 0,
        openNow: false,
        location: "All",
    });

    const filteredRestaurants = useMemo(() => {
        return restaurants.filter((restaurant) => {
            const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCuisine = filters.cuisine === "All" || restaurant.cuisine.includes(filters.cuisine);

            const matchesLocation = filters.location === "All" || restaurant.location.includes(filters.location);

            // Mapping UGX ranges to priceLevels
            const matchesPrice = filters.priceRange === "All" ||
                (filters.priceRange === "low" && restaurant.priceLevel === 1) ||
                (filters.priceRange === "mid" && restaurant.priceLevel === 2) ||
                (filters.priceRange === "high" && restaurant.priceLevel === 3) ||
                (filters.priceRange === "ultra" && restaurant.priceLevel === 4);

            const matchesRating = restaurant.rating >= filters.minRating;

            const matchesOpen = !filters.openNow || restaurant.openNow;

            return matchesSearch && matchesCuisine && matchesLocation && matchesPrice && matchesRating && matchesOpen;
        });
    }, [searchQuery, filters]);

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Header />
            <div className="pt-[72px] flex-shrink-0">
                <FilterBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    filters={filters}
                    setFilters={setFilters}
                />
            </div>
            <main className="flex flex-1 min-h-0">
                <RestaurantListing restaurants={filteredRestaurants} />
                <MapView restaurants={filteredRestaurants} />
            </main>
        </div>
    );
}
