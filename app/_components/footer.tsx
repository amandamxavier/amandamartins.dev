import Link from "next/link";
import { SocialLinks } from "./";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.texts}>
        <p className={styles.copyright}>
          © 2024 Amanda Martins. All rights reserved.
        </p>
        <p className={styles.disclaimer}>
          The material on this site is authorial and may be used within
          instructions. Pictures can be downloaded on{" "}
          <Link
            className={styles.link}
            href="https://unsplash.com/@amandamxavier"
            target="_blank"
          >
            Unsplash
          </Link>{" "}
          or{" "}
          <Link
            className={styles.link}
            href="https://stock.adobe.com/br/contributor/211861137/Amanda"
            target="_blank"
          >
            Adobe Stock
          </Link>
          . The source code is open-source and licensed under MIT license, which
          can be found on{" "}
          <Link
            className={styles.link}
            href="https://github.com/amandamxavier/amandamxavier.dev"
            target="_blank"
          >
            GitHub
          </Link>
          . Icons are sourced from{" "}
          <Link
            className={styles.link}
            href="https://lucide.dev"
            target="_blank"
          >
            Lucide{" "}
          </Link>
          and{" "}
          <Link
            className={styles.link}
            href="https://simpleicons.org/"
            target="_blank"
          >
            Simple Icons
          </Link>
          .
        </p>
      </div>
      <SocialLinks />
    </footer>
  );
}
