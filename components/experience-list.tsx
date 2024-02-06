import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components";
import content from "@/data/experience.json";
import styles from "./experience-list.module.css";

export default function ExperienceList() {
  return (
    <ul className={styles.list}>
      {content.map((item) => {
        return (
          <li key={item.id}>
            <Link className={styles.link} href={item.link} target="_blank">
              <Image src={item.logo} alt={item.alt} width={64} height={64} />
              <div>
                <p className={styles.title}>
                  {item.title}
                  <Icon name="arrow" size={16} />
                </p>
                <p className={styles.details}>
                  {item.dates} | {item.type}
                </p>
              </div>
            </Link>
            <div className={styles.divider} />
          </li>
        );
      })}
    </ul>
  );
}
