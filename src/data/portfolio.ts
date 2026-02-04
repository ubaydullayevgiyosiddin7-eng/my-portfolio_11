// Non-translatable data only - translations are in i18n/locales/

export const socialLinks = {
  github: "https://github.com/ubaydullayevgiyosiddin7-eng",
  linkedin: "https://www.linkedin.com/in/g-iyosiddin-ubaydullayev-52427b382/",
  telegram: "https://t.me/projektlarim",
  telegramUsername: "@UGB121212",
};

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export const skillLevels = {
  ai: ["Advanced", "Advanced", "Intermediate", "Intermediate", "Intermediate"] as SkillLevel[],
  web: ["Intermediate", "Intermediate", "Intermediate", "Advanced", "Intermediate"] as SkillLevel[],
  mobile: ["Intermediate", "Intermediate"] as SkillLevel[],
};

export const tools = ["Git", "Docker", "VS Code", "Figma", "PostgreSQL", "MongoDB"];

export const projectMeta = [
  {
    id: 1,
    video: "/videos/memora-demo.mp4",
    tags: ["AI", "Deep Learning", "Computer Vision", "Python"],
    github: "",
    demo: "",
  },
  {
    id: 2,
    video: "/videos/ocr-demo.mp4",
    tags: ["AI", "OCR", "NLP", "Python"],
    github: "",
    demo: "",
  },
  {
    id: 3,
    video: "/videos/visara-demo.mp4",
    tags: ["AI", "Computer Vision", "Python", "UI/UX"],
    github: "",
    demo: "",
  },
  {
    id: 4,
    images: ["/images/secret-app-1.png", "/images/secret-app-2.png"],
    tags: ["Mobile", "Flutter", "UI/UX", "Coming Soon"],
    github: "",
    demo: "",
    isSecret: true,
  },
];

export const navHrefs = ["#home", "#about", "#skills", "#projects", "#contact"];
