import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
          />

          <h1 className="font-bold text-xl text-yellow-500">
            GLORIOUS ESPORT
          </h1>
        </div>

        <div className="hidden md:flex gap-6">
          <a href="#about">Tentang</a>
          <a href="#teams">Tim</a>
          <a href="#hof">Hall Of Fame</a>
          <a href="#gallery">Galeri</a>
        </div>
      </div>
    </nav>
  );
}