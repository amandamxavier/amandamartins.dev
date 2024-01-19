import Link from "next/link";
import Image from "next/image";
import styles from "./experience-section.module.css";
import content from "../_data/experience.json";
import { LuArrowUpRight } from "react-icons/lu";

export default function Experience() {
  return (
    <section>
      <h1>Experience</h1>
      {content.map((item) => {
        return (
          <>
            <Link
              key={item.id}
              className={styles.link}
              href={item.link}
              target="_blank"
            >
              <Image src={item.logo} alt={item.alt} width={32} height={32} />
              <p>{item.dates}</p>
              <p>{item.type}</p>
              <p className={styles.title}>
                {item.title}
                <LuArrowUpRight size={16} />
              </p>
            </Link>
            <div className={styles.divider} />
          </>
        );
      })}
    </section>
  );
}
