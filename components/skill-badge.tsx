import { Icon } from "@/components";
import skills from "@/data/skills.json";
import styles from "./skill-badge.module.css";

export default function SkillBadge() {
  return (
    <ul className={styles.list}>
      {skills.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            <Icon name={item.icon} size={16} />
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
