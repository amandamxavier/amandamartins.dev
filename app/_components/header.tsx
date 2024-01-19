import Link from "next/link";
import Image from "next/image";
import { NavBar } from "./";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link className={styles.logo} href="/">
          <Image
            src="/assets/images/logo/logo.svg"
            alt='Initials "am" written with Pacifico font'
            width={64}
            height={32}
          />
          <p>| Fullstack Developer</p>
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
