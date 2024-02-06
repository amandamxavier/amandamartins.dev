"use client";

import Image from "next/image";

import photos from "@/data/photos.json";
import styles from "./polaroid-gallery.module.css";

interface GalleryProps {
  desktop: number;
  mobile: number;
}

const PolaroidGallery: React.FC<GalleryProps> = ({ desktop, mobile }) => {
  let max = desktop;
  if (typeof window !== "undefined" && window.screen.width <= 480) {
    max = mobile;
  }

  function getDegree(value: number) {
    return value % 2 === 0 ? 10 : -10;
  }

  return (
    <ul className={styles.ul}>
      {photos.slice(0, max).map((photo) => {
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
};

export default PolaroidGallery;
