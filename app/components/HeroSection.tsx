"use client";
import Link from "next/link";

import { GridScan } from "./GridScan";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Grid Scan Background */}
            <div className="absolute inset-0 z-0">
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#2a2a2a"
                    gridScale={0.1}
                    scanColor="#f97316"
                    scanOpacity={0.4}
                    enablePost={true}
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                    className="w-full h-full"
                />
            </div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl spotlight"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl spotlight" style={{ animationDelay: "2s" }}></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pointer-events-none flex flex-col justify-center min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <div className="pointer-events-auto text-center lg:text-left fade-in">
                        {/* Badge */}
                        {/* <div className="mb-8 inline-block">
                            <div className="glass-effect px-6 py-2 rounded-full border border-orange-500/30 inline-flex items-center gap-2 glow-orange">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                <span className="text-sm text-gray-300 font-medium">
                                    AI-Powered Logic Automation
                                </span>
                            </div>
                        </div> */}

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Build Logic That
                            <br />
                            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                                Thinks For You
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            Create powerful automation workflows with drag-and-drop simplicity.
                            No code required, infinite possibilities.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <Link href="/contact" className="btn-primary group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 glow-orange-strong shadow-2xl min-w-[200px] flex items-center justify-center">
                                Start Building
                                <svg
                                    className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </Link>
                            <Link href="/ai-agents" className="group px-8 py-4 glass-effect text-white text-lg font-semibold rounded-xl border border-orange-500/30 hover:border-orange-500 transform hover:scale-105 transition-all duration-300 min-w-[200px] flex items-center justify-center">
                                Watch Demo
                                <svg
                                    className="inline-block ml-2 w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </Link>
                        </div>

                        {/* Stats - Compact Grid for Split Layout */}
                        <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
                            <div className="glass-effect p-4 rounded-xl border border-orange-500/20">
                                <div className="text-2xl font-bold gradient-text">50K+</div>
                                <div className="text-xs text-gray-400">Active Users</div>
                            </div>
                            <div className="glass-effect p-4 rounded-xl border border-orange-500/20">
                                <div className="text-2xl font-bold gradient-text">2M+</div>
                                <div className="text-xs text-gray-400">Workflows</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Video Content */}
                    <div className="pointer-events-auto relative mt-8 lg:mt-0 fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="relative group">
                            {/* Glow Background */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                            {/* Video Frame */}
                            <div className="relative rounded-2xl overflow-hidden glass-effect border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
                                <video
                                    src="/home video/demo.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto object-cover"
                                />

                                {/* Overlay Tint for Integration */}
                                <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                            </div>

                            {/* Floating UI Elements (Optional Decor) */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pulse-animation pointer-events-auto z-10">
                <svg
                    className="w-6 h-6 text-orange-500/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
