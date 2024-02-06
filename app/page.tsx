import Link from "next/link";

import { ContentGallery, Hero, ProjectsGallery } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <h1>Projects</h1>
        <ProjectsGallery />
      </section>
      <section>
        <h1>Latest content</h1>
        <ContentGallery />
      </section>
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
    </>
  );
}
