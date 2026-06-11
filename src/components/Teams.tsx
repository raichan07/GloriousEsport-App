"use client";

import { useState } from "react";
import { teams, type Member } from "@/data/dummy";
import { X } from "lucide-react";

export default function Teams() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const team = selectedTeam ? teams.find((t) => t.id === selectedTeam) : null;
  const activeMembers = team?.members.filter((m) => m.status === "active") ?? [];

  return (
    <section id="teams" className="py-20 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
          Tim Kami
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teams.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTeam(t.id)}
              className="bg-black rounded-xl p-6 text-center border border-zinc-800 hover:border-yellow-500/50 transition cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-zinc-800 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-500">
                  {t.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">{t.name}</h3>
              <p className="text-gray-400 mt-2">{t.totalMember} Member</p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal daftar anggota (active only) */}
      {team && !selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-zinc-900 rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-zinc-700">
            <div className="sticky top-0 bg-zinc-900 flex items-center justify-between p-6 border-b border-zinc-800">
              <div>
                <h3 className="text-2xl font-bold text-white">{team.name}</h3>
                <p className="text-yellow-500 text-sm">
                  {activeMembers.length} Anggota Aktif
                </p>
              </div>
              <button
                onClick={() => setSelectedTeam(null)}
                className="text-gray-400 hover:text-white transition cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 grid sm:grid-cols-2 gap-4">
              {activeMembers.map((m, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMember(m)}
                  className="bg-black rounded-xl p-4 flex items-center gap-4 border border-zinc-800 hover:border-yellow-500/50 transition text-left cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center text-xl font-bold text-yellow-500 shrink-0">
                    {m.nickname.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-white truncate">
                      {m.nickname}
                    </h4>
                    <p className="text-yellow-500 text-xs">{m.role}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{m.rank}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal biodata lengkap */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
          <div className="bg-zinc-900 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-zinc-700">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h3 className="text-xl font-bold text-white">Biodata Anggota</h3>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-400 hover:text-white transition cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Foto & identitas dasar */}
            <div className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center text-4xl font-bold text-yellow-500 mx-auto mb-4">
                {selectedMember.nickname.charAt(0)}
              </div>
              <h4 className="text-2xl font-bold text-white">
                {selectedMember.nickname}
              </h4>
              <p className="text-gray-400 text-sm">{selectedMember.name}</p>
              <span className="inline-block mt-2 bg-yellow-500/10 text-yellow-500 px-4 py-1 rounded-full text-sm font-semibold">
                {selectedMember.role}
              </span>
              <p className="text-gray-500 text-xs mt-3">
                UID: {selectedMember.uid}
              </p>

              {/* Quote */}
              <p className="text-gray-400 italic text-sm mt-4 border-t border-zinc-800 pt-4">
                &ldquo;{selectedMember.quote}&rdquo;
              </p>
            </div>

            {/* Detail grid */}
            <div className="px-6 pb-6 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-black rounded-lg p-3">
                <p className="text-gray-500">Rank</p>
                <p className="text-white font-semibold">{selectedMember.rank}</p>
              </div>
              <div className="bg-black rounded-lg p-3">
                <p className="text-gray-500">Tim</p>
                <p className="text-white font-semibold">
                  {selectedMember.teamName}
                </p>
              </div>
              <div className="bg-black rounded-lg p-3">
                <p className="text-gray-500">Bergabung</p>
                <p className="text-white font-semibold">
                  {selectedMember.joinDate}
                </p>
              </div>
              <div className="bg-black rounded-lg p-3">
                <p className="text-gray-500">WhatsApp</p>
                <p className="text-white font-semibold">
                  {selectedMember.whatsapp}
                </p>
              </div>
              <div className="bg-black rounded-lg p-3">
                <p className="text-gray-500">TikTok</p>
                <p className="text-white font-semibold">
                  {selectedMember.tiktok}
                </p>
              </div>
              <div className="bg-black rounded-lg p-3">
                <p className="text-gray-500">Play Time</p>
                <p className="text-white font-semibold">
                  {selectedMember.playTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
