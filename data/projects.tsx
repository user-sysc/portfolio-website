import type { ProjectType } from "@/types";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiBuildings, PiCode } from "react-icons/pi";

export const projectIcons: Record<string, React.ReactNode> = {
  findapet: <HiOutlineLocationMarker />,
  "university-visibility": <PiBuildings />,
  portfolio: <PiCode />,
};

export const projects: ProjectType[] = [
  {
    id: "1",
    name: "Findapet",
    slug: "findapet",
    tagline: "App for reporting and finding lost pets",
    projectUrl: "",
    repository: "https://github.com/JormanNoriega/Findapet",
    logo: "",
    coverImage: "",
    description:
      "App for reporting and finding lost pets. Users can create detailed reports, share on social networks, and receive nearby alerts through an interface designed for immediacy.",
  },
  {
    id: "2",
    name: "University Visibility Platform",
    slug: "university-visibility",
    projectUrl: "",
    repository: "https://github.com/JormanNoriega/Sistemas-Back",
    logo: "",
    coverImage: "",
    tagline: "Backend system connecting the university with external stakeholders",
    description:
      "Backend system that connects the university with external stakeholders. Manages visibility of academic events, research achievements, and collaborations, facilitating interaction with companies and institutions.",
  },
  {
    id: "3",
    name: "Portfolio",
    slug: "portfolio",
    tagline: "Personal developer portfolio built with Next.js",
    projectUrl: "",
    repository: "https://github.com/user-sysc/portfolio-website",
    logo: "",
    coverImage: "",
    description:
      "Personal developer portfolio built with Next.js. Showcases projects, professional experience, and skills. Features dark mode, project detail pages, about section, and blog.",
  },
];
