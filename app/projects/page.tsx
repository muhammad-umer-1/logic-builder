"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function ProjectsPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handlePlay = () => {
        setShowOverlay(false);
        setIsPlaying(true);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
            <Navbar />

            <main className="pt-32 md:pt-48 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 fade-in">
                    <div className="inline-block mb-4">
                        <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium text-blue-400 border border-blue-500/30">
                            Our Portfolio
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Featured <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Discover our cutting-edge automation solutions and AI-powered workflows
                        that are transforming businesses across industries.
                    </p>
                </div>

                {/* Video Showcase */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-effect border border-slate-700/30 shadow-2xl group mb-20">
                    {/* Ambient Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-slate-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-gradient"></div>

                    <div className="relative h-full w-full bg-slate-950 rounded-3xl overflow-hidden">
                        {/* Google Drive Video Iframe */}
                        <iframe
                            ref={iframeRef}
                            src="https://drive.google.com/file/d/11MvwSafBKh279OkeOblObQNq08otVw7H/preview"
                            className="w-full h-full"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            style={{
                                border: 'none',
                                boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                                display: showOverlay ? 'none' : 'block'
                            }}
                        ></iframe>

                        {/* Thumbnail Placeholder for initial state */}
                        {showOverlay && (
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                                {/* Decorative grid pattern */}
                                <div className="absolute inset-0 grid-pattern opacity-30"></div>

                                {/* Animated background elements */}
                                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>

                                {/* Project title overlay */}
                                <div className="absolute top-8 left-8 z-10">
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                                        Demo Video
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Custom Play Button Overlay */}
                        {showOverlay && (
                            <div
                                onClick={handlePlay}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer transition-all duration-300 hover:bg-black/20 z-10"
                            >
                                <div className="text-center">
                                    <div className="w-28 h-28 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(234,88,12,0.5)] transform hover:scale-110 transition-all duration-300 mx-auto mb-6 pulse-animation">
                                        <Play className="w-12 h-12 text-white fill-white translate-x-1" />
                                    </div>
                                    <p className="text-white/80 text-lg font-medium">Click to play</p>
                                    <p className="text-slate-400 text-sm mt-1">Watch our project showcase</p>
                                </div>
                            </div>
                        )}


                    </div>
                </div>

                {/* Project Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Info Card 1 */}
                    <div className="glass-effect p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/30">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Smart Automation</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Our projects leverage cutting-edge AI to automate complex workflows,
                            saving time and reducing human error.
                        </p>
                    </div>

                    {/* Info Card 2 */}
                    <div className="glass-effect p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/30">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Experience blazing-fast performance with optimized processes
                            that deliver results in milliseconds.
                        </p>
                    </div>

                    {/* Info Card 3 */}
                    <div className="glass-effect p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/30">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Enterprise Ready</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Built with security and scalability in mind, our solutions
                            are ready for enterprise-level deployment.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center fade-in">
                    <div className="glass-effect p-12 rounded-3xl border border-slate-700/30 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Build Your <span className="gradient-text">Dream Project</span>?
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                            Let's collaborate to create something extraordinary. Our team is ready to
                            bring your vision to life with cutting-edge technology.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-lg font-semibold rounded-xl hover:from-slate-500 hover:to-slate-600 transform hover:scale-105 transition-all duration-300 glow-slate border border-slate-500/30"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
