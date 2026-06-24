export const siteConfig = {
  name: "Tu Nombre",
  shortName: "Tu Nombre",
  title: "Tu Nombre | Software Developer",
  description:
    "Tu Nombre is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  url: "https://tudominio.com",
  ogImage: "/og.png",
  locale: "en-US",
  keywords: [
    "software developer",
    "portfolio",
    "web development",
    "technical writer",
  ],
  links: {
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario",
    twitter: "https://twitter.com/tuusuario",
  },
} as const;

export type SiteConfig = typeof siteConfig;
