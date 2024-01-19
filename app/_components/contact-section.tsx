import Link from "next/link";
import styles from "./contact-section.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h1>Want to work together?</h1>
      <p>
        Reach me via <Link href="mailto:hi@amandamartins.dev">email</Link> or{" "}
        <Link href="https://linkedin.com/in/amandamxavier" target="_blank">
          LinkedIn
        </Link>
        , so we can discuss what amazing things we can do!
      </p>
    </section>
  );
}