"use client";

import Image from "next/image";

const popularRestaurants = [
    {
        name: "Zen Garden Bowls",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRyGUVmiZY5ReI-NrsVuh3G_QL0mcKnBOw9fFxhc3saNf0SjUn21670WF6p6b9DLgoDkuw9Z1-rIorLNqRt5DbXrwgW-hNGrrRMBZ3ZGhxn4rVpSWR1pzWyUMjwFOz3m1xXCrK6sqreLFy90Jvy7LRlxjc8jwp8_ml-fnuXQ4yDVDJBVcV8CyZ6G6vQwoDCNcR2NwITl4BSsf0AUAH4vwYRDZSFnM_gvhu_K1sD7ik8Ae74oXSjuYTzHkwm0v0-zI3AJM9ssOS0kE",
        rating: 4.6,
        reviews: "1.2k+",
        cuisine: "Healthy • Bowls • 0.8 mi",
        showFavorite: true,
    },
    {
        name: "Prime Burger Lab",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALgPRLoG64GrIDX80rFbk6bl7_nBTGlhex5UcNBRxWa2olosEsQyO1T2wi3eA7EE_L3Api5hjYQRvocCVSC9ZCLKW2KDYCafv46OVoCilkZLwwk3J7Jf4Nq6_ufJe-F-f35j0idifGDBeJmxN0n5csB-8pODPo3LiPC8rjxkPynjKPEqoH09LimVZHionlHoZz-BrtdB47aGcvH4A0h6UCw_XK4FLaP8CrxCi97yY5qdTp3aUe076Eh-RwdBEj2RundJaoEQg-YwE",
        rating: 4.5,
        reviews: "800+",
        cuisine: "American • Burgers • 1.2 mi",
        showFavorite: false,
    },
    {
        name: "Flame & Skewers",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy8kjaSYBKLqKb6UO72z-qAXPTnjar_j6XHLcW2CME7c9c-CkifNHBjBCrasbH78tin1HMvaZb0IDrB5udU74RF-WLiefPUKZ6u7Ng8AduOXtbm5s3XiuExM4AOOF3PVFzCp4WktgGLxzFNYUPEoPpgGCeYZ_I9PHcKpreP3FT2fLPXczpMRQcftdcR9_m06RvL1anPwOtOPu9WXVpkfjOyvjca8I9MnVitk3GbpBrixkqnuW2NCfT59fcZ8c1dHty7v-jFGgU3vw",
        rating: 4.8,
        reviews: "450+",
        cuisine: "Turkish • Grill • 1.5 mi",
        showFavorite: false,
    },
    {
        name: "Morning Glaze",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiWhgAvcoS5mW5kvM4yV9IW8I_w7Cxf5Q7Zf_8V9lu34Eq5jX_FdNpQm4xju9-Bp6jBf5EYwVG9enfi6TvGNg1cU8UrH0PPpqkpJdvSfyyemg-nGnZJg_EpyKYF_F6odmVNBaceSjUOS2L9dvhi9VQM7_pSODsmcVdG0p-QhGAnCKRNTD8guBmD6osCg0y96pK3El8yQSfApmKb0zjHCWIIBJyynsqOw2DEx45FzbcLh0wyY6pKrDnW5NRrafsSzrINki4hbeTWa4",
        rating: 4.9,
        reviews: "2.4k+",
        cuisine: "Bakery • Desserts • 0.3 mi",
        showFavorite: false,
    },
];

export default function PopularNearYou() {
    return (
        <section className="px-6 md:px-20 py-8 bg-white/40 dark:bg-background-dark/40 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Popular Near You</h2>
                    <p className="text-text-muted dark:text-text-muted-dark text-sm mt-1">
                        Highly rated neighborhood favorites in San Francisco
                    </p>
                </div>
                <button className="mt-4 md:mt-0 flex items-center gap-2 bg-background-light dark:bg-border-dark px-4 py-2 rounded-lg font-bold text-sm">
                    <span className="material-symbols-outlined text-lg">filter_list</span> Filters
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularRestaurants.map((restaurant, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                            <Image
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src={restaurant.image}
                                alt={restaurant.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                            {restaurant.showFavorite && (
                                <button className="absolute top-2 right-2 p-1.5 text-white hover:text-red-500 transition-colors drop-shadow-md">
                                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>favorite</span>
                                </button>
                            )}
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                                {restaurant.name}
                            </h4>
                            <div className="flex items-center gap-1 text-sm text-text-muted dark:text-text-muted-dark">
                                <span className="material-symbols-outlined text-primary text-sm">star</span>
                                <span className="font-semibold text-text-primary dark:text-white">
                                    {restaurant.rating}
                                </span>
                                ({restaurant.reviews} reviews)
                            </div>
                            <p className="text-sm text-text-muted dark:text-text-muted-dark">{restaurant.cuisine}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <button className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all font-bold px-10 py-3 rounded-xl border border-primary">
                    Show More Experiences
                </button>
            </div>
        </section>
    );
}
