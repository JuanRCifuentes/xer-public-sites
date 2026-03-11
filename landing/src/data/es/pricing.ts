export const pricingLabels = {
  title: "Precios que crecen contigo",
  subtitle: "Elige un plan accesible con las mejores funciones para captar a tu audiencia, fidelizar clientes e impulsar ventas.",
  monthly: "Mensual",
  annually: "Anual",
  billedMonthly: "Cobro mensual",
  billedAnnually: "Cobro anual",
  buyButton: "Comprar este plan",
  currency: "USD",
  featureComparison: "Comparación de funciones",
  faqTitle: "Preguntas frecuentes",
};

export const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    description: "Todo lo que necesitas para empezar.",
    monthlyPrice: "$19",
    annualPrice: "$199",
    featured: false,
    highlights: [
      "Dominios personalizados",
      "Entrega de contenido en el borde",
      "Analítica avanzada",
    ],
  },
  {
    name: "Scale",
    id: "tier-scale",
    description: "Flexibilidad adicional a gran escala.",
    monthlyPrice: "$99",
    annualPrice: "$999",
    featured: true,
    highlights: [
      "Dominios personalizados",
      "Entrega de contenido en el borde",
      "Analítica avanzada",
      "Talleres trimestrales",
      "Inicio de sesión único (SSO)",
      "Soporte telefónico prioritario",
    ],
  },
  {
    name: "Growth",
    id: "tier-growth",
    description: "Todo lo extra para tu equipo en crecimiento.",
    monthlyPrice: "$49",
    annualPrice: "$499",
    featured: false,
    highlights: [
      "Dominios personalizados",
      "Entrega de contenido en el borde",
      "Analítica avanzada",
      "Talleres trimestrales",
    ],
  },
];

export const featureSections = [
  {
    name: "Funciones",
    features: [
      { name: "Entrega de contenido en el borde", starter: true, scale: true, growth: true },
      { name: "Dominios personalizados", starter: "1", scale: "Ilimitado", growth: "3" },
      { name: "Miembros del equipo", starter: "3", scale: "Ilimitado", growth: "20" },
      { name: "Inicio de sesión único (SSO)", starter: false, scale: true, growth: false },
    ],
  },
  {
    name: "Reportes",
    features: [
      { name: "Analítica avanzada", starter: true, scale: true, growth: true },
      { name: "Reportes básicos", starter: false, scale: true, growth: true },
      { name: "Reportes profesionales", starter: false, scale: true, growth: false },
      { name: "Constructor de reportes", starter: false, scale: true, growth: false },
    ],
  },
  {
    name: "Soporte",
    features: [
      { name: "Soporte en línea 24/7", starter: true, scale: true, growth: true },
      { name: "Talleres trimestrales", starter: false, scale: true, growth: true },
      { name: "Soporte telefónico prioritario", starter: false, scale: true, growth: false },
      { name: "Tour de incorporación 1:1", starter: false, scale: true, growth: false },
    ],
  },
];

export const faqs = [
  {
    question: "¿Cuál es lo mejor de Suiza?",
    answer: "No lo sé, pero la bandera es una gran ventaja. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "¿Cómo se hace agua bendita?",
    answer: "Le hierves el demonio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
  },
  {
    question: "¿Cómo llamas a alguien sin cuerpo y sin nariz?",
    answer: "Nadie lo sabe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "¿Por qué nunca ves elefantes escondidos en árboles?",
    answer: "Porque son muy buenos haciéndolo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "¿Por qué no puedes oír a un pterodáctilo ir al baño?",
    answer: "Porque la p es silenciosa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.",
  },
  {
    question: "¿Por qué el hombre invisible rechazó la oferta de trabajo?",
    answer: "No se veía haciéndolo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
  },
];
