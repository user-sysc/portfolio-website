import Image from "next/image";
import RefLink from "@/app/components/shared/RefLink";
import { usageData } from "@/data/usage";

function getFaviconUrl(url: string) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=128`;
}

export default function Usage() {
  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
      </div>

      {usageData.map((category) => (
        <div key={category.slug}>
          <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
            <a href={`#${category.slug}`}>{category.title}</a>
          </h3>

          <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
            {category.items.map((item) => (
              <li key={item.name} className="mb-4">
                <RefLink
                  href={item.url}
                  className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
                >
                  <Image
                    src={getFaviconUrl(item.url)}
                    alt={item.name}
                    width={17}
                    height={17}
                    className="mr-2"
                    unoptimized
                    style={{ width: "auto", height: "auto" }}
                  />
                  {item.name}
                </RefLink>
                {item.separator ?? " - "}{item.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
