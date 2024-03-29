import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import styles from './NavBar.module.css'
import { IoMdMenu } from 'react-icons/io'
import { IoMdClose } from 'react-icons/io'
import { useScrollPosition } from '../Hooks/ScrollPosition'

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
        window.addEventListener('resize', detectDimension)
        windowDimension.width > 900 && setNavBarOpen(false)
        return () => {
            window.removeEventListener('resize', detectDimension)
        }
    }, [windowDimension])

    const links = [
        {
            id: 1,
            link: 'Inicio',
        },
        {
            id: 2,
            link: 'Servicios',
        },
        {
            id: 3,
            link: 'ComoTrabajamos',
        },
        {
            id: 4,
            link: 'Beneficios',
        },
    ]

    const scrollPosition = useScrollPosition()
    return (
        <div className={navBarOpen ? styles.navOpen : scrollPosition > 0 ? styles.navOnScroll : styles.navBar}>
            {!navBarOpen && <p className={styles.logo}>IMPROVEON | Soluciones Web</p>}
            {!navBarOpen && windowDimension.width < 900 ? (
                <IoMdMenu onClick={() => setNavBarOpen(!navBarOpen)} size={25} />
            ) : (
                windowDimension.width < 900 && (
                    <IoMdClose onClick={() => setNavBarOpen(!navBarOpen)} color="#f5deb3" size={25} />
                )
            )}
            {navBarOpen && (
                <ul className={styles.linkContainer}>
                    {links.map((x) => (
                        <div>
                            <Link
                                onClick={() => setNavBarOpen(false)}
                                to={x.link}
                                smooth
                                duration={500}
                                className={styles.navLink}
                            >
                                {x.link === 'ComoTrabajamos' ? 'Como Trabajamos' : x.link}{' '}
                            </Link>
                            <div className={styles.border}></div>
                        </div>
                    ))}
                </ul>
            )}
            {windowDimension.width > 900 && (
                <div className={styles.linkContainer}>
                    <Link onClick={() => setNavBarOpen(false)} to="Inicio" className={styles.navLink}>
                        Inicio
                    </Link>

                    <Link
                        onClick={() => setNavBarOpen(false)}
                        to="Servicios"
                        smooth
                        duration={500}
                        className={styles.navLink}
                    >
                        Servicios
                    </Link>

                    <Link
                        onClick={() => setNavBarOpen(false)}
                        to="ComoTrabajamos"
                        smooth
                        duration={500}
                        className={styles.navLink}
                    >
                        Como Trabajamos
                    </Link>

                    <Link
                        onClick={() => setNavBarOpen(false)}
                        to="Beneficios"
                        smooth
                        duration={500}
                        className={styles.navLink}
                    >
                        Beneficios
                    </Link>

                    <Link
                        onClick={() => setNavBarOpen(false)}
                        to="Contact"
                        smooth
                        duration={500}
                        className={styles.navLink}
                    >
                        Contacto
                    </Link>
                </div>
            )}
        </div>
    )
}

export default NavBar
