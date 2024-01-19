import Link from "next/link";
import styles from "./nav-bar.module.css";
import { LuArrowUpRight, LuMail } from "react-icons/lu";

export default function NavBar() {
  return (
    <ul className={styles.ul}>
      <li key={0}>
        <Link
          className={styles.link}
          href="https://dev.to/amandamxavier"
          target="_blank"
        >
          Blog
          <LuArrowUpRight size={16} />
        </Link>
      </li>
      <li key={1}>
        <Link className={styles.cta} href="mailto:hi@amandamartins.dev">
          Get in touch
          <LuMail size={16} />
        </Link>
      </li>
    </ul>
  );
}
