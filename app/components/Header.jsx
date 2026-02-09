"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-solid border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
            <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-primary rounded-lg p-1.5 text-white">
                    <span className="material-symbols-outlined text-2xl">restaurant_menu</span>
                </div>
                <h2 className="text-xl font-extrabold leading-tight tracking-tight">Dine Discover</h2>
            </Link>
            <div className="flex flex-1 justify-end gap-8 items-center">
                <nav className="hidden md:flex items-center gap-8">
                    <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/explore">
                        Explore
                    </Link>
                    <Link className="text-sm font-semibold hover:text-primary transition-colors" href="#">
                        About
                    </Link>
                </nav>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity">
                        Sign Up
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-text-light dark:bg-border-dark text-text-primary dark:text-text-light text-sm font-bold tracking-wide hover:bg-border-light dark:hover:bg-[#4d3a28] transition-colors">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
}
