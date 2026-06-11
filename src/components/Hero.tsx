import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-center px-6">

      <Image
        src="/logo.png"
        width={300}
        height={300}
        alt="logo"
      />

      <h1 className="text-6xl font-extrabold mt-6">
        GLORIOUS ESPORT
      </h1>

      <p className="text-yellow-500 text-xl mt-4">
        Together We Rise, Together We Win
      </p>

      <p className="max-w-2xl text-gray-400 mt-6">
        Komunitas PUBG Mobile Indonesia yang
        berfokus pada kekompakan, persaudaraan,
        dan prestasi kompetitif.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Daftar Member
        </button>
        <button className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500/10 transition">
          Lihat Anggota
        </button>
      </div>
    </section>
  );
}