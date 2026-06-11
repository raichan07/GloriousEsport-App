import { socialLinks } from "@/data/dummy";
import Image from "next/image";
import {
  MessageCircle,
  Music2,
  Gamepad2,
  Mail,
  MapPin,
  Phone,
  Shield,
  ExternalLink,
} from "lucide-react";

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: socialLinks.whatsapp,
    color: "hover:text-green-400 hover:bg-green-500/10",
    username: "@glorious.esport",
  },
  {
    label: "Instagram",
    icon: IconInstagram,
    href: socialLinks.instagram,
    color: "hover:text-pink-400 hover:bg-pink-500/10",
    username: "@glorious.esport",
  },
  {
    label: "TikTok",
    icon: Music2,
    href: socialLinks.tiktok,
    color: "hover:text-cyan-400 hover:bg-cyan-500/10",
    username: "@glorious.esport",
  },
  {
    label: "YouTube",
    icon: IconYoutube,
    href: socialLinks.youtube,
    color: "hover:text-red-400 hover:bg-red-500/10",
    username: "Glorious Esport",
  },
  {
    label: "Discord",
    icon: Gamepad2,
    href: socialLinks.discord,
    color: "hover:text-indigo-400 hover:bg-indigo-500/10",
    username: "discord.gg/glorious",
  },
  {
    label: "Facebook",
    icon: IconFacebook,
    href: "https://facebook.com/gloriousesport",
    color: "hover:text-blue-400 hover:bg-blue-500/10",
    username: "Glorious Esport",
  },
  {
    label: "Twitter / X",
    icon: IconX,
    href: "https://twitter.com/gloriousesport",
    color: "hover:text-sky-400 hover:bg-sky-500/10",
    username: "@gloriousesport",
  },
];

const quickLinks = [
  { href: "#about", label: "Tentang Kami" },
  { href: "#stats", label: "Statistik" },
  { href: "#teams", label: "Tim" },
  { href: "#hof", label: "Hall of Fame" },
  { href: "#gallery", label: "Galeri" },
  { href: "#join", label: "Gabung Clan" },
];

const gameInfo = [
  { label: "Game", value: "PUBG Mobile" },
  { label: "Region", value: "Indonesia" },
  { label: "Platform", value: "Android & iOS" },
  { label: "Mode", value: "Squad / Duo / Solo" },
  { label: "Server", value: "Asia Pacific" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60">
      {/* Top banner */}
      <div className="bg-yellow-500/5 border-b border-yellow-500/10 py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-yellow-500 font-semibold text-sm">
            Rekrutmen member baru sedang dibuka!
          </p>
          <a
            href="#join"
            className="text-black bg-yellow-500 hover:bg-yellow-400 transition-colors font-bold text-xs px-5 py-1.5 rounded-lg shrink-0"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-yellow-500/30">
              <Image src="/asset/logo.png" alt="Glorious Esport" fill className="object-cover" />
            </div>
            <div>
              <p className="font-extrabold text-yellow-500 tracking-widest text-sm uppercase">Glorious</p>
              <p className="text-gray-400 text-xs tracking-widest uppercase">Esport</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            Komunitas PUBG Mobile Indonesia yang berfokus pada kekompakan,
            persaudaraan, dan prestasi kompetitif. Berdiri sejak 2020.
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
              <span>Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
              <span>admin@gloriousesport.id</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
              <span>+62 812-3456-7890</span>
            </div>
          </div>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-yellow-500" />
            Navigasi
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-500 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-yellow-500 transition-colors shrink-0" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <h4 className="text-white font-bold text-sm uppercase tracking-widest mt-7 mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-yellow-500" />
            Info Game
          </h4>
          <ul className="space-y-2">
            {gameInfo.map((info, i) => (
              <li key={i} className="flex justify-between text-xs gap-2">
                <span className="text-gray-600">{info.label}</span>
                <span className="text-gray-400 font-medium text-right">{info.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 & 4: Social media */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-yellow-500" />
            Media Sosial
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl border border-zinc-800 text-gray-500 transition-all duration-200 group ${s.color} hover:border-zinc-700`}
                >
                  <Icon className="w-4 h-4 shrink-0 transition-colors" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-300 group-hover:text-current transition-colors">{s.label}</p>
                    <p className="text-xs text-gray-600 truncate">{s.username}</p>
                  </div>
                  <ExternalLink className="w-3 h-3 ml-auto shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" />
                </a>
              );
            })}
          </div>

          {/* Note box */}
          <div className="mt-5 bg-yellow-500/5 border border-yellow-500/15 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-500 font-bold text-xs uppercase tracking-wider mb-1">Catatan Penting</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Glorious Esport adalah komunitas independen non-profit. Kami tidak berafiliasi dengan
                  PUBG Corporation atau Krafton. Semua kegiatan bersifat sukarela dan berbasis komunitas.
                  Hati-hati terhadap penipuan yang mengatasnamakan nama kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800/60 px-4 sm:px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-gray-600 text-xs">
            &copy; {year} Glorious Esport. All rights reserved. Dibuat dengan{" "}
            <span className="text-yellow-600">&hearts;</span> untuk komunitas Indonesia.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Kebijakan Privasi</a>
            <span className="text-zinc-700">·</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Syarat & Ketentuan</a>
            <span className="text-zinc-700">·</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Hubungi Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
