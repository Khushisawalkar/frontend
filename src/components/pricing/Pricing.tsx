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
    description: "Quiet spaces for testing and small side projects.",
    features: ["100k events/month", "Standard routing", "Community support", "48-hour data retention"],
    cta: "Start Free",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For teams crafting production-ready AI experiences.",
    features: ["50M events/month", "Adaptive routing AI", "Priority email support", "30-day data retention", "Custom domains"],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Dedicated, private infrastructure for extreme scale.",
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
          node.textContent = `${tariff.symbol}${finalPrice}`;
        }
      });
    };

    updatePrices();

    billingToggle?.addEventListener('change', updatePrices);
    currencySelect?.addEventListener('change', updatePrices);

    return () => {
      billingToggle?.removeEventListener('change', updatePrices);
      currencySelect?.removeEventListener('change', updatePrices);
    };
  }, []);

  return (
    <section id="pricing" className="relative py-40 overflow-hidden z-10">
      <div className="section max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium mb-6 tracking-tight text-[#F1F6F4]/95 leading-tight">
            Transparent, <br />
            <span className="text-[#F1F6F4]/60 italic font-serif">graceful pricing.</span>
          </h2>
          <p className="text-[17px] text-[#F1F6F4]/50 leading-relaxed font-light">
            No hidden fees. No sudden spikes. Just a calm, predictable structure that scales quietly alongside your growth.
          </p>

          {/* Pluffymaid Pricing Controls */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 bg-[#F1F6F4]/[0.02] p-3 rounded-full border border-[#F1F6F4]/5 max-w-[480px] mx-auto backdrop-blur-xl">
            
            <div className="flex items-center gap-4 px-4">
              <span className="text-[#F1F6F4]/60 font-medium text-[14px]">Monthly</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" ref={billingToggleRef} className="sr-only peer" />
                <div className="w-12 h-6 bg-[#F1F6F4]/5 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#F1F6F4]/80 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F1F6F4]/20"></div>
              </label>
              <span className="text-[#F1F6F4]/60 font-medium text-[14px] flex items-center gap-2">
                 Annual <span className="text-[10px] font-bold tracking-wider uppercase bg-[#114C5A] text-[#D9E8E2] px-2 py-0.5 rounded-full">Save 20%</span>
              </span>
            </div>

            <div className="w-px h-6 bg-[#F1F6F4]/10 hidden sm:block" />

            <div className="relative pr-4">
              <select ref={currencySelectRef} className="bg-transparent text-[#F1F6F4]/80 text-[14px] font-medium outline-none appearance-none cursor-pointer">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-[2.5rem] p-10 flex flex-col group transition-all duration-[800ms] ease-out ${
                plan.popular 
                  ? "bg-[#F1F6F4]/[0.04] border border-[#F1F6F4]/10 shadow-[0_40px_80px_rgba(0,0,0,0.2)] md:-translate-y-4 hover:-translate-y-6 z-10" 
                  : "bg-[#F1F6F4]/[0.01] border border-[#F1F6F4]/5 hover:border-[#F1F6F4]/10 hover:bg-[#F1F6F4]/[0.02] hover:-translate-y-2"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F1F6F4] text-[#172B36] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-xl">
                  Most Popular
                </div>
              )}

              <h3 className="text-[22px] font-medium mb-3 text-[#F1F6F4]/90">{plan.name}</h3>
              <p className="text-[#F1F6F4]/50 text-[15px] font-light mb-8 h-12 leading-relaxed">{plan.description}</p>
              
              <div className="flex items-baseline gap-1 mb-10 pb-10 border-b border-[#F1F6F4]/5">
                <span 
                  ref={el => { priceNodesRef.current[plan.id] = el; }} 
                  className="text-[3.5rem] font-light text-[#F1F6F4]/95 tracking-tight"
                >
                  $0
                </span>
                <span className="text-[#F1F6F4]/40 font-light text-lg">/mo</span>
              </div>

              <div className="flex-1">
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${plan.popular ? "bg-[#D9E8E2]/20 text-[#D9E8E2]" : "bg-[#F1F6F4]/5 text-[#F1F6F4]/40"}`}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-[#F1F6F4]/60 text-[15px] font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/get-started" 
                className={`w-full py-4 rounded-full text-[15px] font-medium text-center transition-all duration-500 ${
                  plan.popular 
                    ? "bg-[#F1F6F4] text-[#172B36] hover:scale-[1.02] shadow-[0_10px_20px_rgba(255,255,255,0.1)]" 
                    : "bg-[#F1F6F4]/5 text-[#F1F6F4] hover:bg-[#F1F6F4]/10 border border-[#F1F6F4]/5"
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
