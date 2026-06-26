"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const pricingMatrix = {
  baseRates: { hobby: 0, pro: 0, enterprise: 0 },
  multipliers: { monthly: 1, annual: 0.8 },
  tariffs: {
    USD: { rate: 1, symbol: "$" },
    EUR: { rate: 0.92, symbol: "€" },
    INR: { rate: 83, symbol: "₹" },
  },
};

type Currency = keyof typeof pricingMatrix.tariffs;
type PlanId = keyof typeof pricingMatrix.baseRates;

const plans: {
  id: PlanId;
  name: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}[] = [
  {
    id: "hobby",
    name: "Free Trial",
    description: "Quiet spaces for testing and small side projects.",
    features: ["100k events/month", "Standard routing", "Community support", "48-hour data retention"],
    cta: "Start Free",
    popular: true,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState<Currency>("USD");

  const priceFor = useMemo(() => {
    return (planId: PlanId) => {
      return `$0`;
    };
  }, [isAnnual, currency]);

  return (
    <section id="pricing" className="relative py-40 overflow-hidden z-10">
      <div className="section max-w-7xl mx-auto px-6">

        {/* Editorial Header */}
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium mb-6 tracking-tight text-arctic/95 leading-tight">
            Transparent, <br />
            <span className="text-arctic/60 italic font-serif">graceful pricing.</span>
          </h2>
          <p className="text-[17px] text-arctic/50 leading-relaxed font-light">
            No hidden fees. No sudden spikes. Just a calm, predictable structure that scales quietly alongside your growth.
          </p>
        </div>

        <div className="flex justify-center max-w-xl mx-auto">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[2.5rem] p-12 flex flex-col group transition-all duration-[800ms] ease-out w-full bg-arctic/[0.04] border border-arctic/10 shadow-[0_40px_80px_rgba(0,0,0,0.2)]`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-arctic text-oceanic px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-xl">
                Get Started Today
              </div>

              <h3 className="text-[22px] font-medium mb-3 text-arctic/90">{plan.name}</h3>
              <p className="text-arctic/50 text-[15px] font-light mb-8 h-12 leading-relaxed">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-10 pb-10 border-b border-arctic/5">
                <span className="text-[3.5rem] font-light text-arctic/95 tracking-tight">
                  {priceFor(plan.id)}
                </span>
                <span className="text-arctic/40 font-light text-lg">/mo</span>
              </div>

              <div className="flex-1">
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center bg-mystic/20 text-mystic`}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-arctic/60 text-[15px] font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/get-started"
                className={`w-full py-4 rounded-full text-[15px] font-medium text-center transition-all duration-500 bg-arctic text-oceanic hover:scale-[1.02] shadow-[0_10px_20px_rgba(255,255,255,0.1)]`}
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
