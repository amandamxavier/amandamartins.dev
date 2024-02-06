import Link from "next/link";

import { Icon, PolaroidGallery } from "@/components";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div>
          <h1>Hi there! 👋</h1>
          <p>
            I am a fullstack developer focused on frontend development,
            passionate about enhancing user and developer experiences.
          </p>
        </div>
        <div className={styles.links}>
          <Link href={"https://linkedin.com/in/amandamxavier"} target="_blank">
            <Icon name="linkedin" size={16} />
            Connect on LinkedIn
            <Icon name="arrow" size={16} />
          </Link>
          <Link href={"https://github.com/amandamxavier"} target="_blank">
            <Icon name="github" size={16} />
            Check my GitHub
            <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div className={styles.cta}>
          <Link href={"/about"}>
            Get to know me
            <Icon name="right" size={16} />
          </Link>
        </div>
      </div>
      <div className={styles.photo}>
        <PolaroidGallery desktop={2} mobile={1} />
      </div>
    </main>
  );
}
