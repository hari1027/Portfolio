import React from "react";
import styles from "./ProjectCard.module.css";
import { FaCode, FaGlobe, FaMobile, FaDatabase, FaServer, FaRobot } from "react-icons/fa";

const getProjectIcon = (title = "") => {
  const t = title.toLowerCase();
  if (t.includes("mobile") || t.includes("app")) return <FaMobile />;
  if (t.includes("api") || t.includes("server") || t.includes("backend")) return <FaServer />;
  if (t.includes("database") || t.includes("db")) return <FaDatabase />;
  if (t.includes("web") || t.includes("site")) return <FaGlobe />;
  if (t.includes("ai") || t.includes("bot") || t.includes("ml")) return <FaRobot />;
  return <FaCode />;
};

export const ProjectCard = ({
  project: { title, description, skills, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconBanner}>
        <div className={styles.iconWrapper}>
          {getProjectIcon(title)}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {source.map((soc, index) => (
            <a
              key={index}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onClick={(e) => {
                e.stopPropagation();
                window.open(soc.url, "_blank", "noopener,noreferrer");
              }}
            >
              <span className={styles.linkIcon}>&#8599;</span>
              {soc.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};