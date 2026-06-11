"use client";

import { motion, type Variants } from "framer-motion";
import { Crown, ChevronDown } from "lucide-react";
import { organization } from "@/data/dummy";
import Image from "next/image";

function MemberPhoto({ image, name, size = "md" }: { image: string; name: string; size?: "md" | "lg" }) {
  const sizeClass = size === "lg"
    ? "w-20 h-20 sm:w-24 sm:h-24"
    : "w-14 h-14 sm:w-16 sm:h-16";
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

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Organization() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-80 h-80 bg-yellow-500/3 rounded-full blur-3xl" />
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
            Kepengurusan
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Struktur <span className="text-gradient">Organisasi</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-yellow-500 rounded-full" />
        </motion.div>

        {/* Leader card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-linear-to-br from-yellow-500/15 to-yellow-600/5 border border-yellow-500/30 rounded-2xl p-6 sm:p-8 flex items-center gap-5 w-full max-w-sm shadow-xl shadow-yellow-500/10">
            <MemberPhoto image={organization.leader.image} name={organization.leader.nickname} size="lg" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Crown className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
                  Pimpinan
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {organization.leader.nickname}
              </h3>
              <p className="text-yellow-400/80 font-semibold text-sm mt-0.5">
                {organization.leader.position}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Connector arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <div className="flex flex-col items-center gap-1 text-zinc-600">
            <div className="w-px h-6 bg-zinc-700" />
            <ChevronDown size={16} />
          </div>
        </motion.div>

        {/* Officers label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="text-center text-gray-400 font-semibold text-sm sm:text-base mb-6 tracking-wide uppercase"
        >
          Petugas & Admin
        </motion.p>

        {/* Officers grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {organization.officers.map((member, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-4 sm:p-5 flex items-center gap-4 card-hover"
            >
              <MemberPhoto image={member.image} name={member.nickname} />
              <div>
                <h4 className="font-bold text-white text-base">{member.nickname}</h4>
                <p className="text-yellow-500 text-xs sm:text-sm font-medium mt-0.5">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
