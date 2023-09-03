'use client'

import Image from 'next/image'
import styles from './navbarMobile.module.css'
import menu from '../../../public/img/menu.svg'
import logo from '../../../public/img/logo2.png'
import { useState } from 'react'
import { navLinks } from '../../data/navLinks'
import Link from 'next/link'

export default function NavbarMobile() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className={styles.ctNavbarMobile}>
        <nav className={styles.nav}>
            <Link href='/'>
                <Image
                    src={logo}
                    alt='logo Red PHI Ecuador'
                    className={styles.imgLogo}
                />
            </Link>
            <button onClick={handleClick} className={styles.btMenu}>
                <Image
                    src={menu}
                    alt='menu bar'
                    width='30'
                />
            </button>
        </nav>
        
        <div className={isOpen ? styles.btOpen : styles.btClose }>
            {
                navLinks.map((link, index) => (
                    <Link href={link.href} key={index} className={styles.aNav}>{link.name}</Link>
                ))
            }
        </div>
    </div>
  )
}
