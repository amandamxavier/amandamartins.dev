import Link from "next/link";

import { NavBar } from ".";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link className={styles.logo} href="/">
          <p>🍂</p>
          <p>Amanda Martins</p>
        </Link>
        <Link
          className={styles.bubble}
          href="https://linkedin.com/in/amandamxavier"
          target="_blank"
        >
          Available for hire
        </Link>
      </div>
      <NavBar />
    </header>
  );
}
