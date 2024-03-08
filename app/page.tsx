"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { DotGrid } from "@/components/svg";
import { Button, LucideIcon } from "@/components/ui";

import styles from "./page.module.css";

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.hero}>
        <div className={styles.info}>
          <h1>Welcome! 👋</h1>
          <p>
            I am a <strong>Fullstack Developer</strong> focused on frontend
            development,{" "}
            <em>passionate about enhancing user and developer experiences</em>.
          </p>
          <div className={styles.actions}>
            <Link href="about">
              <Button primary>
                Get to know me
                <LucideIcon name="ArrowRight" size={16} />
              </Button>
            </Link>
            <a href="https://github.com/amandamxavier/resume/raw/main/files/Resume.pdf">
              <Button secondary>
                Download CV
                <LucideIcon name="DownloadCloud" size={16} />
              </Button>
            </a>
          </div>
        </div>
        <div className={styles.profile}>
          <DotGrid />
          <Image
            src="/images/profile.webp"
            alt="Amanda smiling with short curly black hair, beige t-shirt and white background."
            width={265}
            height={265}
          />
        </div>
      </section>
    </motion.main>
  );
}

export default Home;
