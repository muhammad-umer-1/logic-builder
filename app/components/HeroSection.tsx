"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
        }> = [];

        // Create particles
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2,
            });
        }

        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 107, 26, 0.5)";
                ctx.fill();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(255, 107, 26, ${0.2 - distance / 750})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Particle Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ background: "transparent" }}
            />

            {/* Grid Background */}
            <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl spotlight"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl spotlight" style={{ animationDelay: "2s" }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="fade-in mb-8 inline-block">
                    <div className="glass-effect px-6 py-2 rounded-full border border-orange-500/30 inline-flex items-center gap-2 glow-orange">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        <span className="text-sm text-gray-300 font-medium">
                            AI-Powered Logic Automation
                        </span>
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="fade-in text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ animationDelay: "0.2s" }}>
                    Build Logic That
                    <br />
                    <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                        Thinks For You
                    </span>
                </h1>

                {/* Subheading */}
                <p className="fade-in text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed" style={{ animationDelay: "0.4s" }}>
                    Create powerful automation workflows with drag-and-drop simplicity.
                    No code required, infinite possibilities.
                </p>

                {/* CTA Buttons */}
                <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" style={{ animationDelay: "0.6s" }}>
                    <button className="btn-primary group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 glow-orange-strong shadow-2xl min-w-[200px]">
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
                    </button>
                    <button className="group px-8 py-4 glass-effect text-white text-lg font-semibold rounded-xl border border-orange-500/30 hover:border-orange-500 transform hover:scale-105 transition-all duration-300 min-w-[200px]">
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
                    </button>
                </div>

                {/* Stats */}
                <div className="fade-in grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" style={{ animationDelay: "0.8s" }}>
                    <div className="glass-effect p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
                        <div className="text-sm text-gray-400">Active Users</div>
                    </div>
                    <div className="glass-effect p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="text-4xl font-bold gradient-text mb-2">2M+</div>
                        <div className="text-sm text-gray-400">Workflows Built</div>
                    </div>
                    <div className="glass-effect p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                        <div className="text-sm text-gray-400">Uptime</div>
                    </div>
                    <div className="glass-effect p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Support</div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="fade-in absolute bottom-10 left-1/2 transform -translate-x-1/2 pulse-animation" style={{ animationDelay: "1s" }}>
                    <svg
                        className="w-6 h-6 text-orange-500"
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
            </div>
        </section>
    );
}
