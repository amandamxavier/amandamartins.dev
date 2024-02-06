"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import contentFile from "@/data/content.json";
import { Icon } from ".";
import styles from "./content-gallery.module.css";

export default function ContentGallery() {
  let max = 5;

  if (typeof window !== "undefined" && window.screen.width <= 480) {
    max = 2;
  }

  const [displayContent, setDisplayContent] = React.useState(max);
  const [content] = React.useState(contentFile);

  const loadMore = () => {
    setDisplayContent(displayContent + max);
  };

  return (
    <ul className={styles.grid}>
      {content.slice(0, displayContent).map((item) => {
        return (
          <li key={item.id}>
            <Link className={styles.card} href={item.link} target="_blank">
              <Image
                className={styles.thumbnail}
                src={item.thumbnail}
                alt={item.alt}
                width={512}
                height={288}
              />
              <h3>{item.type}</h3>
              <h2 className={styles.title}>{item.title}</h2>
              <div className={styles.bottom}>
                <h3>{item.date}</h3>
                <Icon name="arrow" size={16} />
              </div>
            </Link>
          </li>
        );
      })}
      {displayContent < content.length ? (
        <button className={styles.button} onClick={loadMore}>
          <Icon name="more" size={32} />
        </button>
      ) : null}
    </ul>
  );
}
