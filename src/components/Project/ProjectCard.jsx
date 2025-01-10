import React from "react";
import styles from "./ProjectCard.module.css";


export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      {source.map((soc,index) => {
        return(
          <div className={styles.links}>
           <a href={soc} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {`Source ${index + 1}`}
           </a>
         </div>
         )
      })
      }
    </div>
  );
};