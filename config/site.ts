export const siteConfig = {
  name: "Juliocrm",
  shortName: "Juliocrm",
  title: "Juliocrm | Software Developer",
  description:
    "Juliocrm is a Software Developer who is passionate about building solutions and contributing to open source communities",
  url: "https://tudominio.com",
  ogImage: "/og.png",
  locale: "en-US",
  keywords: [
    "software developer",
    "portfolio",
    "web development",
  ],
  links: {
    github: "https://github.com/user-sysc",
    linkedin: "https://linkedin.com/in/juliocrm-",
    twitter: "https://x.com/Juliocrm_",
  },
} as const;

export type SiteConfig = typeof siteConfig;
