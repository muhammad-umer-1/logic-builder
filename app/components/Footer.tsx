"use client";

export default function Footer() {
    return (
        <footer className="relative py-20 border-t border-orange-500/20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-10"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold gradient-text">Logic Builder</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Empowering teams to build intelligent automation workflows without writing a single line of code.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {["twitter", "github", "linkedin", "youtube"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 glass-effect rounded-lg border border-orange-500/20 hover:border-orange-500 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-110"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
                        <ul className="space-y-3">
                            {["Features", "Pricing", "Templates", "Integrations", "API Docs"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            {["About Us", "Careers", "Blog", "Press Kit", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {["Documentation", "Tutorials", "Community", "Support", "Status"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="glass-effect p-8 rounded-2xl border border-orange-500/20 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                            <p className="text-gray-400 text-sm">
                                Get the latest features, tutorials, and automation tips delivered to your inbox.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                            />
                            <button className="btn-primary px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-orange-500/20 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    <p className="text-gray-400 text-sm">
                        © 2026 Logic Builder. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
