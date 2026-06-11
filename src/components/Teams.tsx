"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teams, type Member } from "@/data/dummy";
import { X, Shield, MapPin, Swords, Crosshair } from "lucide-react";
import Image from "next/image";

function MemberAvatar({ name, image, size = "md" }: { name: string; image: string | null; size?: "sm" | "md" | "lg" }) {
  const initials = name.slice(0, 2).toUpperCase();
  const sizeClass =
    size === "lg" ? "w-20 h-20 text-2xl" :
    size === "md" ? "w-12 h-12 text-base" :
    "w-10 h-10 text-sm";

  if (image) {
    return (
      <div className={`${sizeClass} rounded-full overflow-hidden shrink-0 ring-2 ring-yellow-500/30`}>
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 15%" }}
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClass} rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center font-extrabold text-black shrink-0`}>
      {initials}
    </div>
  );
}

const roleColors: Record<string, string> = {
  IGL: "bg-red-500/15 text-red-400 border-red-500/25",
  Assault: "bg-orange-500/15 text-orange-400 border-orange-500/25",
  Sniper: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  Support: "bg-green-500/15 text-green-400 border-green-500/25",
};

export default function Teams() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const team = selectedTeam ? teams.find((t) => t.id === selectedTeam) : null;
  const activeMembers = team?.members.filter((m) => m.status === "active") ?? [];

  return (
    <section id="teams" className="py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Skuad Kami
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Tim <span className="text-gradient">Glorious</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-yellow-500 rounded-full" />
          <p className="text-gray-500 text-sm sm:text-base mt-4">Klik tim untuk melihat daftar anggota</p>
        </motion.div>

        {/* Team cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {teams.map((t, i) => (
            <motion.button
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelectedTeam(t.id)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-zinc-900/80 rounded-2xl p-5 sm:p-7 text-center border border-zinc-800 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl overflow-hidden border border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors flex items-center justify-center bg-zinc-800">
                {t.logo ? (
                  <Image
                    src={t.logo}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl sm:text-3xl font-extrabold text-yellow-500">
                    {t.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">{t.name}</h3>
              <p className="text-gray-500 text-xs sm:text-sm">{t.totalMember} Anggota</p>
              <div className="mt-3 inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-0.5 text-yellow-500 text-xs font-semibold">
                Lihat Detail
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal: Daftar Anggota */}
      <AnimatePresence>
        {team && !selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setSelectedTeam(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-zinc-900 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-zinc-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 bg-zinc-900/95 backdrop-blur-sm flex items-center justify-between p-5 sm:p-6 border-b border-zinc-800 z-10">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <Shield className="w-4 h-4 text-yellow-500" />
                    <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Tim</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">{team.name}</h3>
                  <p className="text-gray-500 text-sm">{activeMembers.length} anggota aktif</p>
                </div>
                <button
                  onClick={() => setSelectedTeam(null)}
                  className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl cursor-pointer"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Members list */}
              <div className="p-4 sm:p-6 grid sm:grid-cols-2 gap-3">
                {activeMembers.map((m, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setSelectedMember(m)}
                    className="bg-black/60 rounded-xl p-4 flex items-center gap-4 border border-zinc-800 hover:border-yellow-500/40 hover:bg-zinc-800/40 transition-all duration-200 text-left cursor-pointer group"
                  >
                    <MemberAvatar name={m.nickname} image={m.image} />
                    <div className="min-w-0">
                      <h4 className="font-bold text-white truncate">{m.nickname}</h4>
                      <span className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${roleColors[m.role] ?? "bg-zinc-700 text-gray-400 border-zinc-600"}`}>
                        {m.role}
                      </span>
                      <p className="text-gray-600 text-xs mt-0.5 flex items-center gap-1"><MapPin className="w-3 h-3" />{m.asalKota}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal: Biodata Anggota */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-6"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-zinc-900 rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-zinc-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-zinc-800">
                <h3 className="text-lg font-bold text-white">Biodata Anggota</h3>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl cursor-pointer"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Profile */}
              <div className="p-5 sm:p-6 text-center border-b border-zinc-800">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <MemberAvatar name={selectedMember.nickname} image={selectedMember.image} size="lg" />
                    <span className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-zinc-900 ${selectedMember.status === "active" ? "bg-green-500" : "bg-zinc-500"}`} />
                  </div>
                </div>
                <h4 className="text-2xl font-extrabold text-white">{selectedMember.nickname}</h4>
                <p className="text-gray-400 text-sm mt-0.5">{selectedMember.name}</p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${roleColors[selectedMember.role] ?? "bg-zinc-700 text-gray-400 border-zinc-600"}`}>
                    {selectedMember.role}
                  </span>
                  <span className="text-xs text-gray-500 bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3" />{selectedMember.asalKota}
                  </span>
                </div>
                <p className="text-gray-400 italic text-sm mt-4 leading-relaxed">
                  &ldquo;{selectedMember.quote}&rdquo;
                </p>
              </div>

              {/* Info grid */}
              <div className="p-5 sm:p-6 grid grid-cols-2 gap-3">
                {([
                  { icon: Shield,    label: "Tim",           value: selectedMember.teamName,       color: "text-yellow-500" },
                  { icon: MapPin,    label: "Asal Kota",     value: selectedMember.asalKota,       color: "text-blue-400"   },
                  { icon: Swords,    label: "Senjata Favorit",value: selectedMember.favoriteWeapon,color: "text-orange-400" },
                  { icon: Crosshair, label: "Role",          value: selectedMember.role,           color: "text-red-400"    },
                  { label: "Bergabung", value: selectedMember.joinDate,  color: "text-purple-400" },
                  { label: "TikTok",    value: selectedMember.tiktok,    color: "text-cyan-400"   },
                  { label: "UID",       value: selectedMember.uid,       color: "text-gray-400", span: true },
                ] as { icon?: React.ElementType; label: string; value: string; color: string; span?: boolean }[]).map((item, i) => (
                  <div key={i} className={`bg-black/60 border border-zinc-800 rounded-xl p-3.5 ${item.span ? "col-span-2" : ""}`}>
                    <p className="text-gray-500 text-xs mb-1 flex items-center gap-1">
                      {item.icon && <item.icon className="w-3 h-3" />}
                      {item.label}
                    </p>
                    <p className={`font-bold text-sm ${item.color}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
