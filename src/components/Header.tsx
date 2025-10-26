// src/components/Header.tsx
'use client'; // Diperlukan untuk menggunakan hooks seperti useState

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/#features", text: "Features" },
        { href: "/about", text: "About Us" },
        { href: "/#testimonials", text: "Testimonials" },
        { href: "/contact", text: "Contact Us" },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 bg-[var(--color-accent)]/90 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-accent)]/75">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <img src="/logo.jpg" alt="Didik Rakyat" className="h-9 w-9 rounded-xl object-cover" />
                        <span className="text-white font-heading text-base sm:text-lg">Didik Rakyat</span>
                    </Link>

                    {/* Navigasi Desktop */}
                    <nav className="hidden md:flex items-center gap-1 text-sm font-heading">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="px-3 py-2 rounded-lg text-white/95 hover:bg-white/15 transition-colors">
                                {link.text}
                            </Link>
                        ))}
                    </nav>

                    {/* Tombol Hamburger untuk Mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white/95 z-50 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            // Ikon X (Close)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Ikon Hamburger
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Overlay Menu Mobile */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[var(--color-accent)]/90 backdrop-blur md:hidden">
                    <nav className="flex flex-col items-center justify-center h-full gap-6 text-lg font-heading">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-white/95 hover:bg-white/15 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)} // Tutup menu setelah link diklik
                            >
                                {link.text}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}