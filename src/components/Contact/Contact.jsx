import React from "react";
import styles from "./Contact.module.css";
import data from "../../data.json";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <footer id="contacts" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <MdEmail className={styles.icon} />
          <a href={`mailto:${data.gmailId}`}>{data.gmailId}</a>
        </li>
        <li className={styles.link}>
          <FaLinkedin className={styles.icon} />
          <a href={data.linkedInUrl} target="_blank" rel="noopener noreferrer">
            {data.linkedInUrl}
          </a>
        </li>
        <li className={styles.link}>
          <FaGithub className={styles.icon} />
          <a href={data.githubUrl} target="_blank" rel="noopener noreferrer">
            {data.githubUrl}
          </a>
        </li>
        <li className={styles.link}>
          <MdPhone className={styles.icon} />
          <a href={`tel:${data.mobileNumber}`}>{data.mobileNumber}</a>
        </li>
      </ul>
    </footer>
  );
};