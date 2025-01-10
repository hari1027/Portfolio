import React from 'react'
import styles from "./About.Module.css"
import data from "../../data.json"

export const About = () =>{
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={'/assets/about/aboutImage.png?url.'} className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    { data.domains.map((domain, index) => {
                    const [key, value] = Object.entries(domain)[0];
                    return(
                      <li key={index} className={styles.aboutItem}>
                        <img src= {'/assets/about/arrow.png?url.'} width={50} height={50}/>
                        <div className={styles.aboutItemText}>
                           <h3> {key} </h3>
                           <p> {value} </p>
                       </div>
                       </li>
                    )
                   })}
                </ul>
            </div>

        </section>
    )

}