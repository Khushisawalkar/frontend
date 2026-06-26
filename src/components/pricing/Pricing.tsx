"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Hobby",
    price: "Free",
    description: "Perfect for testing and small side projects.",
    features: [
      "100k events/month",
      "Standard routing",
      "Community support",
      "48-hour data retention",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro (Beta)",
    price: "$0",
    period: "/mo",
    description: "For teams building production-ready AI apps. Currently free during Beta.",
    features: [
      "50M events/month",
      "Adaptive routing AI",
      "Priority email support",
      "30-day data retention",
      "Custom domains",
    ],
    cta: "Get Early Access",
    popular: true,
  },
  {
    name: "Enterprise Sandbox",
    price: "Free",
    description: "Dedicated infrastructure for extreme scale testing.",
    features: [
      "Unlimited events",
      "Dedicated clusters",
      "24/7 Slack support",
      "Infinite data retention",
      "VPC Peering & SSO",
    ],
    cta: "Join Waitlist",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden z-10 border-t border-white/5 bg-[#091014]/50">
      <div className="section max-w-7xl mx-auto px-6">
        
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Predictable <span className="text-[#3CB3A5]">Pricing</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Stop guessing your infrastructure costs. Simple, transparent pricing that scales automatically with your usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col group transition-all duration-500 ease-out hover:-translate-y-4 ${
                plan.popular 
                  ? "bg-[#172B36] border border-[#FFC801]/50 shadow-[0_0_40px_rgba(255,200,1,0.15)] md:-translate-y-4 md:hover:-translate-y-8 z-10" 
                  : "bg-[#172B36]/40 border border-white/10 hover:border-white/20 hover:bg-[#172B36]/60"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFC801] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,200,1,0.5)]">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-white/50 text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black">{plan.price}</span>
                {plan.period && <span className="text-white/50">{plan.period}</span>}
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={18} className={plan.popular ? "text-[#FFC801]" : "text-[#3CB3A5]"} />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/get-started" 
                className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                  plan.popular 
                    ? "bg-[#FFC801] text-black hover:scale-105 shadow-[0_0_20px_rgba(255,200,1,0.3)]" 
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
