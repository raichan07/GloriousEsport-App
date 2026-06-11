"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Trophy, Gamepad2 } from "lucide-react";

const perks = [
  { icon: Users, text: "Bergabung dengan 90+ member aktif" },
  { icon: Gamepad2, text: "Latihan rutin & turnamen internal mingguan" },
  { icon: Trophy, text: "Kesempatan tampil di event kompetitif" },
];

const steps = [
  { num: "01", label: "Hubungi Admin", desc: "via WhatsApp atau Discord kami" },
  { num: "02", label: "Isi Form", desc: "data diri & info akun PUBG Mobile" },
  { num: "03", label: "Trial Mabar", desc: "bermain bersama tim kami" },
  { num: "04", label: "Gabung!", desc: "selamat datang di keluarga Glorious" },
];

export default function JoinClan() {
  return (
    <section id="join" className="py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,179,8,0.07)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Rekrutmen Terbuka
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Siap Jadi Bagian dari{" "}
            <span className="text-gradient">Glorious?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Kami membuka pintu untuk pemain berdedikasi yang ingin tumbuh
            bersama dalam komunitas yang solid dan kompetitif.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-start">
          {/* Left: Perks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-5">Yang kamu dapatkan:</h3>
            <div className="space-y-4 mb-8">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 bg-zinc-900/70 border border-zinc-800 rounded-xl p-4"
                  >
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2.5 shrink-0">
                      <Icon className="w-4 h-4 text-yellow-500" />
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base font-medium">{perk.text}</p>
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 ml-auto" />
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 text-black font-bold px-7 py-3.5 rounded-xl hover:bg-yellow-400 transition-all duration-200 shadow-xl shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Daftar Sekarang
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="flex-1 flex items-center justify-center gap-2 border border-zinc-700 text-gray-300 font-semibold px-7 py-3.5 rounded-xl hover:border-yellow-500/50 hover:text-yellow-500 hover:bg-yellow-500/5 transition-all duration-200 text-sm sm:text-base"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-7"
          >
            <h3 className="text-lg font-bold text-white mb-6">Cara bergabung:</h3>
            <div className="space-y-5">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center">
                      <span className="text-yellow-500 font-extrabold text-xs">{step.num}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-5 bg-zinc-700 mx-auto mt-1" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-white font-bold text-sm sm:text-base">{step.label}</p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-5 border-t border-zinc-800">
              <p className="text-gray-500 text-xs sm:text-sm text-center">
                Pertanyaan? Hubungi kami di{" "}
                <a href="#" className="text-yellow-500 font-semibold hover:underline">
                  WhatsApp
                </a>{" "}
                atau{" "}
                <a href="#" className="text-yellow-500 font-semibold hover:underline">
                  Discord
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
