import Image from "next/image";

export const metadata = {
  title: "Tentang Kami",
  description: "Kisah di balik Didik Rakyat, misi, visi, dan nilai yang memperkasakan rakyat Malaysia.",
};

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-background)] text-[var(--color-foreground)]">

      {/* 1. HERO */}
      <section className="relative h-[60vh] sm:h-[50vh] flex items-center"> {/* Tinggi responsif */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[var(--color-background)]/95" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="font-heading text-3xl md:text-4xl font-bold"> {/* Ukuran font responsif */}
            Mendemokrasikan Ilmu, Memperkasakan Rakyat Malaysia
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed"> {/* Ukuran font responsif */}
            Kami percaya bahawa potensi terhebat Malaysia terletak pada rakyatnya.
            Didik Rakyat lahir dari satu impian: untuk meruntuhkan halangan
            dan meletakkan kuasa ilmu pengetahuan di hujung jari setiap individu.
          </p>
        </div>
      </section>

      {/* 2. KISAH KAMI */}
      <section className="py-20 relative">
        {/* Gradient dari color-background ke hitam */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)]/80 to-black/80 pointer-events-none"></div>
        <div className="relative mx-auto max-w-4xl px-4 space-y-6">
          <h2 className="font-heading text-2xl font-semibold text-center">
            Kisah Kami: Dari Satu Persoalan, Tercipta Satu Penyelesaian
          </h2>
          <p className="text-white">
            Semuanya bermula apabila kami melihat seorang mahasiswa berhempas pulas
            memahami jurnal yang kompleks. Kami melihat seorang pengusaha gerai burger
            kreatif tetapi buntu mencari cara bersaing. Kami melihat ibu bapa yang ingin
            yang terbaik untuk keluarga mereka tetapi kekurangan masa dan idea.
          </p>
          <p className="text-white">
            Dari situ muncul pertanyaan: bagaimana jika ada satu alat yang boleh
            menjadi tutor peribadi, penasihat bisnes, dan pembantu harian serentak?
          </p>
          <p className="text-white">
            Dari persoalan itulah Didik Rakyat dilahirkan. Sebuah platform yang
            direka oleh rakyat Malaysia, untuk rakyat Malaysia.
          </p>
        </div>
      </section>

      {/* 3. MISI & VISI */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-heading text-black text-xl font-semibold mb-2">Misi Kami</h3>
            <p className="text-[var(--color-background)]">
              Memperkasakan setiap individu di Malaysia dengan menyediakan
              akses segera kepada maklumat relevan, bimbingan praktikal,
              dan inspirasi harian melalui teknologi AI.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-heading text-black text-xl font-semibold mb-2">Visi Kami</h3>
            <p className="text-[var(--color-background)]">
              Melihat sebuah Malaysia di mana setiap orang mempunyai peluang
              yang sama untuk belajar, berkembang, dan mencapai potensi penuh mereka.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PASUKAN KAMI */}
      {/* <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-2xl font-semibold mb-8">
            Di Sebalik Didik Rakyat
          </h2>
          <p className="text-slate-700 max-w-3xl mx-auto mb-12">
            Kami adalah sekumpulan pendidik, jurutera, pereka, dan pemimpi
            dari seluruh Malaysia yang percaya pada kuasa teknologi untuk membawa
            perubahan positif.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <Image
                src="/logo.jpg"
                alt="Founder Didik Rakyat"
                width={160}
                height={160}
                className="rounded-full border-4 border-[var(--color-accent)] object-cover"
              />
              <h3 className="mt-4 font-heading text-lg font-semibold">
                Moch. Faizal Yushril Imansyah
              </h3>
              <p className="text-slate-600">Pengasas & Visionary</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* 5. NILAI TERAS */}
      <section className="py-16 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-white font-heading text-2xl font-semibold text-center mb-12">
            Prinsip Panduan Kami
          </h2>
          {/* Grid dibuat 2 kolom di mobile, 4 di desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="mb-4 text-4xl mx-auto">💡</div>
              <h3 className="text-white font-semibold text-lg">Pemberdayaan</h3>
              <p className="text-white/90 text-sm">
                Setiap soalan berhak mendapat jawapan berkualiti.
              </p>
            </div>
            <div>
              <div className="mb-4 text-4xl mx-auto">🚀</div>
              <h3 className="text-white font-semibold text-lg">Inovasi</h3>
              <p className="text-white/90 text-sm">
                Sentiasa mencari cara baharu untuk menjadikan teknologi bermanfaat.
              </p>
            </div>
            <div>
              <div className="mb-4 text-4xl mx-auto">🤝</div>
              <h3 className="text-white font-semibold text-lg">Integriti</h3>
              <p className="text-white/90 text-sm">
                Komited pada maklumat yang diyakini dan selamat.
              </p>
            </div>
            <div>
              <div className="mb-4 text-4xl mx-auto">🌍</div>
              <h3 className="text-white font-semibold text-lg">Komuniti</h3>
              <p className="text-white/90 text-sm">
                Dibina untuk anda, dengan anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA TERAKHIR */}
      <section className="py-20 text-center">
        <h2 className="font-heading text-2xl font-bold mb-6">Sertai Misi Kami</h2>
        <p className="text-white max-w-2xl mx-auto mb-8">
          Anda bukan sekadar memuat turun aplikasi; anda menyertai sebuah gerakan
          untuk menjadikan ilmu lebih mudah diakses untuk semua.
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
