import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import styles from "./NavBar.module.css"
import { IoMdMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io";
import { useScrollPosition } from '../Hooks/ScrollPosition';


const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false)
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    const detectDimension = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

useEffect(() => {
    window.addEventListener("resize", detectDimension)
    windowDimension.width > 800 && setNavBarOpen(false)
    return () => {
    window.removeEventListener("resize", detectDimension)
    }
},[windowDimension])

    const links=[
    {
        id: 1,
        link: "Home",
    },
    {
        id: 2,
        link: "Services",
    },
    {
        id: 3,
        link: "HowWeWork",
    },
    {
        id: 4,
        link: "Benefits",
    },
    ]

    const scrollPosition = useScrollPosition()
  return (
      <div className={navBarOpen ? styles.navOpen : scrollPosition > 0 ? styles.navOnScroll : styles.navBar}>
          {!navBarOpen && <p className={styles.logo}>CENTURY | Digital Solutions</p>}
          {!navBarOpen && windowDimension.width < 800 ? (<IoMdMenu onClick={() => setNavBarOpen(!navBarOpen)} size={25} />)
           : windowDimension.width < 800 && (<IoMdClose onClick={() => setNavBarOpen(!navBarOpen)} color="#f5deb3" size={25} />) }
          {
              navBarOpen  && (
              <ul className={styles.linkContainer}>
            {links.map((x) =>(
                <div>    
                    <Link
                        onClick={() => setNavBarOpen(false)}
                        to={x.link}
                        smooth 
                        duration={500}
                        className={styles.navLink} >
                        {x.link === "HowWeWork" ? "How We Work" : x.link} </Link>
                    <div className={styles.border}></div>
                </div>
            ))}
        </ul>
              )}
          {
           windowDimension.width > 800 && <ul className={styles.linkContainer}>
            {links.map((x) =>(
                <div>    
                    <Link onClick={() => setNavBarOpen(false)}
                        to={x.link}
                        smooth 
                        duration={500}
                        className={styles.navLink} >
                        {x.link === "HowWeWork" ? "How We Work" : x.link}
                    </Link>
                        
                    <div className={styles.border}></div>
                </div>

            ))}
                <Link onClick={() => setNavBarOpen(false)}
                        to="Contact"
                        smooth 
                        duration={500}
                        className={styles.contactLink}>Contact</Link>  
        </ul>
          }
        </div>
  )
}

export default NavBar