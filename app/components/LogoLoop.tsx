"use client";

import Image from 'next/image';

const logos = [
    {
        name: 'ElevenLabs',
        url: '/logos/eleven_labs-removebg-preview.png'
    },
    {
        name: 'GoHighLevel',
        url: '/logos/ghl-removebg-preview.png'
    },
    {
        name: 'Instantly',
        url: '/logos/instatnly-removebg-preview.png'
    },
    {
        name: 'Loveable',
        url: '/logos/loveable-removebg-preview.png'
    },
    {
        name: 'ManyChat',
        url: '/logos/many_chat-removebg-preview.png'
    },
    {
        name: 'Perplexity',
        url: '/logos/perplexity-removebg-preview.png'
    },
    {
        name: 'Submagic',
        url: '/logos/submagic-removebg-preview.png'
    },
];

export default function LogoLoop() {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <section className="py-24 overflow-hidden relative w-full bg-slate-950">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
                {/* Animated accent orbs */}
                <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Section Header */}
            <div className="container mx-auto px-4 mb-16 text-center relative z-10">
                <span className="inline-flex items-center gap-2.5 py-2 px-5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm text-sm font-bold text-blue-300 tracking-widest uppercase mb-6 shadow-lg shadow-blue-500/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50" />
                    ECOSYSTEM
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
                    Powered by{' '}
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                        World-Class AI
                    </span>
                </h3>
                <p className="mt-5 text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Seamlessly integrated with the tools that power modern automation
                </p>
            </div>

            {/* Logo Carousel */}
            <div className="relative flex overflow-hidden w-full">
                {/* Gradient Fades - stronger for better edge blur */}
                <div className="absolute left-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent z-20 pointer-events-none" />

                {/* Scrolling Track */}
                <div className="flex shrink-0 items-center gap-6 md:gap-8 animate-scroll pl-6">
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="group relative flex-shrink-0"
                        >
                            {/* Outer Glow - intense on hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 via-cyan-400/50 to-blue-600/50 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            {/* Logo Container - BIGGER and BOLDER */}
                            <div className="relative w-52 h-28 md:w-60 md:h-32 flex items-center justify-center 
                                bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90
                                rounded-2xl overflow-hidden backdrop-blur-xl 
                                border border-slate-600/30
                                shadow-[0_10px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]
                                group-hover:border-blue-400/50 
                                group-hover:shadow-[0_15px_50px_rgba(59,130,246,0.25),inset_0_1px_0_rgba(255,255,255,0.15)]
                                transition-all duration-500 ease-out
                                group-hover:scale-[1.08] group-hover:-translate-y-2"
                            >
                                {/* Inner light glow for logo visibility */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/15 transition-all duration-500" />

                                {/* Logo Image - MAX SIZE and visibility */}
                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    width={180}
                                    height={72}
                                    unoptimized
                                    className="relative z-10 object-contain w-[160px] h-[64px] md:w-[180px] md:h-[72px]
                                        drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]
                                        group-hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.25)]
                                        transition-all duration-500 ease-out
                                        group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Duplicate for seamless loop */}
                <div className="flex shrink-0 items-center gap-6 md:gap-8 animate-scroll pl-6" aria-hidden="true">
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-dup-${index}`}
                            className="group relative flex-shrink-0"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 via-cyan-400/50 to-blue-600/50 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            <div className="relative w-52 h-28 md:w-60 md:h-32 flex items-center justify-center 
                                bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90
                                rounded-2xl overflow-hidden backdrop-blur-xl 
                                border border-slate-600/30
                                shadow-[0_10px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]
                                group-hover:border-blue-400/50 
                                group-hover:shadow-[0_15px_50px_rgba(59,130,246,0.25),inset_0_1px_0_rgba(255,255,255,0.15)]
                                transition-all duration-500 ease-out
                                group-hover:scale-[1.08] group-hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/15 transition-all duration-500" />

                                <Image
                                    src={logo.url}
                                    alt={logo.name}
                                    width={180}
                                    height={72}
                                    unoptimized
                                    className="relative z-10 object-contain w-[160px] h-[64px] md:w-[180px] md:h-[72px]
                                        drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]
                                        group-hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.25)]
                                        transition-all duration-500 ease-out
                                        group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

