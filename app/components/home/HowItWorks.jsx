"use client";

const steps = [
    {
        icon: "travel_explore",
        title: "1. Discover",
        description:
            "Browse curated lists of top restaurants and hidden local gems based on your location and cravings.",
    },
    {
        icon: "event_available",
        title: "2. Book",
        description:
            "Reserve your table instantly with real-time availability. No more waiting in long lines or phone calls.",
    },
    {
        icon: "celebration",
        title: "3. Enjoy",
        description:
            "Show up and treat your taste buds to an exceptional culinary experience designed for food lovers.",
    },
];

export default function HowItWorks() {
    return (
        <section className="px-6 md:px-20 py-16 bg-[#faf9f6] dark:bg-card-darker">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-black tracking-tight mb-4">How It Works</h2>
                <p className="text-text-muted dark:text-text-muted-dark">
                    Your journey to an unforgettable meal starts here. Simple, fast, and delicious.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {steps.map((step, index) => (
                    <div key={index} className="space-y-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                            <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-text-muted dark:text-text-muted-dark">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
