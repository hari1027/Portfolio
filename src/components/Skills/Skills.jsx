import React from "react";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "C#", "Java", "Python"],
  },
  {
    category: "Frontend FrameWorks",
    skills: ["React JS", "Next JS"],
  },
  {
    category: "Mobile Development FrameWork",
    skills: ["React Native"],
  },
  {
    category: "Backend FrameWorks",
    skills: [".Net", "Node JS", "Nest JS", "Java with Spring Boot"],
  },
  {
    category: "Database",
    skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Snowflake"],
  },
  {
    category: "Other Technologies",
    skills: ["Redux", "MobX", "WebSocket", "WebRTC", "Express JS", "GraphQL", "Redis", "Prisma ORM"],
  },
  {
    category: "Architecture",
    skills: ["Microservices Architecture", "Event-Driven Architecture", "Monolith Architecture", "REST API Design", "System Design Patterns"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker with Swarm", "Kubernetes"],
  },
  {
    category: "Tools",
    skills: ["Git", "Postman", "IIS Server", "Jira", "Azure"],
  },
  {
    category: "CRM Integrations",
    skills: ["Salesforce", "Freshdesk", "Zendesk", "Freshsales", "Zoho"],
  },
];

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.grid}>
        {skillCategories.map((cat, id) => (
          <div key={id} className={styles.category}>
            <p className={styles.categoryTitle}>{cat.category}</p>
            <div className={styles.tags}>
              {cat.skills.map((skill, i) => (
                <span key={i} className={styles.tag}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};