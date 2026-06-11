"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#stats", label: "Statistik" },
  { href: "#teams", label: "Tim" },
  { href: "#hof", label: "Hall of Fame" },
  { href: "#gallery", label: "Galeri" },
  { href: "#join", label: "Bergabung" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-zinc-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden ring-2 ring-yellow-500/30 group-hover:ring-yellow-500/70 transition-all duration-300">
              <Image src="/asset/logo.png" alt="Glorious Esport Logo" fill className="object-cover" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-sm sm:text-base text-yellow-500 tracking-widest uppercase">
                Glorious
              </p>
              <p className="text-white text-xs tracking-[0.2em] uppercase font-medium">
                Esport
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
            <a
              href="#join"
              className="ml-4 bg-yellow-500 text-black font-bold text-sm px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-200 shadow-lg shadow-yellow-500/20"
            >
              Daftar
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-yellow-500 transition-colors p-2 rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-72 bg-zinc-950 border-l border-zinc-800 flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-zinc-800">
                <span className="font-extrabold text-yellow-500 tracking-widest text-sm uppercase">
                  Menu
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1 rounded"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/5 transition-all duration-200 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="p-4 border-t border-zinc-800">
                <a
                  href="#join"
                  onClick={handleLinkClick}
                  className="block w-full text-center bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-400 transition-colors"
                >
                  Daftar Sekarang
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
