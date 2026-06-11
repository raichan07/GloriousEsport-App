"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrimResults, type ScrimResult } from "@/data/dummy";
import { Trophy, Medal, Crosshair, Star, Heart, Target, X, Award } from "lucide-react";

const rankMeta = [
  { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30", label: "Juara 1" },
  { color: "text-gray-300", bg: "bg-gray-400/10", border: "border-gray-400/30", label: "Juara 2" },
  { color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", label: "Juara 3" },
  { color: "text-zinc-400", bg: "bg-zinc-500/10", border: "border-zinc-500/20", label: "Juara 4" },
];

const awardConfig: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  "Kill Terbanyak": { icon: <Crosshair className="w-5 h-5" />, color: "text-red-400", bg: "bg-red-500/10" },
  "MVP Mingguan": { icon: <Star className="w-5 h-5" />, color: "text-yellow-400", bg: "bg-yellow-500/10" },
  "Support Terbaik": { icon: <Heart className="w-5 h-5" />, color: "text-green-400", bg: "bg-green-500/10" },
  "Sniper Terbaik": { icon: <Target className="w-5 h-5" />, color: "text-blue-400", bg: "bg-blue-500/10" },
};

export default function HallOfFame() {
  const [selected, setSelected] = useState<ScrimResult | null>(null);
  const latest = scrimResults[0];

  return (
    <section id="hof" className="py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.05)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-yellow-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Hasil Scrim
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Hall of <span className="text-gradient">Fame</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-yellow-500 rounded-full" />
          <p className="text-gray-500 text-sm mt-4">{latest.week}</p>
        </motion.div>

        {/* Podium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12"
        >
          {latest.teamRankings.map((r, i) => {
            const meta = rankMeta[r.rank - 1];
            const isFirst = r.rank === 1;
            return (
              <motion.button
                key={r.rank}
                onClick={() => setSelected(latest)}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${meta.bg} ${meta.border} border rounded-2xl p-4 sm:p-5 text-center cursor-pointer transition-all duration-200 hover:shadow-lg ${isFirst ? "hover:shadow-yellow-500/20" : ""}`}
              >
                <div className="flex justify-center mb-3">
                  {isFirst ? (
                    <div className="relative">
                      <Trophy className="w-10 h-10 text-yellow-400" />
                      <div className="absolute inset-0 blur-lg bg-yellow-400/30 -z-10 rounded-full" />
                    </div>
                  ) : (
                    <Medal className={`w-8 h-8 ${meta.color}`} />
                  )}
                </div>
                <h3 className="font-extrabold text-white text-base sm:text-lg">{r.teamName}</h3>
                <p className={`text-xs sm:text-sm font-bold ${meta.color} mt-1`}>{meta.label}</p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Individual awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-center text-lg sm:text-xl font-bold text-gray-200 mb-6 flex items-center justify-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Penghargaan Individu
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {latest.individualAwards.map((a, i) => {
              const cfg = awardConfig[a.category] ?? { icon: <Star className="w-5 h-5" />, color: "text-gray-400", bg: "bg-zinc-800" };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 sm:p-5 text-center card-hover"
                >
                  <div className={`${cfg.bg} ${cfg.color} rounded-xl p-3 w-fit mx-auto mb-3`}>
                    {cfg.icon}
                  </div>
                  <p className="text-white font-extrabold text-lg">{a.playerNickname}</p>
                  <p className={`text-xs font-semibold mt-1 ${cfg.color}`}>{a.category}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{a.teamName}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Detail button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => setSelected(latest)}
            className="inline-flex items-center gap-2 border border-yellow-500/50 text-yellow-500 px-7 py-2.5 rounded-xl text-sm font-semibold hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-200 cursor-pointer"
          >
            <Trophy className="w-4 h-4" />
            Lihat Detail Lengkap
          </button>
        </motion.div>
      </div>

      {/* Modal detail scrim */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-zinc-900 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-zinc-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 bg-zinc-900/95 backdrop-blur-sm flex items-center justify-between p-5 sm:p-6 border-b border-zinc-800 z-10">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <div>
                    <h3 className="text-lg font-extrabold text-white">Detail Hasil Scrim</h3>
                    <p className="text-gray-500 text-sm">{selected.week}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl cursor-pointer"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="p-5 sm:p-6 space-y-8">
                {/* Team rankings */}
                {selected.teamRankings.map((r) => {
                  const meta = rankMeta[r.rank - 1];
                  return (
                    <div key={r.rank}>
                      <div className={`flex items-center gap-3 mb-4 pb-3 border-b ${meta.border}`}>
                        {r.rank === 1
                          ? <Trophy className={`w-5 h-5 ${meta.color}`} />
                          : <Medal className={`w-5 h-5 ${meta.color}`} />}
                        <h4 className={`text-base font-extrabold ${meta.color}`}>
                          {meta.label} — {r.teamName}
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {r.members.map((m, i) => (
                          <div key={i} className="bg-black/60 border border-zinc-800 rounded-xl p-3 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center text-sm font-extrabold text-black shrink-0">
                              {m.nickname.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="text-white font-semibold text-sm truncate">{m.nickname}</p>
                              <p className="text-gray-500 text-xs">{m.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Individual awards in modal */}
                <div className="border-t border-zinc-800 pt-6">
                  <h4 className="text-base font-extrabold text-white mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    Penghargaan Individu
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selected.individualAwards.map((a, i) => {
                      const cfg = awardConfig[a.category] ?? { icon: <Star className="w-4 h-4" />, color: "text-gray-400", bg: "bg-zinc-800" };
                      return (
                        <div key={i} className="bg-black/60 border border-zinc-800 rounded-xl p-3 text-center">
                          <div className={`${cfg.bg} ${cfg.color} rounded-lg p-2 w-fit mx-auto mb-2`}>
                            {cfg.icon}
                          </div>
                          <p className="text-white font-bold text-sm">{a.playerNickname}</p>
                          <p className={`text-xs font-medium mt-0.5 ${cfg.color}`}>{a.category}</p>
                          <p className="text-gray-500 text-xs">{a.teamName}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
