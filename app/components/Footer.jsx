"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-card-darker border-t border-border-light dark:border-border-dark px-6 md:px-20 py-12">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="max-w-xs">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center justify-center bg-primary rounded-lg p-1 text-white">
                            <span className="material-symbols-outlined text-xl">restaurant_menu</span>
                        </div>
                        <h2 className="text-xl font-extrabold tracking-tight">Dine Discover</h2>
                    </div>
                    <p className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed">
                        Helping travelers and locals discover the world&apos;s best culinary experiences, one
                        bite at a time.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-text-muted dark:text-text-muted-dark">
                            <li>
                                <Link className="hover:text-primary" href="#">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-primary" href="#">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-primary" href="#">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-text-muted dark:text-text-muted-dark">
                            <li>
                                <Link className="hover:text-primary" href="#">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-primary" href="#">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-primary" href="#">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <Link
                                className="size-9 rounded-full bg-background-light dark:bg-border-dark flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-lg">public</span>
                            </Link>
                            <Link
                                className="size-9 rounded-full bg-background-light dark:bg-border-dark flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-lg">camera</span>
                            </Link>
                            <Link
                                className="size-9 rounded-full bg-background-light dark:bg-border-dark flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-lg">thumb_up</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark text-center text-xs text-text-muted dark:text-text-muted-dark">
                © 2024 Dine Discover Inc. All rights reserved.
            </div>
        </footer>
    );
}
