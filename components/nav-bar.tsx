import Link from "next/link";

import { Icon } from ".";
import styles from "./nav-bar.module.css";

export default function NavBar() {
  return (
    <ul className={styles.ul}>
      <li key={0}>
        <Link className={styles.link} href="/about">
          About
        </Link>
      </li>
      <li key={1}>
        <Link className={styles.link} href="/resume">
          Resume
        </Link>
      </li>
      <li key={2}>
        <Link
          className={styles.link}
          href="https://dev.to/amandamxavier"
          target="_blank"
        >
          Blog
          <Icon name="arrow" size={16} />
        </Link>
      </li>
    </ul>
  );
}
