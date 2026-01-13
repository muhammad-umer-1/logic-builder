"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "glass-effect py-4 border-b border-orange-500/20"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Logo Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold gradient-text tracking-tight">
                Logic Builder
              </span>
              <span className="text-xs text-gray-400 tracking-wider">
                BUILD • AUTOMATE • SCALE
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="group relative text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#solutions"
              className="group relative text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#pricing"
              className="group relative text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#docs"
              className="group relative text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Docs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300">
              Sign In
            </button>
            <button className="btn-primary relative px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 glow-orange">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
