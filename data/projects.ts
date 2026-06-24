import type { ProjectType } from "@/types";

export const projects: ProjectType[] = [
  {
    id: "1",
    name: "Proyecto 1",
    slug: "proyecto-1",
    tagline: "Una breve descripción del proyecto",
    projectUrl: "https://proyecto1.com",
    repository: "https://github.com/tuusuario/proyecto-1",
    logo: "/images/project1-logo.png",
    coverImage: "/images/project1-cover.png",
    description:
      "Descripción detallada del proyecto. Incluye las tecnologías usadas, el problema que resuelve y cualquier característica notable.",
  },
  {
    id: "2",
    name: "Proyecto 2",
    slug: "proyecto-2",
    tagline: "Otra descripción breve",
    projectUrl: "https://proyecto2.com",
    repository: "https://github.com/tuusuario/proyecto-2",
    logo: "/images/project2-logo.png",
    coverImage: "/images/project2-cover.png",
    description:
      "Descripción del segundo proyecto. Este puede ser un proyecto open source o personal.",
  },
  {
    id: "3",
    name: "Proyecto 3",
    slug: "proyecto-3",
    tagline: "Un tercer proyecto interesante",
    projectUrl: "",
    repository: "https://github.com/tuusuario/proyecto-3",
    logo: "/images/project3-logo.png",
    coverImage: "/images/project3-cover.png",
    description:
      "Descripción del tercer proyecto. Actualmente está en desarrollo.",
  },
];
