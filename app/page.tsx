import {
  Hero,
  PolaroidGallery,
  Experience,
  Content,
  Contact,
} from "./_components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <div className={styles.introduction}>
          <h1>Introduction</h1>
          <p>
            I'm a curiosity-driven full-stack developer focused on front-end
            development and with a passion for enhancing user and developer
            experiences.
          </p>
        </div>
        <PolaroidGallery />
      </section>
      <Experience />
      <Content />
      <Contact />
    </>
  );
}
