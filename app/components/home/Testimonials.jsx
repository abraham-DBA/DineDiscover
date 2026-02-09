"use client";

import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Travel Enthusiast",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2OYiOOg4QloGXuSVNc-Ps3xqSgSkr3qgUT1IudPFtLN0wAHVoqnsdq0hKcIa6JEPDrA9YHUBwFHfbbSkYrMdaPA1cX-9OezEun3qPs2J4G58KcWgERWEJgT4CcZW9uh2u0sQNFgZv7uRKF6bI00LKaq1biFUZ7k_XQAfbkdQe8Q5EBKl5mC9cEfGAhBpVVh_o3fmGruEtD9CjvUAZrzlfTvnBIYoKpQCeWlvNgi5xWqTKG05CYmBuW1XAL4npI7-VmzQbLW7ldCs",
        quote:
            '"Found the most amazing ramen place in Tokyo through this app. The booking process was seamless!"',
        highlighted: false,
    },
    {
        name: "Marcus Lee",
        role: "Local Foodie",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYadmeRK7qFq9TpWe9yrRHL0ZaIBVeW8-1BJezSB7nHgmPCHrciIQeILqsfSM6LbLzCfYY7wBmWsuasUMdQHgBPI3ym7xZcJlS3s-_tNnqnYeyW2_gyZTDd50DOH3QSjhBewWdyAi2qQwAwomIO69U0PYu1asE_SmA2Xr49g9YkFgiTVOl73LHskcjK4dqcquOW6nyCwdjr4qN1zntLJdqCGvZEv89B1gQMdJFH0I3BPV35hLlNrT3_OqsZglEsc2Rh_1QQzyDdcQ",
        quote:
            '"The restaurant recommendations are spot on. I\'ve discovered gems in my own city I never knew existed."',
        highlighted: true,
    },
    {
        name: "Elena Rodriguez",
        role: "Food Journalist",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcWW9EY26TrN-w1qN1j46__BkEEavIzfxj3RvpnbrgKnW75XzFETjptzMqu73yASkOsApaR4rEhFxaqk4n8A2IykemuRVqebe_vs5U2njesVdyGUyNGj6OEEaXYnfU9MKRF3T4Pml1iIx-4vkzeEaP1hYXLkosLcJwvnoGdypT3MzpcjyXgYHoeZcMMlW_IMg_gorDLncRsbsCu3M3yImWER2l-FYv8fn5PfrUQ7mZOiZN6L-GABvQwIacog-sEUq6QdIJ4a73lis",
        quote:
            '"A must-have app for any traveler. It makes finding high-quality food in a new city completely stress-free."',
        highlighted: false,
    },
];

export default function Testimonials() {
    return (
        <section className="px-6 md:px-20 py-16">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-black tracking-tight">What Our Users Say</h2>
                <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <span className="material-symbols-outlined">west</span>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <span className="material-symbols-outlined">east</span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`bg-white dark:bg-card-dark p-8 rounded-2xl shadow-md space-y-6 ${testimonial.highlighted ? "border-2 border-primary/20" : ""
                            }`}
                    >
                        <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="material-symbols-outlined text-sm">
                                    star
                                </span>
                            ))}
                        </div>
                        <p className="italic text-lg text-text-primary dark:text-text-light">
                            {testimonial.quote}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                    src={testimonial.image}
                                    fill
                                    sizes="48px"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold">{testimonial.name}</h4>
                                <p className="text-xs text-text-muted dark:text-text-muted-dark">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
