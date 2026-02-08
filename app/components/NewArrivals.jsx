"use client";

import Image from "next/image";
import Link from "next/link";

const newArrivals = [
    {
        name: "Petal & Grain",
        category: "Organic Bakery",
        description: "Artisanal sourdough and flower-infused pastries in a cozy garden setting.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe7-DC2BhgqtrBxJuWZJVzE-gn61Qy6WUs4vW62hZmSiXjdkcvt4v5qeJSIQW0OVFij5GOSUSEhILfV4Kv3-fmfgZktmbGjtbz65c147CaIpJq1lH98-1LTAYKiXJ0qcoJhMl3GRtei1newuQqIoIL4cD1SjLiCKs0JRygU2s8_YOUpAD2mwHidu2Ox1Vof71ehDoD69oC4EBxbK-093LGlWE3ePs1_wQid7zgD3v9q5YVmThuL9R9MMyMKYCVPLs3tzdihS36Do8",
        showBookmark: true,
    },
    {
        name: "The Neon Sushi",
        category: "Japanese Fusion",
        description: "Cyberpunk-inspired sushi bar featuring experimental rolls and molecular cocktails.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnJeJsAlwvapnjI56k0Uwrz2DUwo-TNAAAlJN0EpVJND94_PB8atxoE4Il6WMG8NXxKudxq-GPgBgXkIey9XZh5_qmJy-1qOQORYhaSY04xzYH1xmKMArQY2MF_51UDoBKghlIJAUQ3npcBGDfvvHlaMSONCVCVaRA-nb6TSiWorI1okJSlEfzV4qrca9Lv95jGabu20dpBgYYdzE0zOUHIkTx7cD_uOO550_O_2TcnzrvgAmOtAxET8iY2LJz7a-ESqHjtMX2ySw",
        showBookmark: false,
    },
    {
        name: "Heirloom Hearth",
        category: "Farm-to-Table",
        description: "Traditional wood-fired cooking using exclusively seasonal local ingredients.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQn4he55E_wf1aDICLtbg0gwo-mZMEu0-r7V0l5L71CxlgO5mWYdunW57wyacPWK9waDuWTCbFFTyHWEEap2dQAqH4_06I74h5jzvgI7gRvId_VVnsAqL-LMja3xbdJ71pb6b1p9AftNEIErBJNQ770wiI5rAwcGJzBdyUOYeTSTlhbrC0xYSXOKge-DVJRGVAeb0L5s0aNkDCtZoT80kkKPVKG-4J4-hcMXuJZG7Ov9qw0QIWLzA8HvecMDqE2imcJiy6lfi8aYg",
        showBookmark: false,
    },
    {
        name: "Azure Terrace",
        category: "Mediterranean",
        description: "Rooftop dining with panoramic views and coastal-inspired shared plates.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2Wipfzv_FKEJz6SnrO1cGaMoRL0BC3-aZmxEZm63qv4QbyjinCoOmnzWVGsgIKdHzwiMGwCUFZNqT5h0lPqh3rExFbXa-J8S1xuwzJGu9-PzEf34EixJVi-0jO8j2luuJowpG1mGYwxWjnIRXgKtkZnznEcZO21C0bj5Zj55fAfnW4ePZ38Pwg0cQDYBYF7uUy8NUaT5KIt3qvktbVLIx3aU4Z9AO6vH0Mr8_ETcWoEnAGRw-Z3zyiCloGgbR6Krjru0bEwtrF_Q",
        showBookmark: false,
    },
];

export default function NewArrivals() {
    return (
        <section className="px-6 md:px-20 py-12 bg-white/40 dark:bg-background-dark/40 backdrop-blur-sm border-y border-border-light dark:border-border-dark">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-black tracking-tight">New &amp; Latest</h2>
                    <p className="text-text-muted dark:text-text-muted-dark text-sm mt-1">
                        Be the first to experience these newly opened culinary spots
                    </p>
                </div>
                <Link
                    className="text-primary font-bold flex items-center gap-1 hover:underline mt-4 md:mt-0"
                    href="#"
                >
                    Discover More <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newArrivals.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                            <Image
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                            <div className="absolute top-2 left-2 bg-emerald-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
                                New
                            </div>
                            {item.showBookmark && (
                                <button className="absolute top-2 right-2 size-8 bg-white/80 dark:bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-xl">bookmark</span>
                                </button>
                            )}
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                                {item.name}
                            </h4>
                            <p className="text-xs font-bold text-primary uppercase tracking-wider">
                                {item.category}
                            </p>
                            <p className="text-sm text-text-muted dark:text-text-muted-dark line-clamp-2 leading-snug">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
