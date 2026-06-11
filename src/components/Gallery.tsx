import { ImageIcon, Gamepad2, Swords, Camera } from "lucide-react";

const categories = [
  { label: "Foto Event", icon: ImageIcon, count: 6 },
  { label: "Foto Mabar", icon: Gamepad2, count: 6 },
  { label: "Turnamen", icon: Swords, count: 6 },
  { label: "Dokumentasi Kegiatan", icon: Camera, count: 6 },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
          Galeri
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={i} className="bg-black rounded-xl p-6 border border-zinc-800">
                <div className="flex items-center gap-3 mb-5">
                  <Icon className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-bold text-white">{cat.label}</h3>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: cat.count }).map((_, j) => (
                    <div
                      key={j}
                      className="aspect-square bg-zinc-900 rounded-lg flex items-center justify-center text-gray-600 hover:border-yellow-500/50 border border-zinc-800 transition"
                    >
                      <span className="text-xs text-gray-600">{cat.label.split(" ")[0]} {j + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
