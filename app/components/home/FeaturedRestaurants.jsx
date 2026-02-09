"use client";

import Image from "next/image";
import Link from "next/link";

const featuredRestaurants = [
    {
        name: "The Golden Grill",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXbNlH9CQbROg3UjrrppCqbj6vRGKJhrPInygAvHvTr2qkMexlR5TGTsqF3ezWFqS0eaW31vispzyLeDErblCIQnGd3ORPnPHnNiI7TZxBIv4akWqnDY36vFb7es-PzrN5XH36fRC8ezEKyexnoz_irpnU7YfEehpVdfFvdaZ0y10cfCZmMZK0nZ253EeZroHb_8OlDCvq8xv-u9AJKmC269RJUX804wzeos8iQJ72XDbjmzZbCuJqD3a_3Yr2ndutbP37LR3QJgs",
        rating: 4.9,
        badge: "Top Rated",
        cuisine: "Fine Dining • Contemporary American • $$$",
        time: "15-25 min",
    },
    {
        name: "Ocean Blue",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6PSxI4azub0WZrVSxlxXWKN8Si1u15D2uZXNKdpyFFqxdjAHZUjoV5h3spPnri9VmAmXOIf2sfFGrALgnT3DStapTvadHvmW520rHfEpnwgDqsZvCtRj3E06sKUSIA1y3UoKk_iYJHyqgozrVb4PDFmT9gordGSIZ4Lw9aNfMrFYeJgAsScTKYnsWz29GqU8W-KhPnHUSkogBNtwFbuHCmZFG9aafIjzGf-MOYhJ6_lD9PG4v5AvGaOthppgAcQ1OxUvYrglQdLY",
        rating: 4.7,
        badge: "Chef's Pick",
        cuisine: "Seafood • Mediterranean • $$$$",
        time: "20-35 min",
    },
    {
        name: "Rustic Crust",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL82-g4mLSKp_g_YJSs8ieuWFubbYg4eEp3l1cJ6OhGDanrhlAS5yzvYzkVP1BJ4CDR_wOkgzsCYHteRPLjFnt_GjLrDr5jKSxQHd1V0JZPgrWGeuqUH75vvcn5n4e832qif6LL8_f1SyeQt8djAMHgxWJ4V1lNUQuqSy62cSuORy8gM7FAmepa2Ad3-94Y1aWxnZttLmSnsIJbvfrLwy5MajCLghaHN07MhtTxeqbMdFMo3x_lziqxYIBNuLOdKrA3esI2AX0HiU",
        rating: 4.8,
        badge: "Popular",
        cuisine: "Italian • Pizzeria • $$",
        time: "10-20 min",
    },
];

export default function FeaturedRestaurants() {
    return (
        <section className="px-6 md:px-20 py-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Featured Restaurants</h2>
                <Link className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
                    View All <span className="material-symbols-outlined">chevron_right</span>
                </Link>
            </div>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-6">
                {featuredRestaurants.map((restaurant, index) => (
                    <div
                        key={index}
                        className="min-w-[320px] md:min-w-[400px] bg-white dark:bg-card-dark rounded-xl shadow-lg overflow-hidden group border border-transparent hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="relative h-56 w-full overflow-hidden">
                            <Image
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                src={restaurant.image}
                                alt={restaurant.name}
                                fill
                                sizes="(max-width: 768px) 320px, 400px"
                            />
                            <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {restaurant.badge}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold">{restaurant.name}</h3>
                                <div className="flex items-center text-primary">
                                    <span className="material-symbols-outlined text-lg">star</span>
                                    <span className="ml-1 font-bold">{restaurant.rating}</span>
                                </div>
                            </div>
                            <p className="text-text-muted dark:text-text-muted-dark text-sm mb-4">
                                {restaurant.cuisine}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-text-muted dark:text-text-muted-dark flex items-center">
                                    <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                                    {restaurant.time}
                                </span>
                                <button className="bg-background-light dark:bg-border-dark font-bold text-sm px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
