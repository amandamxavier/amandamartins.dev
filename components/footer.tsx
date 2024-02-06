import Link from "next/link";

import { SocialLinks } from ".";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.texts}>
        <p className={styles.copyright}>© 2024 Amanda Martins. MIT license.</p>
      </div>
      <SocialLinks />
    </footer>
  );
}
