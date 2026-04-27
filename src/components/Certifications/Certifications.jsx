import React from "react";
import styles from "./Certifications.module.css";
import { GrCertificate } from "react-icons/gr";

const certifications = [
  {
    title: "Certified Full-Stack Developer",
    issuer: "Capgemini",
    url: null,
    icon: <GrCertificate />,
    color: "#0070AD",
    tag: "Professional",
  },
  {
    title: "AWS Certified Developer",
    issuer: "Udemy",
    url: "https://ude.my/UC-e23a2a23-9000-4124-88e1-254233bb1c66",
    icon: <GrCertificate />,
    color: "#FF9900",
    tag: "Cloud",
  },
  {
    title: "Mastering System Design",
    issuer: "Udemy",
    url: "https://ude.my/UC-66b3b2e3-4a88-4654-9acc-dc53675b038d",
    icon: <GrCertificate />,
    color: "#A435F0",
    tag: "Architecture",
  },
  {
    title: "Docker with Swarm and Kubernetes",
    issuer: "Udemy",
    url: "https://ude.my/UC-da3f70de-c8dd-4f9e-8863-6a81e1f2f7e6",
    icon: <GrCertificate />,
    color: "#2496ED",
    tag: "DevOps",
  },
  {
    title: "Introduction to Programming using Python",
    issuer: "Harvard University",
    url: "https://cs50.harvard.edu/certificates/547f42c5-e3df-4487-a1b5-2a9d4d5be273",
    icon: <GrCertificate />,
    color: "#3776AB",
    tag: "CS50",
  },
];

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.grid}>
        {certifications.map((cert, id) => (
          <div key={id} className={styles.card}>
            <div
              className={styles.iconBanner}
              style={{ "--cert-color": cert.color }}
            >
              <div className={styles.iconCircle} style={{ "--cert-color": cert.color }}>
                {cert.icon}
              </div>
              <span className={styles.tag}>{cert.tag}</span>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.verifiedRow}>
                <GrCertificate className={styles.verifiedIcon} />
                <span className={styles.issuer}>{cert.issuer}</span>
              </div>
              <h3 className={styles.certTitle}>{cert.title}</h3>

              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewLink}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(cert.url, "_blank", "noopener,noreferrer");
                  }}
                >
                  <GrCertificate className={styles.linkIcon} />
                  View Certificate
                </a>
              ) : (
                <span className={styles.noLink}>Internal Certification</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};