import Link from "next/link";

import { Icon } from ".";
import links from "@/data/social-links.json";
import styles from "./social-links.module.css";

export default function SocialLinks() {
  return (
    <ul className={styles.ul}>
      {links.map((item) => {
        return (
          <li key={item.id} className={styles.li}>
            <Link href={item.url} target="_blank">
              <Icon name={item.icon} size={16} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
