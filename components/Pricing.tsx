"use client";

import { Card } from "@nextui-org/react";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$9",
    description: "Perfect for small projects and individuals",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24/7 support",
      "1GB storage",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    description: "Great for growing businesses",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom domain",
    ],
    buttonText: "Try Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large scale organizations",
    features: [
      "Everything in Pro",
      "Custom solutions",
      "Dedicated support",
      "Unlimited storage",
      "API access",
      "SLA",
    ],
    buttonText: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your needs. Always know what you&apos;ll pay.
          </p>
        </div>
        <div className="grid max-w-7xl mx-auto gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col p-8 ${
                tier.highlighted
                  ? "border-2 border-primary scale-105 shadow-xl"
                  : "border border-gray-200"
              }`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="ml-1 text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-gray-500">{tier.description}</p>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-8 w-full py-3 px-4 rounded-lg font-semibold ${
                  tier.highlighted
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {tier.buttonText}
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 
