import React from "react";
import styles from "./Contact.module.css";
import data from "../../data.json"


export const Contact = () => {
  return (
    <footer id="contacts" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={'/assets/contact/emailIcon.png?url.}'} alt="Email icon" />
          <a href={`mailto:${data.gmailId}`}>{data.gmailId}</a>
        </li>
        <li className={styles.link}>
          <img
            src={'/assets/contact/linkedinIcon.png?url.}'}
            alt="LinkedIn icon"
          />
          <a href={data.linkedInUrl} target="_blank" rel="noopener noreferrer">{data.linkedInUrl}</a>
        </li>
        <li className={styles.link}>
          <img src={'/assets/contact/githubIcon.png?url.}'} alt="Github icon" />
          <a href={data.githubUrl} target="_blank" rel="noopener noreferrer">{data.githubUrl}</a>
        </li>
      </ul>
    </footer>
  );
};