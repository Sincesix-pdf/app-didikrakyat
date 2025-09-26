import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "Didik Rakyat: Satu aplikasi, pelbagai kegunaan.",
};

export default function Home() {

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white">
        <Image
          src="/home-bg.jpeg"
          alt="Mockup Aplikasi Didik Rakyat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d131f]/20 to-[#0d131f]/100"></div>
        <div className="relative z-10 px-4 max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Didik Rakyat: Satu Aplikasi, Pelbagai Kegunaan
          </h1>
          <p className="mt-4 text-lg">
            Dari sekolah hingga ke alam dewasa. Membantu pelajar, suri rumah, dan
            usahawan untuk terus belajar dan maju.
          </p>
          <div className="mt-28 flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-s font-sans">
              Muat Turun Aplikasi Didik Rakyat
            </span>
            <div className="flex gap-3">
              <a href="https://www.play.google.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/playstore.png"
                  alt="Get it on Google Play"
                  className="h-7 w-auto" />
              </a>
              <a href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/appstore.png"
                  alt="Download on the App Store"
                  className="h-7 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[var(--color-background)]"></section>

      {/* PENGENALAN & MASALAH */}
      <section className="py-20 bg-[var(--color-white)]">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-[var(--color-background)]">
            Setiap Hari Adalah Cabaran. Kini, Setiap Cabaran Ada Jawapannya.
          </h2>

          {/* Masalah untuk 3 segmen */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pelajar */}
            <div className="p-6 bg-white rounded-xl shadow-md border border-[var(--color-background)]">
              <h3 className="text-lg font-semibold text-[var(--color-background)] mb-3">Untuk Pelajar</h3>
              <p className="text-[var(--color-background)]">
                Tersekat dengan tesis pada pukul 2 pagi? Perlukan ringkasan pantas untuk jurnal akademik yang padat?
              </p>
            </div>

            {/* Usahawan */}
            <div className="p-6 bg-white rounded-xl shadow-md border border-[var(--color-background)]">
              <h3 className="text-lg font-semibold text-[var(--color-background)] mb-3">Untuk Usahawan</h3>
              <p className="text-[var(--color-background)]">
                Persaingan sengit? Buntu mencari idea promosi untuk menarik lebih ramai pelanggan ke gerai anda?
              </p>
            </div>

            {/* Suri Rumah */}
            <div className="p-6 bg-white rounded-xl shadow-md border border-[var(--color-background)]">
              <h3 className="text-lg font-semibold text-[var(--color-background)] mb-3">Untuk Suri Rumah</h3>
              <p className="text-[var(--color-background)]">
                Pening kepala fikirkan menu makan malam untuk seminggu? Perlukan aktiviti menarik untuk anak-anak pada hujung minggu?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNGSI UTAMA */}
      <section id="features" className="py-20 bg-[var(--color-background)]">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-semibold text-center text-[var(--color-foreground)]">
            Fungsi Utama Didik Rakyat
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 bg-[var(--color-background)] rounded-xl overflow-hidden">
            {/* 1. Pelajar */}
            <div className="min-h-[250px] flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-background)]">
              <div className="h-12 w-12 text-[var(--color-background)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-full w-full"
                >
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13" />
                </svg>
              </div>
              <h3 className="text-center font-semibold text-[var(--color-background)]">Tutor & Homework</h3>
              <p className="mt-2 text-center text-slate-600 text-sm">
                Mendidik dan melatih sehingga pelajar memahami subjek dan menyiapkan kerja rumah
              </p>
            </div>

            {/* 2. IPT */}
            <div className="min-h-[250px] flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-background)]">
              <div className="h-12 w-12 text-[var(--color-background)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="h-full w-full">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </div>

              <h3 className="text-center font-semibold text-[var(--color-background)]">Bantuan Belajar IPT</h3>
              <p className="mt-2 text-center text-slate-600 text-sm">
                Rujukan, contoh soalan, dan panduan tugasan untuk pelajar.
              </p>
            </div>

            {/* 3. Suri Rumah */}
            <div className="min-h-[250px] flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-background)]">
              <div className="h-12 w-12 text-[var(--color-background)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="h-full w-full">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12h-2l9 -9l9 9h-2" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M10 12h4v4h-4z" />
                </svg>
              </div>
              <h3 className="text-center font-semibold text-[var(--color-background)]">Pengurusan Rumah Tangga</h3>
              <p className="mt-2 text-center text-slate-600 text-sm">
                Resipi, jadual, senarai tugas harian, dan tip jimat.
              </p>
            </div>

            {/* 4. Usahawan */}
            <div className="min-h-[250px] flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-background)]">
              <div className="h-12 w-12 text-[var(--color-background)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="h-full w-full">
                  <path strokeMiterlimit="5.759" d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path strokeMiterlimit="5.759" d="m7 14 4-4 4 4 6-6" />
                  <path d="M18 8h3v3" />
                </svg>
              </div>
              <h3 className="text-center font-semibold text-[var(--color-background)]">Didik Usahawan</h3>
              <p className="mt-2 text-center text-slate-600 text-sm">
                Semua Ilmu, maklumat Dan panduan tentangan perniagaan.
              </p>
            </div>

            {/* 5. Harian */}
            <div className="min-h-[250px] flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-background)]">
              <div className="h-12 w-12 text-[var(--color-background)]">
                <svg viewBox="0 0 512 512" className="h-full w-full" fill="currentColor">
                  <path d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8c0 20.4 7.1 38.4 17.5 50.9L99.7 157L84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5c-8.5 11.5-14.9 27.5-19.4 45.8c-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7c-4-18.5-10.2-34.4-18.7-45.9c-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1c0-39.2-24.8-68.8-52.4-68.8c-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31s31-13.77 31-31s-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9c0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9c0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9c0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31z" />
                </svg>
              </div>
              <h3 className="text-center font-semibold text-[var(--color-background)]">Panduan Hidup & Kemahiran</h3>
              <p className="mt-2 text-center text-slate-600 text-sm">
                Etika, komunikasi, produktiviti, dan amalan baik.
              </p>
            </div>

            {/* 6. Kerohanian */}
            <div className="min-h-[250px] flex flex-col items-center justify-center p-6 bg-white border border-[var(--color-background)]">
              <div className="h-12 w-12 text-[var(--color-background)]">
                <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
                  <path d="M24 7c0-1.1-2-3-2-3s-2 1.9-2 3c0 .7.4 1.4 1 1.7V13h-2v-2c0-.9-.7-1.7-1.5-1.9c.3-.6.5-1.2.5-2c0-1.3-.6-2.5-1.7-3.2L12 1L7.7 3.8c-1 .8-1.7 2-1.7 3.3c0 .7.2 1.4.6 2c-.9.2-1.6 1-1.6 1.9v2H3V8.7c.6-.3 1-1 1-1.7c0-1.1-2-3-2-3S0 5.9 0 7c0 .7.4 1.4 1 1.7V21h10v-4c0-.5.4-1 1-1s1 .5 1 1v4h10V8.7c.6-.3 1-1 1-1.7M8.9 5.5L12 3.4l3.1 2.1c.6.4.9.9.9 1.6c0 1-.9 1.9-1.9 1.9H9.9C8.9 9 8 8.1 8 7.1c0-.7.3-1.2.9-1.6M21 19h-6v-2c0-1.6-1.4-3-3-3s-3 1.4-3 3v2H3v-4h4v-4h10v4h4v4Z" />
                </svg>
              </div>
              <h3 className="text-center font-semibold text-[var(--color-background)]">Pelajaran Agama Islam</h3>
              <p className="mt-2 text-center text-slate-600 text-sm">
                Semua Ilmu Dan maklumat tentang agama islam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
