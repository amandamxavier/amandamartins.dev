import styles from "./page.module.css";

export default function AboutMe() {
  return (
    <section className={styles.section}>
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        aliquet orci elit, id consectetur urna elementum non. Sed ut mi lectus.
        Proin vitae nulla at nisl egestas venenatis. Integer at quam
        ullamcorper, bibendum nulla id, aliquam urna. Vivamus mi massa, pretium
        a velit vitae, eleifend blandit lorem.
      </p>
    </section>
  );
}
