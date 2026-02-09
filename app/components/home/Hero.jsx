"use client";

export default function Hero() {
    return (
        <section className="px-6 md:px-20 py-8">
            <div className="@container">
                <div
                    className="relative min-h-[520px] flex flex-col items-center justify-center overflow-hidden rounded-xl bg-cover bg-center p-6 text-center shadow-xl"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzvlwkD0KMYMU_icInGsiIdzJznl1ahQMAqXEGOJjqfEDyHCAQOBQRRMovtujMYgr6p8Qcs35j0WxOCxPr32a7h2BvgEXgoltxYw1ENvEp9bZzw0_Ky3TtdB4yBeeMzWTUzYdV8FnbIO3QmYxgTxha2GflQV3CTpI9XSeUkYYLi-9pTHd4rszj_YXDb2RENLrr1o_nieCiZrQmf6oJ5yJbyAlh464KcPb2b89jGnJlQjaoBH0T535LxfS93ueEvv9UfihXFwT7ZH4")`,
                    }}
                >
                    <div className="z-10 max-w-2xl space-y-6">
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            Find Your Next Favorite Meal
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-medium">
                            Discover the best local gems and fine dining experiences near you.
                        </p>
                        <div className="mt-8 flex flex-col md:flex-row w-full max-w-2xl bg-white dark:bg-card-dark rounded-xl p-2 shadow-2xl gap-2">
                            <div className="flex flex-1 items-center px-4 border-b md:border-b-0 md:border-r border-border-light dark:border-border-dark">
                                <span className="material-symbols-outlined text-text-muted mr-2">location_on</span>
                                <input
                                    className="w-full bg-transparent border-none focus:ring-0 text-text-primary dark:text-white placeholder:text-text-muted py-3 outline-none"
                                    placeholder="Where are you?"
                                    type="text"
                                    defaultValue="San Francisco, CA"
                                />
                            </div>
                            <div className="flex flex-1 items-center px-4">
                                <span className="material-symbols-outlined text-text-muted mr-2">search</span>
                                <input
                                    className="w-full bg-transparent border-none focus:ring-0 text-text-primary dark:text-white placeholder:text-text-muted py-3 outline-none"
                                    placeholder="What are you craving?"
                                    type="text"
                                />
                            </div>
                            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
