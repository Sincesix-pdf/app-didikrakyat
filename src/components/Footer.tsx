import Link from "next/link";

export default function Header() {
    return (
        <footer className="bg-[var(--color-background)] shadow-[0_-6px_12px_-2px_rgba(0,0,0,0.2)]">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <p className="text-xs sm:text-sm text-[var(--color-foreground)]">
                    © {new Date().getFullYear()} Didik Rakyat. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-[var(--color-foreground)]">
                    <a href="https://facebook.com" aria-label="Facebook" className="p-2 rounded-full hover:text-[var(--color-accent)] hover:bg-black/5">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" /></svg>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" className="p-2 rounded-full hover:text-[var(--color-accent)] hover:bg-black/5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 sm:h-6 sm:w-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" /></svg>
                    </a>
                    <a href="https://twitter.com" aria-label="X" className="p-2 rounded-full hover:text-[var(--color-accent)] hover:bg-black/5">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6"><path d="M18.9 2H21l-6.5 7.4L22 22h-6.9l-5.4-7.6L3.7 22H2l7-8L2.5 2h7.1l5 7L18.9 2Zm-2.4 18h1.3L7.5 4h-1.4l10.4 16Z" /></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}