"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Shield, Swords, Users } from "lucide-react";

const floatingBadges = [
  { icon: Shield, label: "Rank Conqueror", value: "Top Tier", delay: 0.8 },
  { icon: Swords, label: "Win Rate", value: "28.5%", delay: 1.0 },
  { icon: Users, label: "Anggota Aktif", value: "90+", delay: 1.2 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black text-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-24">
      {/* Animated background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-60 h-60 bg-yellow-400/5 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(234,179,8,1) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-6 sm:mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-2xl scale-110" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden ring-2 ring-yellow-500/40 shadow-2xl shadow-yellow-500/20">
            <Image src="/asset/logo.png" alt="Glorious Esport" fill className="object-cover" priority />
          </div>
        </motion.div>

        {/* Label chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-yellow-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            PUBG Mobile Indonesia
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-4"
        >
          <span className="text-white">GLORIOUS</span>
          <br />
          <span className="text-gradient">ESPORT</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 font-medium tracking-wider mb-3"
        >
          Together We Rise,{" "}
          <span className="text-yellow-500 font-semibold">Together We Win</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-xl text-gray-500 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10"
        >
          Komunitas PUBG Mobile Indonesia yang berfokus pada kekompakan,
          persaudaraan, dan prestasi kompetitif sejak 2020.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#join"
            className="bg-yellow-500 text-black px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-yellow-400 transition-all duration-200 shadow-xl shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:-translate-y-0.5 text-center"
          >
            Daftar Sekarang
          </a>
          <a
            href="#teams"
            className="border border-zinc-700 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base hover:border-yellow-500/50 hover:text-yellow-500 transition-all duration-200 hover:bg-yellow-500/5 text-center"
          >
            Lihat Tim Kami
          </a>
        </motion.div>

        {/* Floating stat badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-10 sm:mt-12"
        >
          {floatingBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: badge.delay, duration: 0.5 }}
                className="flex items-center gap-2.5 bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm rounded-xl px-4 py-2.5"
              >
                <Icon className="w-4 h-4 text-yellow-500 shrink-0" />
                <div className="text-left">
                  <p className="text-white font-bold text-sm">{badge.value}</p>
                  <p className="text-gray-500 text-xs">{badge.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase"></span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
