import type { JobType } from "@/types";

export const jobs: JobType[] = [
  {
    id: "1",
    name: "Empresa 1",
    jobTitle: "Senior Developer",
    logo: "/images/company1-logo.png",
    url: "https://empresa1.com",
    description:
      "Descripción de tu rol en esta empresa. Incluye tecnologías usadas y responsabilidades principales.",
    startDate: "2022-01",
    endDate: null,
  },
  {
    id: "2",
    name: "Empresa 2",
    jobTitle: "Full Stack Developer",
    logo: "/images/company2-logo.png",
    url: "https://empresa2.com",
    description:
      "Descripción de tu rol. Trabajas con React, Node.js, y bases de datos.",
    startDate: "2020-06",
    endDate: "2021-12",
  },
  {
    id: "3",
    name: "Empresa 3",
    jobTitle: "Junior Developer",
    logo: "/images/company3-logo.png",
    url: "https://empresa3.com",
    description:
      "Tu primer trabajo como desarrollador. Aprendiste mucho sobre desarrollo web.",
    startDate: "2019-01",
    endDate: "2020-05",
  },
];
