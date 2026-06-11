"use client";

import { motion } from "framer-motion";
import { BookOpen, Eye, Target, Globe } from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "Sejarah",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    content:
      "Glorious Esport berdiri pada tahun 2020, berawal dari sekelompok kecil pemain PUBG Mobile yang sering bermain bersama. Seiring waktu, komunitas ini berkembang menjadi salah satu clan terbesar di Indonesia dengan anggota dari berbagai daerah.",
  },
  {
    icon: Eye,
    title: "Visi",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    content:
      "Menjadi komunitas PUBG Mobile terdepan di Indonesia yang dikenal karena sportivitas, kekompakan, dan prestasi di tingkat nasional maupun internasional.",
  },
  {
    icon: Target,
    title: "Misi",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    list: [
      "Membangun lingkungan bermain yang sehat dan kompetitif",
      "Mengadakan latihan rutin dan turnamen internal",
      "Menjalin kerja sama dengan clan dan komunitas lain",
    ],
  },
  {
    icon: Globe,
    title: "Tujuan Komunitas",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    list: [
      "Mencetak pemain-pemain PUBG Mobile yang berprestasi",
      "Memperluas jaringan pertemanan di seluruh Indonesia",
      "Berkontribusi positif dalam scene esports Indonesia",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Mengenal Kami
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Tentang{" "}
            <span className="text-gradient">Glorious Esport</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-yellow-500 rounded-full" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-5 sm:gap-6"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border ${card.border} card-hover group`}
              >
                {/* Icon header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${card.bg} ${card.border} border rounded-xl p-3`}>
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{card.title}</h3>
                </div>

                {/* Content */}
                {card.content && (
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {card.content}
                  </p>
                )}
                {card.list && (
                  <ul className="space-y-2.5">
                    {card.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-400 text-sm sm:text-base">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${card.bg.replace("/10", "")} shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom founding info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center"
        >
          {[
            { label: "Didirikan", value: "2020" },
            { label: "Berbasis", value: "Indonesia" },
            { label: "Fokus Game", value: "PUBG Mobile" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-2xl font-extrabold text-yellow-500">{item.value}</p>
              <p className="text-gray-500 text-sm mt-0.5">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
