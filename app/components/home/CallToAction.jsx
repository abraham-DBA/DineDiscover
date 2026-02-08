"use client";

export default function CallToAction() {
    return (
        <section className="px-6 md:px-20 py-20">
            <div className="bg-primary rounded-[2rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                        Ready to eat?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 font-medium">
                        Join thousands of food lovers discovering the world&apos;s best dining experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="w-full sm:w-auto px-10 py-5 bg-white text-primary font-black rounded-xl text-lg hover:bg-opacity-95 transition-all shadow-lg hover:scale-105">
                            Sign Up Now
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 bg-black/20 text-white font-bold rounded-xl text-lg hover:bg-black/30 transition-all border border-white/20">
                            Contact Sales
                        </button>
                    </div>
                    <p className="text-sm text-white/70">No credit card required • Join in 30 seconds</p>
                </div>
            </div>
        </section>
    );
}
