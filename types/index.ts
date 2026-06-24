import type { IconType } from "react-icons";

export type ProfileType = {
  fullName: string;
  headline: string;
  profileImage: {
    image: string;
    lqip: string;
    alt: string;
  };
  shortBio: string;
  email: string;
  fullBio: string;
  location: string;
  resumeURL: string;
  og: string;
  usage: string;
};

export type JobType = {
  id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string | null;
};

export type ProjectType = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  repository: string;
  logo: string;
  coverImage: string;
  description: string;
};

export type SocialType = {
  id: number;
  name: string;
  url: string;
  icon: IconType;
  status: "social" | "publication";
};

export type NavLinkType = {
  title: string;
  href: string;
};
