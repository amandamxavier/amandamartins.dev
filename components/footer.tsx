import { SocialLinks } from "@/components";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Amanda Martins.</p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
