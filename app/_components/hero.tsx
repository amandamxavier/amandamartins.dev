import styles from "./hero.module.css";
import { SocialLinks } from "./";
import { LuChevronDown, LuMapPin } from "react-icons/lu";

export default function Hero() {
  return (
    <main className={styles.main}>
      <p className={styles.location}>
        <LuMapPin size={24} />
        <span className={styles.city}>São Paulo</span>
      </p>
      <LuChevronDown className={styles.arrow} size={24} />
      <SocialLinks />
    </main>
  );
}
