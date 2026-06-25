import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import type { SocialType } from "@/types";

export const socialLinks: SocialType[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/user-sysc",
    icon: BiLogoGithub,
    status: "social",
  },
  {
    id: 2,
    name: "X",
    url: "https://x.com/Juliocrm_",
    icon: FaSquareXTwitter,
    status: "social",
  },
  {
    id: 3,
    name: "Linkedin",
    url: "https://linkedin.com/in/juliocrm-",
    icon: BiLogoLinkedinSquare,
    status: "social",
  },
];
