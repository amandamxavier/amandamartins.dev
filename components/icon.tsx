import { FaAws, FaJava } from "react-icons/fa";
import {
  LuArrowUpRight,
  LuBook,
  LuGlobe,
  LuLink2,
  LuMoreHorizontal,
  LuMoveRight,
} from "react-icons/lu";

import {
  SiBehance,
  SiUnsplash,
  SiAdobe,
  SiBun,
  SiCss3,
  SiCypress,
  SiDaisyui,
  SiDigitalocean,
  SiDocker,
  SiDribbble,
  SiEslint,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLinkedin,
  SiMicrosoftazure,
  SiMongodb,
  SiNextdotjs,
  SiNextra,
  SiNodedotjs,
  SiNpm,
  SiPlaywright,
  SiPostgresql,
  SiPrettier,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiSass,
  SiSpring,
  SiTailwindcss,
  SiThreads,
  SiTurborepo,
  SiTypescript,
  SiVercel,
  SiGodotengine,
  SiUnity,
  SiX,
  SiYarn,
} from "@icons-pack/react-simple-icons";

interface IconProps {
  name: string;
  size: number;
}

const Icon: React.FC<IconProps> = ({ name, size }) => {
  switch (name) {
    case "dribbble":
      return <SiDribbble size={size} />;
    case "unsplash":
      return <SiUnsplash size={size} />;
    case "adobe":
      return <SiAdobe size={size} />;
    case "linkedin":
      return <SiLinkedin size={size} />;
    case "threads":
      return <SiThreads size={size} />;
    case "x":
      return <SiX size={size} />;
    case "github":
      return <SiGithub size={size} />;
    case "gitlab":
      return <SiGitlab size={size} />;
    case "behance":
      return <SiBehance size={size} />;
    case "next":
      return <SiNextdotjs size={size} />;
    case "nextra":
      return <SiNextra size={size} />;
    case "express":
      return <SiExpress size={size} />;
    case "node":
      return <SiNodedotjs size={size} />;
    case "mongodb":
      return <SiMongodb size={size} />;
    case "postgresql":
      return <SiPostgresql size={size} />;
    case "prisma":
      return <SiPrisma size={size} />;
    case "react":
      return <SiReact size={size} />;
    case "typescript":
      return <SiTypescript size={size} />;
    case "javascript":
      return <SiJavascript size={size} />;
    case "html":
      return <SiHtml5 size={size} />;
    case "css":
      return <SiCss3 size={size} />;
    case "sass":
      return <SiSass size={size} />;
    case "tailwindcss":
      return <SiTailwindcss size={size} />;
    case "radix":
      return <SiRadixui size={size} />;
    case "eslint":
      return <SiEslint size={size} />;
    case "prettier":
      return <SiPrettier size={size} />;
    case "bun":
      return <SiBun size={size} />;
    case "npm":
      return <SiNpm size={size} />;
    case "yarn":
      return <SiYarn size={size} />;
    case "jest":
      return <SiJest size={size} />;
    case "playwright":
      return <SiPlaywright size={size} />;
    case "cypress":
      return <SiCypress size={size} />;
    case "git":
      return <SiGit size={size} />;
    case "githubactions":
      return <SiGithubactions size={size} />;
    case "turborepo":
      return <SiTurborepo size={size} />;
    case "vercel":
      return <SiVercel size={size} />;
    case "digitalocean":
      return <SiDigitalocean size={size} />;
    case "python":
      return <SiPython size={size} />;
    case "java":
      return <FaJava size={size} />;
    case "spring":
      return <SiSpring size={size} />;
    case "aws":
      return <FaAws size={size} />;
    case "azure":
      return <SiMicrosoftazure size={size} />;
    case "docker":
      return <SiDocker size={size} />;
    case "daisyui":
      return <SiDaisyui size={size} />;
    case "godot":
      return <SiGodotengine size={size} />;
    case "unity":
      return <SiUnity size={size} />;
    case "site":
      return <LuGlobe size={size} />;
    case "docs":
      return <LuBook size={size} />;
    case "more":
      return <LuMoreHorizontal size={size} />;
    case "arrow":
      return <LuArrowUpRight size={size} />;
    case "right":
      return <LuMoveRight size={size} />;
    default:
      return <LuLink2 size={size} />;
  }
};

export default Icon;
