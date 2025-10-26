export const metadata = {
  title: "Contact Us",
  description: "Hubungi pasukan Didik Rakyat melalui WhatsApp untuk sebarang pertanyaan atau kerjasama.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-foreground)] text-[var(--color-foreground)] flex items-center justify-center">
      <div className="max-w-xl px-4 py-16 text-center">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-background)]">
          Hubungi Pasukan Didik Rakyat
        </h1>
        <p className="mt-4 text-base md:text-lg text-[var(--color-background)]/90 leading-relaxed">
          Kami sedia membantu anda. Klik butang di bawah untuk terus berhubung dengan kami melalui WhatsApp.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/60199908484"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path d="M12.004 2.003a9.933 9.933 0 0 0-9.937 9.937c0 1.756.465 3.469 1.349 4.99L2 22l5.253-1.368a9.92 9.92 0 0 0 4.751 1.202h.001a9.937 9.937 0 0 0 9.937-9.937a9.933 9.933 0 0 0-9.938-9.934zm0 18.247a8.303 8.303 0 0 1-4.226-1.156l-.303-.18l-3.116.812l.833-3.037l-.197-.312a8.285 8.285 0 0 1-1.276-4.41a8.326 8.326 0 0 1 8.327-8.327a8.325 8.325 0 0 1 8.327 8.327a8.327 8.327 0 0 1-8.326 8.327zm4.6-6.235c-.25-.125-1.476-.727-1.703-.81c-.228-.083-.395-.125-.562.125c-.166.25-.645.81-.792.978c-.145.166-.29.188-.54.063c-.25-.125-1.056-.389-2.01-1.24c-.742-.661-1.244-1.478-1.39-1.728c-.145-.25-.015-.386.11-.511c.113-.113.25-.292.374-.437c.125-.145.166-.25.25-.416c.083-.166.042-.312-.021-.437c-.063-.125-.562-1.35-.77-1.854c-.203-.488-.41-.421-.562-.429l-.48-.008c-.166 0-.437.063-.666.312c-.228.25-.875.854-.875 2.083c0 1.229.896 2.417 1.02 2.583c.125.166 1.762 2.692 4.272 3.777c.597.258 1.063.412 1.426.527c.6.191 1.146.164 1.578.1c.481-.072 1.476-.604 1.683-1.188c.208-.583.208-1.083.146-1.188c-.063-.104-.229-.166-.48-.29z" />
            </svg>
            HUBUNGI KAMI
          </a>
        </div>
      </div>
    </main>
  );
}
