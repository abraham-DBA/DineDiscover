"use client";

const cuisines = [
    { icon: "local_fire_department", label: "All Cuisines", active: true },
    { icon: "fastfood", label: "Fast Food", active: false },
    { icon: "wine_bar", label: "Fine Dining", active: false },
    { icon: "eco", label: "Vegan", active: false },
    { icon: "dinner_dining", label: "Italian", active: false },
    { icon: "set_meal", label: "Sushi", active: false },
    { icon: "coffee", label: "Cafe", active: false },
    { icon: "bakery_dining", label: "Bakery", active: false },
];

export default function CuisineFilters() {
    return (
        <section className="px-6 md:px-20 py-4">
            <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-2">
                {cuisines.map((cuisine, index) => (
                    <button
                        key={index}
                        className={`flex h-10 shrink-0 items-center justify-center gap-2 rounded-full px-6 font-semibold shadow-sm transition-colors ${cuisine.active
                                ? "bg-primary text-white"
                                : "bg-white dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-primary"
                            }`}
                    >
                        <span className="material-symbols-outlined text-sm">{cuisine.icon}</span>
                        {cuisine.label}
                    </button>
                ))}
            </div>
        </section>
    );
}
