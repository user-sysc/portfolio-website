import Image from "next/image";
import type { Metadata } from "next";
import { Slide } from "@/app/animation/Slide";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { getProjectBySlug, getProjects } from "@/lib/data";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{
    project: string;
  }>;
};

const fallbackImage = "/og.png";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { project: slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Project`,
    metadataBase: new URL(`${siteConfig.url}/projects/${project.slug}`),
    description: project.tagline,
    openGraph: {
      images: project.coverImage || fallbackImage,
      url: `${siteConfig.url}/projects/${project.slug}`,
      title: project.name,
      description: project.tagline,
    },
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    project: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { project: slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="max-w-6xl mx-auto lg:px-16 px-8">
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold">Project not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between flex-wrap mb-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-md">
              {project.name}
            </h1>

            <div className="flex items-center gap-x-2">
              <a
                href={project.projectUrl}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                  !project.projectUrl
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <BiLinkExternal aria-hidden="true" />
                {project.projectUrl ? "Live URL" : "Coming Soon"}
              </a>

              <a
                href={project.repository}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                  !project.repository
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <BiLogoGithub aria-hidden="true" />
                {project.repository ? "GitHub" : "No Repo"}
              </a>
            </div>
          </div>

          <div className="relative w-full h-40 pt-[52.5%]">
            <Image
              className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
              fill
              src={project.coverImage || fallbackImage}
              alt={project.name}
              quality={100}
            />
          </div>

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed whitespace-pre-line">
            {project.description}
          </div>
        </div>
      </Slide>
    </main>
  );
}
