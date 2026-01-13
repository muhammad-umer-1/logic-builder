import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Service Data
const services = [
    {
        title: "Strategy Builder",
        description: "Build sophisticated automated strategies to guide your business. Whether you map out your customer journey or optimize internal workflows, our builder gives you the tactical edge you need.",
        image: "/services/tmp79n9d12f.webp",
        align: "right"
    },
    {
        title: "Recommendation Generator",
        description: "The Recommendation Generator analyzes your processes and data to automatically suggest optimizations. It's like having a dedicated consultant monitoring your systems 24/7.",
        image: "/services/tmpaa0b0xtb.webp",
        align: "left"
    },
    {
        title: "Deal Builder",
        description: "Closing deals is an art and a science. Our Deal Builder structure helps you manage and track opportunities with AI-driven insights, ensuring you never miss a critical follow-up or closing signal.",
        image: "/services/tmpjq5m15fl.webp",
        align: "right"
    },
    {
        title: "Outreach",
        description: "Scale your communication without losing the personal touch. Our Outreach tools automate responses and follow-ups while maintaining authentic engagement with your audience.",
        image: "/services/tmpkhmr3zz4.webp",
        align: "left"
    },
    {
        title: "AI Toolkit",
        description: "Unlock a complete suite of AI utilities designed to enhance decision making. From predictive analytics to natural language processing, this toolkit empowers your logic like never before.",
        image: "/services/tmprg_lcuh6.webp",
        align: "right"
    },
    {
        title: "Talent Hub",
        description: "Connect with top-tier automation experts. The Talent Hub helps you find, vet, and collaborate with professionals who can translate your vision into robust automated reality.",
        image: "/services/tmpt8erqnj1.webp",
        align: "left"
    },
    {
        title: "Workflow Library",
        description: "Don't start from scratch. Access a vast library of pre-built, production-ready workflows. Customize them to fit your needs and deploy in minutes, not weeks.",
        image: "/services/tmpzueveik_.webp",
        align: "right"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8">
                <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 fade-in">
                        Our <span className="gradient-text">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed fade-in" style={{ animationDelay: "0.2s" }}>
                        Unlocking the power of automation requires the right tools. We provide a comprehensive ecosystem designed to build, scale, and optimize your business logic effortlessly.
                    </p>
                    <button className="btn-primary px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 glow-orange fade-in" style={{ animationDelay: "0.4s" }}>
                        Get Started
                    </button>
                </div>
            </section>

            {/* "What Makes Us Different" Section */}
            <section className="py-20 px-6 lg:px-8 relative">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 fade-in">
                        What Makes Us <span className="gradient-text">Different</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed fade-in" style={{ animationDelay: "0.2s" }}>
                        We don't just provide tools; we provide intelligence. Our platform integrates deep AI capability with intuitive design, ensuring that even the most complex automation challenges become simple visual tasks.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-10 px-6 lg:px-8 relative">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto space-y-32">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${service.align === "left" ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Side */}
                            <div className="flex-1 text-center lg:text-left fade-in" style={{ animationDelay: "0.2s" }}>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-center lg:justify-start gap-2 group cursor-pointer text-orange-500 hover:text-orange-400 transition-colors">
                                    <span className="font-semibold">Learn More</span>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="flex-1 relative w-full group fade-in">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

                                {/* Image Container with Float Animation */}
                                <div className="relative float-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                                    <div className="relative aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-3xl border border-orange-500/30 glass-effect p-2">
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/50">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA / Form Section */}
            <section className="py-32 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 rounded-3xl overflow-hidden shadow-2xl">

                    {/* Left Frame: Orange Gradient */}
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                See what our AI sounds like — <br /> try it now
                            </h2>
                            <p className="text-orange-100 text-lg mb-8">
                                Experience the difference of Logic Builder's intelligent core.
                                No commitments, just pure performance.
                            </p>
                        </div>
                    </div>

                    {/* Right Frame: Form */}
                    <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">First Name *</label>
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-gray-900" placeholder="" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Email *</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-gray-900" placeholder="" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Phone *</label>
                                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-gray-900" placeholder="" />
                            </div>

                            <div className="flex items-start gap-3 mt-4">
                                <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                                <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed">
                                    I agree to the <a href="#" className="underline hover:text-orange-500">Terms of Service</a> and allow Logic Builder to contact me.
                                </label>
                            </div>

                            <button className="w-full btn-primary bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg mt-4">
                                Get Started Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
