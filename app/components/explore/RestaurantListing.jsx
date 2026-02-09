"use client";

import Image from "next/image";

export default function RestaurantListing({ restaurants = [] }) {
    const restaurantList = Array.isArray(restaurants) ? restaurants : [];

    return (
        <aside className="w-full lg:w-[60%] flex-shrink-0 bg-white dark:bg-background-dark flex flex-col border-r border-[#f5f2f0] dark:border-white/10">
            {/* Results Header */}
            <div className="p-4 pb-2 border-b border-[#f5f2f0] dark:border-white/10">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {restaurantList.length} restaurants found
                    </p>
                    <div className="flex items-center gap-1 text-sm font-bold text-primary cursor-pointer">
                        Sort: Recommended
                        <span className="material-symbols-outlined text-lg">unfold_more</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                {restaurantList.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {restaurantList.map((restaurant) => (
                            <div
                                key={restaurant.id}
                                className="group relative bg-white dark:bg-white/5 rounded-xl border border-[#f5f2f0] dark:border-white/10 overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                            >
                                <div className="relative h-48 w-full bg-gray-100 dark:bg-white/5">
                                    {restaurant.image ? (
                                        <Image
                                            src={restaurant.image}
                                            alt={restaurant.name}
                                            fill
                                            className="object-cover"
                                            sizes="450px"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-4xl text-gray-300">restaurant</span>
                                        </div>
                                    )}
                                    <button className="absolute top-3 right-3 p-2 text-white hover:text-red-500 transition-colors drop-shadow-md">
                                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>favorite</span>
                                    </button>
                                    {restaurant.featured && (
                                        <div className="absolute bottom-3 left-3 px-2 py-1 bg-white/90 backdrop-blur rounded text-xs font-bold text-primary">
                                            FEATURED
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                                            {restaurant.name}
                                        </h3>
                                        <div className="flex items-center gap-1 bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs font-bold">
                                            <span className="material-symbols-outlined text-sm">star</span>
                                            {restaurant.rating}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        {restaurant.cuisine} • {restaurant.price}
                                    </p>
                                    <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 flex-wrap">
                                        {(restaurant.tags ?? []).map((tag, index) => (
                                            <span key={index} className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm">{tag.icon}</span>
                                                {tag.label}
                                            </span>
                                        ))}
                                        {restaurant.urgentMessage && (
                                            <span className="flex items-center gap-1 text-primary font-bold">
                                                {restaurant.urgentMessage}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500 py-20">
                        <span className="material-symbols-outlined text-6xl mb-4 opacity-20">search_off</span>
                        <p className="font-bold text-lg">No restaurants match your search</p>
                        <p className="text-sm">Try adjusting your filters or search terms</p>
                    </div>
                )}
            </div>
        </aside>
    );
}
