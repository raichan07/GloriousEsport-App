"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, UserCheck, Shield, Trophy, Gamepad2 } from "lucide-react";
import { stats } from "@/data/dummy";

const statItems = [
  { icon: Users, label: "Total Member", value: stats.totalMember, suffix: "+", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: UserCheck, label: "Member Aktif", value: stats.activeMember, suffix: "+", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Shield, label: "Total Tim", value: stats.totalTeam, suffix: "", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Trophy, label: "Pencapaian", value: stats.achievement, suffix: "+", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Gamepad2, label: "Event Diikuti", value: stats.totalEvent, suffix: "+", color: "text-purple-400", bg: "bg-purple-500/10" },
];

function CountUp({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-4 sm:px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-yellow-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Pencapaian Kami
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Angka <span className="text-gradient">Bicara</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {statItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 sm:p-6 text-center card-hover group"
              >
                <div className={`${item.bg} rounded-xl p-3 w-fit mx-auto mb-4`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                </div>
                <p className={`text-3xl sm:text-4xl font-extrabold ${item.color} tabular-nums`}>
                  <CountUp target={item.value} />
                  {item.suffix}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-2 font-medium">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Divider line */}
        <div className="mt-12 section-divider" />
      </div>
    </section>
  );
}
