import React from 'react'
import styles from "./Hero.module.css"
import data from '../../data.json'

export const Hero = () => {
    return (
        <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi I'm {data.name}</h1>
            <p className={styles.description}>{data.descriptionAboutYou}</p>
            <a href={`mailto:${data.gmailId}`} className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={'/assets/hero/heroImage.png?url.}'} className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

       </section>
    )
}