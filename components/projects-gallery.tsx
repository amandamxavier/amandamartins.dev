"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import projectsJSON from "@/data/projects.json";
import { Icon } from ".";
import styles from "./projects-gallery.module.css";

export default function ProjectsGallery() {
  let max = 2;

  if (typeof window !== "undefined" && window.screen.width <= 480) {
    max = 1;
  }

  const [displayProjects, setDisplayProjects] = React.useState(max);
  const [projects] = React.useState(projectsJSON);

  const loadMore = () => {
    setDisplayProjects(displayProjects + max);
  };

  return (
    <ul className={styles.list}>
      {projects.slice(0, displayProjects).map((project) => {
        return (
          <li key={project.id} className={styles.card}>
            <div className={styles.details}>
              <h3>{project.type}</h3>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.stack}>
                {project.stack.map((tech) => {
                  return (
                    <li key={tech.id} className={styles.tech}>
                      <Icon name={tech.icon} size={12} />
                      {tech.name}
                    </li>
                  );
                })}
              </ul>
              <div className={styles.links}>
                {project.site ? (
                  <Link
                    className={styles.link}
                    href={project.site}
                    target="_blank"
                  >
                    <Icon name="site" size={16} />
                    Site
                    <Icon name="arrow" size={16} />
                  </Link>
                ) : null}
                {project.docs ? (
                  <Link
                    className={styles.link}
                    href={project.docs}
                    target="_blank"
                  >
                    <Icon name="docs" size={16} />
                    Docs
                    <Icon name="arrow" size={16} />
                  </Link>
                ) : null}
                {project.github ? (
                  <Link
                    className={styles.link}
                    href={project.github}
                    target="_blank"
                  >
                    <Icon name="github" size={16} />
                    GitHub
                    <Icon name="arrow" size={16} />
                  </Link>
                ) : null}
              </div>
            </div>
            <Image
              className={styles.thumbnail}
              src={project.thumbnail}
              alt={project.alt}
              width={512}
              height={288}
            />
          </li>
        );
      })}
      {displayProjects < projects.length ? (
        <button className={styles.button} onClick={loadMore}>
          <Icon name="more" size={32} />
        </button>
      ) : null}
    </ul>
  );
}
