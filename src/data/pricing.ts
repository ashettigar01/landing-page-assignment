import { IPricing } from "@/types";

export const pricingDetails: IPricing[] = [
  {
    name: "Starter",
    price: 29, // ₹29
    features: [
      "Basic cloud integration",
      "Up to 5 team members",
      "20GB storage",
    ],
  },
  {
    name: "Pro",
    price: 99, // ₹99
    features: [
      "Advanced cloud integration",
      "Up to 20 team members",
      "100GB storage",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Full cloud integration",
      "Unlimited team members",
      "Unlimited storage",
    ],
  },
];
