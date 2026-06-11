import { socialLinks } from "@/data/dummy";
import { MessageCircle, Camera, Music2, Video, Gamepad2 } from "lucide-react";

const channels = [
  { label: "WhatsApp", icon: MessageCircle, href: socialLinks.whatsapp, color: "hover:text-green-500" },
  { label: "Instagram", icon: Camera, href: socialLinks.instagram, color: "hover:text-pink-500" },
  { label: "TikTok", icon: Music2, href: socialLinks.tiktok, color: "hover:text-cyan-400" },
  { label: "YouTube", icon: Video, href: socialLinks.youtube, color: "hover:text-red-500" },
  { label: "Discord", icon: Gamepad2, href: socialLinks.discord, color: "hover:text-indigo-500" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-10 px-6 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-yellow-500 font-bold text-2xl">GLORIOUS ESPORT</p>
        <p className="text-gray-500 text-sm mt-1">Together We Rise, Together We Win</p>

        <div className="flex justify-center gap-6 mt-6">
          {channels.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <a
                key={i}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                title={ch.label}
                className={`text-gray-500 ${ch.color} transition`}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        <p className="text-gray-600 text-xs mt-6">
          &copy; {new Date().getFullYear()} Glorious Esport. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
