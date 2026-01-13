"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 flex justify-center items-center ${scrolled
        ? "top-0 left-0 right-0 w-full py-4 bg-black/80 backdrop-blur-xl border-b border-white/5"
        : "top-6 left-0 right-0"
        }`}
    >
      <div
        className={`${scrolled
          ? "w-full px-6 lg:px-8 max-w-7xl mx-auto"
          : "w-[95%] max-w-7xl bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-4 shadow-2xl shadow-orange-500/5"
          } transition-all duration-500`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/10 group-hover:border-orange-500/50 transition-colors">
              <Image
                src="/logo/logo.jpeg"
                alt="Logic Builder Logo"
                fill
                className="object-cover"
              />
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text tracking-tight group-hover:text-white transition-colors">
                Logic Builder
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/ai-agents"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              AI Agents
            </Link>
            <Link
              href="/services"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            {/* <button className="hidden md:block text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Sign In
            </button> */}
            <Link
              href="/contact"
              className="btn-primary relative px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
