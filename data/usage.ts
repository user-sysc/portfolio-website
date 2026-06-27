export type UsageItem = {
  name: string;
  url: string;
  description: string;
  separator?: string;
};

const DASH = " - ";
const COLON = ": ";

export type UsageCategory = {
  title: string;
  slug: string;
  items: UsageItem[];
};

export const usageData: UsageCategory[] = [
  {
    title: "Technologies",
    slug: "technologies",
    items: [
      { name: "Node.js", url: "https://nodejs.org/en", description: "Backend", separator: DASH },
      { name: "Express", url: "https://expressjs.com/", description: "Backend framework", separator: DASH },
      { name: "Fastapi", url: "https://fastapi.tiangolo.com/", description: "Backend framework", separator: DASH },
      { name: "NestJS", url: "https://nestjs.com/", description: "Backend framework", separator: DASH },
      { name: "React", url: "https://reactjs.org/", description: "UI Library", separator: DASH },
      { name: "Next.js", url: "https://nextjs.org/", description: "React Framework", separator: DASH },
      { name: "MongoDB", url: "https://www.mongodb.com/", description: "Database", separator: DASH },
      { name: "PostgreSQL", url: "https://www.postgresql.org/", description: "Database", separator: DASH },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/", description: "Styling Library", separator: DASH },
      { name: "Expo", url: "https://expo.dev/", description: "React Native Framework", separator: DASH },
      { name: "TypeScript", url: "https://www.typescriptlang.org/", description: "Typed Superset of JavaScript Library", separator: DASH },
      { name: "Vite", url: "https://vitejs.dev/", description: "Frontend Build Tool", separator: DASH },
      { name: "Python", url: "https://www.python.org/", description: "Programming Language", separator: DASH },
    ],
  },
  {
    title: "Tools",
    slug: "tools",
    items: [
      { name: "Visual Studio Code", url: "https://code.visualstudio.com/", description: "Text Editor", separator: COLON },
      { name: "OpenCode", url: "https://opencode.ai/", description: "AI Coding Agent", separator: COLON },
      { name: "Postman", url: "https://www.postman.com", description: "API Testing", separator: COLON },
      { name: "Firefox", url: "https://www.mozilla.org/en-US/firefox/new/", description: "Web Browser", separator: DASH },
      { name: "Google Chrome", url: "https://www.google.com/chrome/", description: "Web Browser", separator: COLON },
      { name: "Obsidian", url: "https://obsidian.md/", description: "Note taking and organization", separator: DASH },
      { name: "Figma", url: "https://www.figma.com/", description: "Design Tool", separator: DASH },
      { name: "Git Bash", url: "https://git-scm.com/", description: "Git Terminal", separator: DASH },
      { name: "Notion", url: "https://www.notion.so/", description: "Note taking and organization", separator: DASH },
    ],
  },
  {
    title: "Platform",
    slug: "platform",
    items: [
      { name: "GitHub", url: "https://github.com", description: "Version control/hosting service", separator: DASH },
      { name: "Spotify", url: "https://www.spotify.com/", description: "Music Streaming", separator: DASH },
      { name: "Steam", url: "https://steamcommunity.com/", description: "Gaming", separator: DASH },
      { name: "Vercel", url: "https://vercel.com/", description: "Hosting and Database", separator: COLON },
      { name: "Netlify", url: "https://netlify.com", description: "Static JamStack hosting", separator: COLON },
      { name: "Supabase", url: "https://supabase.com/", description: "Database", separator: COLON },
      { name: "Insforge", url: "https://insforge.com/", description: "Hosting and Database", separator: COLON },
    ],
  },
];
