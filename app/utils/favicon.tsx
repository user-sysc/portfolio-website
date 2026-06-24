import Image from "next/image";

type FaviconProps = {
  domain: string;
  alt?: string;
};

function extractDomain(url: string) {
  const match = url.match(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/.\n]+\.[a-z]{2,})(?:\/|$)/i
  );
  if (match) {
    const fullDomain = match[1];
    const parts = fullDomain.split(".");
    if (parts.length >= 2) {
      return parts[0];
    }
  }
  return undefined;
}

export default function Favicon({ domain, alt }: FaviconProps) {
  return (
    <Image
      className="mr-2"
      src={`http://www.google.com/s2/favicons?domain=${domain}`}
      width={17}
      height={17}
      alt={alt ?? extractDomain(domain) ?? ""}
    />
  );
}
