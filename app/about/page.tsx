import Image from "next/image";
import type { Metadata } from "next";
import { BiEnvelope, BiSolidQuoteRight } from "react-icons/bi";
import { Slide } from "@/app/animation/Slide";
import Usage from "@/app/components/pages/Usage";
import { getProfile } from "@/lib/data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  metadataBase: new URL(`${siteConfig.url}/about`),
  description: "Learn more about my skills, experience and technical background",
  openGraph: {
    title: `About | ${siteConfig.name}`,
    url: `${siteConfig.url}/about`,
    description: "Learn more about my skills, experience and technical background",
    images: ["/og.png"],
  },
};

export default async function About() {
  const profile = await getProfile();

  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
        <div className="order-2 lg:order-none">
          <Slide>
            <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
              I&apos;m {profile.fullName}. I live in {profile.location}, where
              I write code that works on my machine perfectly.
            </h1>

            <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
              {profile.fullBio
                .split("\n\n")
                .map((paragraph) => paragraph.trim())
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
            </div>

            <blockquote className="relative dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-xl p-6 mt-8">
              <BiSolidQuoteRight
                className="absolute top-4 right-4 text-4xl dark:text-zinc-700 text-zinc-300 opacity-50"
                aria-hidden="true"
              />
              <p className="dark:text-zinc-300 text-zinc-600 leading-relaxed">
                If you think my profile matches what you&apos;re looking for,
                let&apos;s connect! I&apos;m always open to discussing new
                opportunities, collaborating on projects, or simply geeking
                out over backend architecture, AI advancements, and Linux.
                Drop me a line—let&apos;s build something great together!📩
              </p>
            </blockquote>
          </Slide>

          <Slide delay={0.2} className="mt-16">
            <Usage />
          </Slide>
        </div>

        <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
          <Slide delay={0.1}>
            <div className="sticky top-10">
              <Image
                className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                src={profile.profileImage.image}
                width={400}
                height={400}
                quality={100}
                alt={profile.profileImage.alt}
                placeholder="empty"
              />

              <div className="flex flex-col text-center gap-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center gap-x-2 hover:text-primary-color"
                >
                  <BiEnvelope className="text-lg" />
                  {profile.email}
                </a>
              </div>
            </div>
          </Slide>
        </aside>
      </section>
    </main>
  );
}
