import Link from "next/link";

type HashScrollProps = {
  text: React.ReactNode;
  event?: () => void;
};

export const slugify = (id: unknown) => {
  if (!id) return "";
  return id
    .toString()
    .toLowerCase()
    .replaceAll(/[^-\w]+/g, "-")
    .replaceAll(/--+/g, "-")
    .replace(/^-|-$/g, "");
};

export default function HashScroll({ text, event }: HashScrollProps) {
  return (
    <Link
      onClick={event}
      href={`#${slugify(text)}`}
    >
      {text}
    </Link>
  );
}
