"use client";

export default function PricingSection() {
    const plans = [
        {
            name: "Starter",
            price: "19",
            description: "Perfect for individuals and small projects",
            features: [
                "Up to 100 workflows",
                "1,000 executions/month",
                "Basic integrations",
                "Email support",
                "Community access"
            ],
            popular: false
        },
        {
            name: "Professional",
            price: "79",
            description: "For growing teams and businesses",
            features: [
                "Unlimited workflows",
                "10,000 executions/month",
                "Advanced integrations",
                "Priority support",
                "Team collaboration",
                "Custom templates",
                "Analytics dashboard"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Advanced features for large organizations",
            features: [
                "Unlimited everything",
                "Dedicated support",
                "Custom integrations",
                "SLA guarantees",
                "Advanced security",
                "On-premise deployment",
                "Training & onboarding"
            ],
            popular: false
        }
    ];

    return (
        <section id="pricing" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl spotlight"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium text-orange-400 border border-orange-500/30">
                            Pricing
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Simple, Transparent
                        <br />
                        <span className="gradient-text">Pricing</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Choose the perfect plan for your needs. All plans include a 14-day free trial.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative group glass-effect p-8 rounded-3xl border transition-all duration-500 transform hover:scale-105 fade-in ${plan.popular
                                ? "border-orange-500 glow-orange-strong"
                                : "border-orange-500/20 hover:border-orange-500/50"
                                }`}
                            style={{
                                animationDelay: `${index * 0.2}s`,
                                opacity: 0
                            }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="mb-6">
                                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "gradient-text" : "text-white"}`}>
                                    {plan.name}
                                </h3>
                                <p className="text-gray-400 text-sm">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                {plan.price === "Custom" ? (
                                    <div className="text-4xl font-bold text-white">Contact Us</div>
                                ) : (
                                    <div className="flex items-baseline">
                                        <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                                        <span className="text-gray-400 ml-2">/month</span>
                                    </div>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg
                                                className="w-5 h-5 text-orange-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                    ? "btn-primary bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 glow-orange"
                                    : "glass-effect text-white border border-orange-500/30 hover:border-orange-500"
                                    }`}
                            >
                                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Money-back Guarantee */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full border border-orange-500/30">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-300 font-medium">30-day money-back guarantee • No credit card required</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
