"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, Gamepad2, Swords, Camera, Images, ChevronRight } from "lucide-react";

const categories = [
  { label: "Foto Event", icon: ImageIcon, count: 6, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20", accent: "from-yellow-500/20" },
  { label: "Foto Mabar", icon: Gamepad2, count: 6, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", accent: "from-blue-500/20" },
  { label: "Turnamen", icon: Swords, count: 6, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", accent: "from-red-500/20" },
  { label: "Dokumentasi", icon: Camera, count: 6, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", accent: "from-green-500/20" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];
  const Icon = active.icon;

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-yellow-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-yellow-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Dokumentasi
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Galeri <span className="text-gradient">Kegiatan</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-yellow-500 rounded-full" />
          <p className="text-gray-500 text-sm mt-4">Momen berharga bersama Glorious Esport</p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
        >
          {categories.map((cat, i) => {
            const CatIcon = cat.icon;
            const isActive = i === activeTab;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? `${cat.bg} ${cat.color} ${cat.border} shadow-lg`
                    : "bg-zinc-900 text-gray-400 border-zinc-800 hover:border-zinc-700 hover:text-gray-300"
                }`}
              >
                <CatIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 sm:p-6"
        >
          {/* Category title */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className={`${active.bg} ${active.border} border rounded-xl p-2.5`}>
                <Icon className={`w-5 h-5 ${active.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg">{active.label}</h3>
                <p className="text-gray-500 text-xs">{active.count} foto</p>
              </div>
            </div>
            <button className={`flex items-center gap-1 text-xs font-semibold ${active.color} hover:opacity-80 transition-opacity cursor-pointer`}>
              Lihat Semua <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {Array.from({ length: active.count }).map((_, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: j * 0.05 }}
                className={`aspect-square bg-zinc-800/80 rounded-xl border border-zinc-700/50 flex flex-col items-center justify-center hover:border-yellow-500/40 transition-all duration-300 cursor-pointer group overflow-hidden relative`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${active.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <Images className={`w-6 h-6 sm:w-7 sm:h-7 ${active.color} opacity-30 group-hover:opacity-60 transition-opacity`} />
                  <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors font-medium">
                    #{j + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upload CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 text-xs sm:text-sm mt-6"
        >
          Punya foto kegiatan? Kirim ke admin untuk ditampilkan di sini.
        </motion.p>
      </div>
    </section>
  );
}
