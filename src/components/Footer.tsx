export default function Footer() {
  return (
    <footer className="bg-[var(--color-background)] shadow-[0_-6px_12px_-2px_rgba(0,0,0,0.2)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-xs sm:text-sm text-[var(--color-foreground)]">
          © {new Date().getFullYear()} Didik Rakyat. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-[var(--color-foreground)]">
          <a href="https://facebook.com" aria-label="Facebook" className="p-2 rounded-full hover:text-[var(--color-accent)] hover:bg-black/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6">
              <path d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.611.611 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.618.618 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1" />
            </svg>
          </a>

          <a href="https://instagram.com" aria-label="Instagram" className="p-2 rounded-full hover:text-[var(--color-accent)] hover:bg-black/5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 sm:h-6 sm:w-6">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </a>

          <a href="https://twitter.com" aria-label="X" className="p-2 rounded-full hover:text-[var(--color-accent)] hover:bg-black/5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
              <path d="M18.9 2H21l-6.5 7.4L22 22h-6.9l-5.4-7.6L3.7 22H2l7-8L2.5 2h7.1l5 7L18.9 2Zm-2.4 18h1.3L7.5 4h-1.4l10.4 16Z" />
            </svg>
          </a>

          <a href="https://wa.me/6281234567890" aria-label="WhatsApp" className="p-2 rounded-full hover:text-[var(--color-accent)] hover:bg-black/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 432" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
              <path d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}