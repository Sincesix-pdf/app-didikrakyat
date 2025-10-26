export const metadata = {
  title: "About Us",
  description: "Kisah di sebalik Didik Rakyat, misi, visi, dan nilai yang memperkasakan rakyat Malaysia.",
};

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-foreground)] text-[var(--color-foreground)]">

      {/* 1. HERO */}
      <section className="relative h-[60vh] sm:h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[var(--color-foreground)]/95" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-[var(--color-background)]">
          <h1 className="font-heading text-3xl md:text-4xl font-bold">
            Mendemokrasikan Ilmu, Memperkasakan Rakyat Malaysia
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            Kami yakin bahawa kekuatan terbesar Malaysia terletak pada rakyatnya.
            Didik Rakyat lahir daripada satu impian: meruntuhkan halangan
            dan meletakkan ilmu pengetahuan di hujung jari setiap individu.
          </p>
        </div>
      </section>

      {/* 2. KISAH KAMI */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-foreground)]/80 to-black/80 pointer-events-none"></div>
        <div className="relative mx-auto max-w-4xl px-4 space-y-6 text-center text-[var(--color-background)]">
          <h2 className="font-heading text-2xl font-semibold text-center">
            Kisah Kami: Dari Persoalan, Lahirlah Penyelesaian
          </h2>
          <p className="text-[var(--color-background)]">
            Semuanya bermula apabila kami melihat seorang mahasiswa berhempas pulas
            memahami jurnal yang sukar. Kami melihat seorang usahawan gerai burger
            kreatif tetapi buntu mencari jalan untuk bersaing. Kami melihat ibu bapa yang mahu
            memberikan yang terbaik untuk keluarga, tetapi terikat dengan masa dan kekangan idea.
          </p>
          <p className="text-[var(--color-background)]">
            Lalu timbul persoalan: bagaimana jika wujud satu alat yang boleh
            menjadi tutor peribadi, penasihat bisnes, dan pembantu harian dalam satu masa?
          </p>
          <p className="text-[var(--color-background)]">
            Dari situlah Didik Rakyat dilahirkan. Sebuah platform yang
            direka oleh rakyat Malaysia, untuk rakyat Malaysia.
          </p>
        </div>
      </section>

      {/* 3. MISI & VISI */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-heading text-black text-xl font-semibold mb-2">Misi Kami</h3>
            <p className="text-[var(--color-foreground)]">
              Memperkasakan setiap individu di Malaysia dengan menyediakan
              akses segera kepada maklumat relevan, panduan praktikal,
              dan inspirasi harian melalui teknologi AI.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-heading text-black text-xl font-semibold mb-2">Visi Kami</h3>
            <p className="text-[var(--color-foreground)]">
              Melihat sebuah Malaysia di mana setiap insan mempunyai peluang
              yang sama untuk belajar, berkembang, dan mencapai potensi penuh mereka.
            </p>
          </div>
        </div>
      </section>

      {/* 4. NILAI TERAS */}
      <section className="py-16 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-[var(--color-background)] font-heading text-2xl font-semibold text-center mb-12">
            Prinsip Panduan Kami
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="mb-4 text-4xl mx-auto">💡</div>
              <h3 className="text-[var(--color-background)] font-semibold text-lg">Pemberdayaan</h3>
              <p className="text-[var(--color-background)]/90 text-sm">
                Setiap soalan berhak mendapat jawapan yang berkualiti.
              </p>
            </div>
            <div>
              <div className="mb-4 text-4xl mx-auto">🚀</div>
              <h3 className="text-[var(--color-background)] font-semibold text-lg">Inovasi</h3>
              <p className="text-[var(--color-background)]/90 text-sm">
                Sentiasa mencari cara baharu untuk menjadikan teknologi bermanfaat.
              </p>
            </div>
            <div>
              <div className="mb-4 text-4xl mx-auto">🤝</div>
              <h3 className="text-[var(--color-background)] font-semibold text-lg">Integriti</h3>
              <p className="text-[var(--color-background)]/90 text-sm">
                Komited pada maklumat yang sahih dan selamat.
              </p>
            </div>
            <div>
              <div className="mb-4 text-4xl mx-auto">🌍</div>
              <h3 className="text-[var(--color-background)] font-semibold text-lg">Komuniti</h3>
              <p className="text-[var(--color-background)]/90 text-sm">
                Dibina untuk anda, bersama anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA TERAKHIR */}
      <section className="py-20 text-center">
        <h2 className="font-heading text-2xl font-bold mb-6">Sertai Misi Kami</h2>
        <p className="text-[var(--color-background)] max-w-2xl mx-auto mb-8">
          Anda bukan sekadar memuat turun aplikasi; anda menyertai sebuah gerakan
          untuk menjadikan ilmu lebih mudah dicapai oleh semua.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://www.play.google.com/" target="_blank" rel="noopener noreferrer">
            <img src="/playstore.png" alt="Google Play" className="h-12 w-auto" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="/appstore.png" alt="App Store" className="h-12 w-auto" />
          </a>
        </div>
      </section>
    </main>
  );
}
