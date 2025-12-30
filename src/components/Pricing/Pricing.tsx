import { IPricing } from "@/types";

export const pricingDetails: IPricing[] = [
  {
    name: "Basic",
    price: "₹1,499",
    features: [
      "Responsive landing page",
      "Clean UI design",
      "Basic SEO optimization",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "₹2,499",
    features: [
      "Everything in Basic",
      "Advanced UI components",
      "Performance optimization",
      "Priority email support",
    ],
  },
  {
    name: "Premium",
    price: "₹3,999",
    features: [
      "Everything in Pro",
      "Custom sections",
      "Deployment support",
      "Dedicated assistance",
    ],
  },
];
