"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./content-section.module.css";
import contentFile from "../_data/content.json";
import { LuArrowUpRight, LuMoreHorizontal } from "react-icons/lu";

export default function Content() {
  const [displayContent, setDisplayContent] = React.useState(5);
  const [content] = React.useState(contentFile);

  const loadMore = () => {
    setDisplayContent(displayContent + 3);
  };

  return (
    <section>
      <h1>Latest Content</h1>
      <ul className={styles.grid}>
        {content.slice(0, displayContent).map((item) => {
          return (
            <li key={item.id}>
              <Link className={styles.card} href={item.link} target="_blank">
                <Image
                  src={item.thumbnail}
                  alt={item.alt}
                  width={512}
                  height={288}
                />
                <h3>{item.type}</h3>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.bottom}>
                  <h3>{item.date}</h3>
                  <LuArrowUpRight size={16} />
                </div>
              </Link>
            </li>
          );
        })}
        {displayContent < content.length ? (
          <button className={styles.button} onClick={loadMore}>
            <LuMoreHorizontal size={32} />
          </button>
        ) : null}
      </ul>
    </section>
  );
}
