"use client";

import Image from "next/image";
import styles from "./polaroid-gallery.module.css";
import photos from "../_data/polaroid-photos.json";

let total = 4;

if (typeof window !== "undefined" && window.screen.width <= 480) {
  total = 1;
}

function getDegree(value: number) {
  return value % 2 === 0 ? 10 : -10;
}

export default function PolaroidGallery() {
  return (
    <ul className={styles.ul}>
      {photos.slice(0, total).map((photo) => {
        return (
          <li
            key={photo.id}
            style={{ transform: `rotate(${getDegree(photo.id)}deg)` }}
          >
            <Image
              className={styles.polaroid}
              src={photo.url}
              alt={photo.alt}
              width={192}
              height={192}
            />
          </li>
        );
      })}
    </ul>
  );
}
