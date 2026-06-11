"use client";

import { useState } from "react";
import { scrimResults, type ScrimResult } from "@/data/dummy";
import { Trophy, Medal, Crosshair, Star, Heart, Target, X } from "lucide-react";

const rankColors = ["text-yellow-400", "text-gray-300", "text-orange-500", "text-gray-500"];
const rankBg = ["bg-yellow-500/10", "bg-gray-300/10", "bg-orange-500/10", "bg-gray-500/10"];

const awardIcons: Record<string, React.ReactNode> = {
  "Kill Terbanyak": <Crosshair className="w-5 h-5 text-red-500" />,
  "MVP Mingguan": <Star className="w-5 h-5 text-yellow-400" />,
  "Support Terbaik": <Heart className="w-5 h-5 text-green-500" />,
  "Sniper Terbaik": <Target className="w-5 h-5 text-blue-500" />,
};

export default function HallOfFame() {
  const [selected, setSelected] = useState<ScrimResult | null>(null);
  const latest = scrimResults[0];

  return (
    <section id="hof" className="py-20 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-4">
          Hall Of Fame
        </h2>
        <p className="text-gray-500 text-center mb-2">{latest.week}</p>

        {/* Peringkat Tim ringkas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {latest.teamRankings.map((r) => (
            <button
              key={r.rank}
              onClick={() => setSelected(latest)}
              className={`rounded-xl p-4 text-center border border-zinc-800 ${rankBg[r.rank - 1]} hover:border-yellow-500/50 transition cursor-pointer`}
            >
              <div className="flex justify-center mb-2">
                {r.rank === 1 ? (
                  <Trophy className="w-8 h-8 text-yellow-400" />
                ) : (
                  <Medal className={`w-8 h-8 ${rankColors[r.rank - 1]}`} />
                )}
              </div>
              <h3 className="font-bold text-white">{r.teamName}</h3>
              <p className={`text-sm font-semibold ${rankColors[r.rank - 1]}`}>
                Juara {r.rank}
              </p>
            </button>
          ))}
        </div>

        {/* Penghargaan Individu */}
        <h3 className="text-xl font-semibold text-gray-300 text-center mb-6">
          Penghargaan Individu
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {latest.individualAwards.map((a, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800"
            >
              <div className="flex justify-center mb-2">{awardIcons[a.category]}</div>
              <p className="text-white font-bold text-lg">{a.playerNickname}</p>
              <p className="text-yellow-500 text-xs">{a.category}</p>
              <p className="text-gray-500 text-xs mt-1">{a.teamName}</p>
            </div>
          ))}
        </div>

        {/* Tombol detail */}
        <div className="text-center mt-8">
          <button
            onClick={() => setSelected(latest)}
            className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500/10 transition cursor-pointer"
          >
            Lihat Detail Lengkap
          </button>
        </div>
      </div>

      {/* Modal detail scrim */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
          <div className="bg-zinc-900 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-zinc-700">
            <div className="sticky top-0 bg-zinc-900 flex items-center justify-between p-6 border-b border-zinc-800">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Detail Scrim — {selected.week}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-white transition cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {selected.teamRankings.map((r) => (
                <div key={r.rank}>
                  <div className="flex items-center gap-3 mb-4">
                    {r.rank === 1 ? (
                      <Trophy className="w-6 h-6 text-yellow-400" />
                    ) : (
                      <Medal className={`w-6 h-6 ${rankColors[r.rank - 1]}`} />
                    )}
                    <h4 className={`text-lg font-bold ${rankColors[r.rank - 1]}`}>
                      Juara {r.rank} — {r.teamName}
                    </h4>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {r.members.map((m, i) => (
                      <div
                        key={i}
                        className="bg-black rounded-lg p-3 flex items-center gap-3 border border-zinc-800"
                      >
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-yellow-500 shrink-0">
                          {m.nickname.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-white font-semibold text-sm truncate">
                            {m.nickname}
                          </p>
                          <p className="text-gray-500 text-xs">{m.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Penghargaan di modal */}
              <div className="border-t border-zinc-800 pt-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  Penghargaan Individu
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selected.individualAwards.map((a, i) => (
                    <div
                      key={i}
                      className="bg-black rounded-xl p-4 text-center border border-zinc-800"
                    >
                      <div className="flex justify-center mb-2">
                        {awardIcons[a.category]}
                      </div>
                      <p className="text-white font-bold">{a.playerNickname}</p>
                      <p className="text-yellow-500 text-xs">{a.category}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{a.teamName}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
