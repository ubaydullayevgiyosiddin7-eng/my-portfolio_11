export const personalInfo = {
  name: "G'iyosiddin Ubaydullayev",
  role: "AI Engineer & Full-Stack Developer",
  description: "AI, Web va Mobile ilovalar yaratish bo'yicha mutaxassis. Zamonaviy texnologiyalar bilan innovatsion yechimlar yarataman.",
  email: "",
  location: "O'zbekiston",
};

export const socialLinks = {
  github: "https://github.com/ubaydullayevgiyosiddin7-eng",
  linkedin: "https://www.linkedin.com/in/g-iyosiddin-ubaydullayev-52427b382/",
  telegram: "https://t.me/projektlarim",
  telegramUsername: "@UGB121212",
};

// Skill levels: "Beginner" | "Intermediate" | "Advanced" | "Expert"
export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export const skills = {
  ai: [
    { name: "Python", level: "Advanced" as SkillLevel, desc: "ML modellar, API, avtomatlashtirish" },
    { name: "Machine Learning", level: "Advanced" as SkillLevel, desc: "Sklearn, XGBoost, tahlil" },
    { name: "Deep Learning", level: "Intermediate" as SkillLevel, desc: "TensorFlow, PyTorch, CNN" },
    { name: "NLP", level: "Intermediate" as SkillLevel, desc: "Matn tahlili, chatbotlar" },
    { name: "Computer Vision", level: "Intermediate" as SkillLevel, desc: "Rasm tahlili, aniqlash" },
  ],
  web: [
    { name: "React", level: "Intermediate" as SkillLevel, desc: "SPA, Hooks, Context" },
    { name: "TypeScript", level: "Intermediate" as SkillLevel, desc: "Type-safe kod yozish" },
    { name: "Node.js", level: "Intermediate" as SkillLevel, desc: "REST API, Express" },
    { name: "HTML/CSS", level: "Advanced" as SkillLevel, desc: "Semantic, responsive dizayn" },
    { name: "Tailwind CSS", level: "Intermediate" as SkillLevel, desc: "Utility-first CSS" },
  ],
  mobile: [
    { name: "Flutter", level: "Intermediate" as SkillLevel, desc: "Cross-platform ilovalar" },
    { name: "Dart", level: "Intermediate" as SkillLevel, desc: "OOP, async dasturlash" },
  ],
  tools: [
    "Git",
    "Docker",
    "VS Code",
    "Figma",
    "PostgreSQL",
    "MongoDB",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Memora AI",
    description: "Altsgeymer kasalligini MRI tasvirlaridan sun'iy intellekt yordamida aniqlash tizimi. 98% aniqlik bilan 4 ta bosqichni (Sog'lom, Juda yengil, O'rtacha, Og'ir) ajratadi. Grad-CAM vizualizatsiyasi orqali shifokorlarga tashxis qo'yishda yordam beradi.",
    video: "/videos/memora-demo.mp4",
    tags: ["AI", "Deep Learning", "Computer Vision", "Python"],
    github: "",
    demo: "",
    features: [
      "98% aniqlik darajasi",
      "Grad-CAM issiqlik xaritasi",
      "4 bosqichli tashxis",
      "Real-time tahlil",
    ],
  },
  {
    id: 2,
    title: "Smart OCR",
    description: "Hujjatlarni sun'iy intellekt yordamida aqlli tahlil qilish tizimi. Rasm yoki skaner qilingan hujjatdagi ma'lumotlarni o'qib, raqamli formatga o'tkazadi. Sertifikatlar, shartnomalar va boshqa hujjatlarni soniyalar ichida qayta ishlaydi.",
    video: "/videos/ocr-demo.mp4",
    tags: ["AI", "OCR", "NLP", "Python"],
    github: "",
    demo: "",
    features: [
      "Yuqori aniqlikda matn o'qish",
      "Hujjat turini avtomatik aniqlash",
      "Ma'lumotlarni strukturalashtirish",
      "JSON va jadval formatida eksport",
    ],
  },
  {
    id: 3,
    title: "Visara AI",
    description: "Vizual qidiruv tizimi — nomi noma'lum tovarlarni rasmdan qidirish imkoniyati. Marketpleyslardan (OLX, Uzum va h.k.) narxlar va sotuvchilarni topadi. Shopping va texnik ehtiyot qismlar qidirish uchun ideal yechim.",
    video: "/videos/visara-demo.mp4",
    tags: ["AI", "Computer Vision", "Python", "UI/UX"],
    github: "",
    demo: "",
    features: [
      "Rasmdan tovar qidirish",
      "Marketpleyslardan narxlarni taqqoslash",
      "Noma'lum ehtiyot qismlarni aniqlash",
      "Zamonaviy UI/UX dizayn",
    ],
  },
  {
    id: 4,
    title: "🔒 Secret Project",
    description: "Markaziy Osiyo foydalanuvchilari uchun mo'ljallangan mobil ilova. Ko'p tilli qo'llab-quvvatlash (O'zbek, Qozoq, Qirg'iz, Tojik, Turkman) va zamonaviy UI/UX dizayn. Tez orada e'lon qilinadi!",
    images: [
      "/images/secret-app-1.png",
      "/images/secret-app-2.png",
    ],
    tags: ["Mobile", "Flutter", "UI/UX", "Coming Soon"],
    github: "",
    demo: "",
    features: [
      "6 tilda interfeys",
      "Zamonaviy dizayn",
      "Foydalanuvchi profili",
      "Tez orada...",
    ],
    isSecret: true,
  },
];

export const navLinks = [
  { name: "Bosh sahifa", href: "#home" },
  { name: "Haqimda", href: "#about" },
  { name: "Ko'nikmalar", href: "#skills" },
  { name: "Loyihalar", href: "#projects" },
  { name: "Aloqa", href: "#contact" },
];
