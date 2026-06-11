export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-black"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-14">
          Tentang Glorious Esport
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Sejarah */}
          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">Sejarah</h3>
            <p className="text-gray-400 leading-relaxed">
              Glorious Esport berdiri pada tahun 2020, berawal dari
              sekelompok kecil pemain PUBG Mobile yang sering bermain
              bersama. Seiring waktu, komunitas ini berkembang menjadi
              salah satu clan terbesar di Indonesia dengan anggota dari
              berbagai daerah.
            </p>
          </div>

          {/* Visi */}
          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">Visi</h3>
            <p className="text-gray-400 leading-relaxed">
              Menjadi komunitas PUBG Mobile terdepan di Indonesia yang
              dikenal karena sportivitas, kekompakan, dan prestasi di
              tingkat nasional maupun internasional.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">Misi</h3>
            <ul className="text-gray-400 leading-relaxed space-y-2 list-disc list-inside">
              <li>Membangun lingkungan bermain yang sehat dan kompetitif</li>
              <li>Mengadakan latihan rutin dan turnamen internal</li>
              <li>Menjalin kerja sama dengan clan dan komunitas lain</li>
            </ul>
          </div>

          {/* Tujuan Komunitas */}
          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              Tujuan Komunitas
            </h3>
            <ul className="text-gray-400 leading-relaxed space-y-2 list-disc list-inside">
              <li>Mencetak pemain-pemain PUBG Mobile yang berprestasi</li>
              <li>Memperluas jaringan pertemanan di seluruh Indonesia</li>
              <li>Berkontribusi positif dalam scene esports Indonesia</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
