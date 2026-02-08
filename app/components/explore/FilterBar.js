"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function FilterBar({ searchQuery, setSearchQuery, filters, setFilters }) {

    const setCuisine = (value) => {
        setFilters(prev => ({
            ...prev,
            cuisine: value
        }));
    };

    const cuisines = [
        { label: "All Cuisines", value: "All" },
        { label: "Ugandan", value: "Ugandan" },
        { label: "Indian", value: "Indian" },
        { label: "Chinese", value: "Chinese" },
        { label: "Italian", value: "Italian" },
        { label: "Japanese", value: "Japanese" },
        { label: "International", value: "International" },
        { label: "Continental", value: "Continental" },
        { label: "Mediterranean", value: "Mediterranean" }
    ];

    const setPrice = (value) => {
        setFilters(prev => ({
            ...prev,
            priceRange: value
        }));
    };

    const setLocation = (value) => {
        setFilters(prev => ({
            ...prev,
            location: value
        }));
    };

    const toggleOpenNow = () => {
        setFilters(prev => ({
            ...prev,
            openNow: !prev.openNow
        }));
    };

    const setRating = (value) => {
        setFilters(prev => ({
            ...prev,
            minRating: parseFloat(value)
        }));
    };

    const priceRanges = [
        { label: "Any Price", value: "All" },
        { label: "Budget (< 40k)", value: "low" },
        { label: "Moderate (40k-80k)", value: "mid" },
        { label: "Premium (80k-120k)", value: "high" },
        { label: "Luxury (120k+)", value: "ultra" }
    ];

    const locations = [
        { label: "All Areas", value: "All" },
        { label: "Kololo", value: "Kololo" },
        { label: "Nakasero", value: "Nakasero" },
        { label: "Bugolobi", value: "Bugolobi" },
        { label: "Muyenga", value: "Muyenga" },
        { label: "Ntinda", value: "Ntinda" },
        { label: "Bakuli", value: "Bakuli" },
        { label: "Kampala Road", value: "Kampala Road" }
    ];

    const minRatings = [
        { label: "Any Rating", value: "0" },
        { label: "4.5+ Stars", value: "4.5" },
        { label: "4.0+ Stars", value: "4.0" },
        { label: "3.5+ Stars", value: "3.5" },
        { label: "3.0+ Stars", value: "3.0" }
    ];

    return (
        <section className="bg-white dark:bg-background-dark border-b border-[#f5f2f0] dark:border-white/10 px-6 py-3 shadow-sm relative z-40">
            <div className="max-w-[1440px] mx-auto flex items-center gap-3">
                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                        search
                    </span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search restaurants, cuisines..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#f5f2f0] dark:border-white/10 bg-[#f5f2f0]/50 dark:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                </div>

                {/* Location Select (Shadcn) */}
                <Select value={filters.location} onValueChange={setLocation}>
                    <SelectTrigger className="w-[180px] bg-[#f5f2f0] dark:bg-white/5 border-none font-medium h-10">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                            <SelectValue placeholder="Location" />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        {locations.map((loc) => (
                            <SelectItem key={loc.value} value={loc.value}>
                                {loc.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <div className="h-6 w-px bg-gray-200 dark:bg-white/10 shrink-0"></div>

                {/* Filters */}
                <div className="flex items-center gap-2 overflow-x-auto">
                    {/* Cuisine Select (Shadcn) */}
                    <Select value={filters.cuisine} onValueChange={setCuisine}>
                        <SelectTrigger className={`w-[180px] border-none font-medium h-10 transition-colors ${filters.cuisine !== "All" ? "bg-primary text-white" : "bg-[#f5f2f0] dark:bg-white/5"}`}>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-base">restaurant_menu</span>
                                <SelectValue placeholder="Cuisine" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            {cuisines.map((cuisine) => (
                                <SelectItem key={cuisine.value} value={cuisine.value}>
                                    {cuisine.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Price Select (Shadcn) */}
                    <Select value={filters.priceRange} onValueChange={setPrice}>
                        <SelectTrigger className={`w-[180px] border-none font-medium h-10 transition-colors ${filters.priceRange !== "All" ? "bg-primary text-white" : "bg-[#f5f2f0] dark:bg-white/5"}`}>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-base">attach_money</span>
                                <SelectValue placeholder="Price Range" />
                            </div>
                        </SelectTrigger>
                        <SelectContent padding="none">
                            {priceRanges.map((range) => (
                                <SelectItem key={range.value} value={range.value}>
                                    {range.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Rating Select (Shadcn) */}
                    <Select value={filters.minRating.toString()} onValueChange={setRating}>
                        <SelectTrigger className={`w-[140px] border-none font-medium h-10 transition-colors ${filters.minRating > 0 ? "bg-primary text-white" : "bg-[#f5f2f0] dark:bg-white/5"}`}>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-base">star</span>
                                <SelectValue placeholder="Rating" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            {minRatings.map((rating) => (
                                <SelectItem key={rating.value} value={rating.value}>
                                    {rating.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <button
                        onClick={toggleOpenNow}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors shrink-0 ${filters.openNow ? "bg-primary text-white" : "bg-[#f5f2f0] dark:bg-white/5 hover:bg-[#eae7e5]"
                            }`}
                    >
                        <span className="material-symbols-outlined text-base">schedule</span>
                        Open Now
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-bold border border-primary/20 shrink-0">
                        <span className="material-symbols-outlined text-base">tune</span>
                        More
                    </button>
                </div>
            </div>
        </section>
    );
}
