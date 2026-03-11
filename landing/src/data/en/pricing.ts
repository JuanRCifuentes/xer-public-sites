export const pricingLabels = {
  title: "Pricing that grows with you",
  subtitle: "Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.",
  monthly: "Monthly",
  annually: "Annually",
  billedMonthly: "Billed monthly",
  billedAnnually: "Billed annually",
  buyButton: "Buy this plan",
  currency: "USD",
  featureComparison: "Feature comparison",
  faqTitle: "Frequently asked questions",
};

export const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    description: "Everything you need to get started.",
    monthlyPrice: "$19",
    annualPrice: "$199",
    featured: false,
    highlights: [
      "Custom domains",
      "Edge content delivery",
      "Advanced analytics",
    ],
  },
  {
    name: "Scale",
    id: "tier-scale",
    description: "Added flexibility at scale.",
    monthlyPrice: "$99",
    annualPrice: "$999",
    featured: true,
    highlights: [
      "Custom domains",
      "Edge content delivery",
      "Advanced analytics",
      "Quarterly workshops",
      "Single sign-on (SSO)",
      "Priority phone support",
    ],
  },
  {
    name: "Growth",
    id: "tier-growth",
    description: "All the extras for your growing team.",
    monthlyPrice: "$49",
    annualPrice: "$499",
    featured: false,
    highlights: [
      "Custom domains",
      "Edge content delivery",
      "Advanced analytics",
      "Quarterly workshops",
    ],
  },
];

export const featureSections = [
  {
    name: "Features",
    features: [
      { name: "Edge content delivery", starter: true, scale: true, growth: true },
      { name: "Custom domains", starter: "1", scale: "Unlimited", growth: "3" },
      { name: "Team members", starter: "3", scale: "Unlimited", growth: "20" },
      { name: "Single sign-on (SSO)", starter: false, scale: true, growth: false },
    ],
  },
  {
    name: "Reporting",
    features: [
      { name: "Advanced analytics", starter: true, scale: true, growth: true },
      { name: "Basic reports", starter: false, scale: true, growth: true },
      { name: "Professional reports", starter: false, scale: true, growth: false },
      { name: "Custom report builder", starter: false, scale: true, growth: false },
    ],
  },
  {
    name: "Support",
    features: [
      { name: "24/7 online support", starter: true, scale: true, growth: true },
      { name: "Quarterly workshops", starter: false, scale: true, growth: true },
      { name: "Priority phone support", starter: false, scale: true, growth: false },
      { name: "1:1 onboarding tour", starter: false, scale: true, growth: false },
    ],
  },
];

export const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer: "Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.",
  },
  {
    question: "Why did the invisible man turn down the job offer?",
    answer: "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
  },
];
