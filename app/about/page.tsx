import { PolaroidGallery } from "@/components";
import tldr from "@/data/tl-dr.json";
import styles from "./page.module.css";

export default function About() {
  return (
    <>
      <section>
        <h1>About me</h1>
        <h2>TL;DR</h2>
        <ul className={styles.tldr}>
          {tldr.map((item) => (
            <li key={item.id}>
              <strong>{item.name}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <PolaroidGallery desktop={4} mobile={1} />
      </section>
      <section>
        <h2>Hey there, nice to meet you!</h2>
        <p>
          My name is Amanda, but you can call me Mandy. I am a Fullstack
          developer focused on frontend development, and currently based in São
          Paulo, Brazil.
        </p>
        <p>
          I graduated with a Systems Analysis and Development degree from Senac
          University Center, diving deep into frontend development through the
          Frontend Career Path course from Scrimba.
        </p>
        <p>
          Also, I am passionate about enhancing user and developer experiences,
          always looking to learn or build something new. You can also find me
          hanging out in tech communities.
        </p>
        <p>
          Casually, I love to watch movies and series, from the latest
          blockbusters to those old black & white gems (don&apos;t judge!),
          playing video games from every console and generation, cooking
          different recipes, especially from Korea, Japan, Italia and France, or
          maybe going to coffee shops, cycling and sometimes (wish was
          frequently) mountain biking.
        </p>
      </section>
    </>
  );
}
