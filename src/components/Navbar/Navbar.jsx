import React, {useState , useEffect} from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () =>{
    const [menuOpen , setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 830); 

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 830); 
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
             { isMobile && <img className={styles.menuBtn} src={!menuOpen ? '/assets/nav/menuIcon.png?url.' : '/assets/nav/closeIcon.png?url.' } onClick={() => setMenuOpen(!menuOpen)} />}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => {setMenuOpen(false)}}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#contacts">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}