"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const pricingMatrix = {
  baseRates: { hobby: 19, pro: 49, enterprise: 199 },
  multipliers: { monthly: 1, annual: 0.8 },
  tariffs: { 
    USD: { rate: 1, symbol: "$" }, 
    EUR: { rate: 0.92, symbol: "€" }, 
    INR: { rate: 83, symbol: "₹" } 
  }
};

const plans = [
  {
    id: "hobby",
    name: "Hobby",
    description: "Perfect for testing and small side projects.",
    features: ["100k events/month", "Standard routing", "Community support", "48-hour data retention"],
    cta: "Start Free",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For teams building production-ready AI apps.",
    features: ["50M events/month", "Adaptive routing AI", "Priority email support", "30-day data retention", "Custom domains"],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Dedicated infrastructure for extreme scale.",
    features: ["Unlimited events", "Dedicated clusters", "24/7 Slack support", "Infinite data retention", "VPC Peering & SSO"],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const billingToggleRef = useRef<HTMLInputElement>(null);
  const currencySelectRef = useRef<HTMLSelectElement>(null);
  const priceNodesRef = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  useEffect(() => {
    const billingToggle = billingToggleRef.current;
    const currencySelect = currencySelectRef.current;

    const updatePrices = () => {
      if (!billingToggle || !currencySelect) return;

      const isAnnual = billingToggle.checked;
      const currency = currencySelect.value as "USD" | "EUR" | "INR";
      
      const multiplier = isAnnual ? pricingMatrix.multipliers.annual : pricingMatrix.multipliers.monthly;
      const tariff = pricingMatrix.tariffs[currency];

      plans.forEach(plan => {
        const node = priceNodesRef.current[plan.id];
        if (node) {
          const baseRate = pricingMatrix.baseRates[plan.id as keyof typeof pricingMatrix.baseRates];
          const finalPrice = (baseRate * multiplier * tariff.rate).toFixed(0);
          
          // Zero-Render DOM Manipulation Constraint
          node.textContent = `${tariff.symbol}${finalPrice}`;
        }
      });
    };

    // Initial setup
    updatePrices();

    // Attach native event listeners to prevent React state re-renders
    billingToggle?.addEventListener('change', updatePrices);
    currencySelect?.addEventListener('change', updatePrices);

    return () => {
      billingToggle?.removeEventListener('change', updatePrices);
      currencySelect?.removeEventListener('change', updatePrices);
    };
  }, []);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden z-10 border-t border-white/5 bg-[#091014]/50">
      <div className="section max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Predictable <span className="text-[#3CB3A5]">Pricing</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Stop guessing your infrastructure costs. Simple, transparent pricing that scales automatically with your usage.
          </p>

          {/* Pricing Controls (No React State here) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-[#172B36]/50 p-4 rounded-2xl border border-white/10 max-w-lg mx-auto backdrop-blur-md">
            
            <div className="flex items-center gap-3">
              <span className="text-white/80 font-semibold text-sm">Monthly</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" ref={billingToggleRef} className="sr-only peer" />
                <div className="w-14 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#FFC801]"></div>
              </label>
              <span className="text-white/80 font-semibold text-sm flex items-center gap-2">
                 Annual <span className="text-xs bg-[#FFC801]/20 text-[#FFC801] px-2 py-0.5 rounded-full">-20%</span>
              </span>
            </div>

            <div className="w-px h-8 bg-white/10 hidden sm:block" />

            <select ref={currencySelectRef} className="bg-transparent border border-white/20 text-white rounded-lg px-3 py-1.5 outline-none focus:border-[#3CB3A5] font-semibold appearance-none cursor-pointer">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col group transition-all duration-[400ms] ease-in-out hover:-translate-y-4 ${
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
                <span 
                  ref={el => { priceNodesRef.current[plan.id] = el; }} 
                  className="text-5xl font-black text-white"
                >
                  $0
                </span>
                <span className="text-white/50">/mo</span>
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
