import Link from "next/link";
import styles from "./social-links.module.css";
import links from "../_data/social-links.json";
import {
  SiDribbble,
  SiLinkedin,
  SiGithub,
  SiBehance,
} from "@icons-pack/react-simple-icons";
import { LuLink2 } from "react-icons/lu";

function getIcon(icon: string) {
  switch (icon) {
    case "dribbble":
      return <SiDribbble size={24} />;
    case "github":
      return <SiGithub size={24} />;
    case "linkedin":
      return <SiLinkedin size={24} />;
    case "behance":
      return <SiBehance size={30} />;
    default:
      return <LuLink2 size={24} />;
  }
}

export default function SocialLinks() {
  return (
    <ul className={styles.ul}>
      {links.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.url} target="_blank">
              {getIcon(item.icon)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
