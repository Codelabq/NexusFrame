import { CircleCheck } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    priceSuffix: null,
    description: "",
    features: [
      "3 API Connections",
      "Standard Templates",
      "Community Support",
    ],
    cta: "Get Started",
    popular: false,
    enterprise: false,
  },
  {
    name: "Pro",
    price: "$49",
    priceSuffix: "/mo",
    description: "",
    features: [
      "Unlimited API Connections",
      "Custom Component Export",
      "Priority Support",
      "Advanced Analytics",
    ],
    cta: "Go Pro",
    popular: true,
    enterprise: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSuffix: null,
    description: "",
    features: [
      "Custom SLA",
      "Dedicated Infrastructure",
      "On-premise Deployment",
    ],
    cta: "Contact Sales",
    popular: false,
    enterprise: true,
  },
];

export default function Pricing() {
  return (
    <section className="w-full max-w-container-max mx-auto px-md py-xl flex flex-col items-center relative z-10" id="pricing">
      <h2 className="font-display-lg text-display-lg text-on-surface mb-xl text-center">Scale with Nexus</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md w-full">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`glass-panel rounded-lg p-md flex flex-col card-hover-effect ${
              tier.popular ? "glass-panel-glow border-electric-cyan/50" : ""
            } ${tier.popular ? "relative transform md:-translate-y-4" : ""}`}
          >
            {/* "Most Popular" badge */}
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-sm py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary-container/30">
                Most Popular
              </div>
            )}

            {/* Tier Name */}
            <div className={`font-label-mono text-label-mono uppercase mb-xs ${tier.popular ? "text-electric-cyan" : "text-on-surface-variant"}`}>
              {tier.name}
            </div>

            {/* Price */}
            <div className="font-display-lg text-headline-md text-on-surface mb-md">
              {tier.price}
              {tier.priceSuffix && (
                <span className="text-body-md text-on-surface-variant">{tier.priceSuffix}</span>
              )}
            </div>

            {/* Feature List */}
            <ul className="space-y-xs mb-xl flex-grow">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-center font-body-md ${
                    tier.popular ? "text-on-surface" : "text-on-surface-variant"
                  }`}
                >
                  <span className={`material-symbols-outlined mr-xs text-sm ${
                    tier.popular ? "text-electric-cyan" : "text-secondary"
                  }`}>
                    <CircleCheck/>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              className={`w-full py-xs rounded font-label-mono text-label-mono uppercase transition-all duration-300 ${
                tier.popular
                  ? "bg-primary-container text-on-primary-container font-bold btn-primary-glow btn-hover-effect"
                  : "border border-stroke-cyan hover:bg-surface-container-highest hover:border-electric-cyan/50"
              }`}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
