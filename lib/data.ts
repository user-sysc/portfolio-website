import "server-only";
import { profileData } from "@/data/profile";
import { jobs } from "@/data/jobs";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social";
import { navLinks } from "@/data/nav";
import type { JobType, ProjectType, SocialType, NavLinkType, ProfileType } from "@/types";

export async function getProfile(): Promise<ProfileType> {
  return profileData;
}

export async function getJobs(): Promise<JobType[]> {
  return jobs;
}

export async function getProjects(): Promise<ProjectType[]> {
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectType | undefined> {
  return projects.find((p) => p.slug === slug);
}

export async function getSocialLinks(): Promise<SocialType[]> {
  return socialLinks;
}

export async function getNavLinks(): Promise<NavLinkType[]> {
  return navLinks;
}
