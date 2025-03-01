'use client'

import Image from 'next/image'
import styles from './navbarMobile.module.css'
import menu from '../../../public/icons/menu.svg'
import logo from '../../../public/img/logos/logo2.png'
import { useState } from 'react'
import { navLinks } from '../../data/navLinks'
import Link from 'next/link'

export default function NavbarMobile() {

    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header className={styles.ctHeaderMobile}>
        <div className={styles.headerClosed}>
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
        </div>
        
        <nav className={isOpen ? styles.btOpen : styles.btClose }>
            {
                navLinks.map((link, index) => (
                    <div key={index} className={styles.navItem}>
                    { link.subLinks ? (
                        <div className={styles.dropdown}>
                            <button className={styles.btNav} onClick={() => setOpenDropdown(openDropdown === index ? null : index)}>
                                {link.name}
                            </button>
                            { openDropdown === index && (
                                <div className={styles.dropdownMenu}>
                                {link.subLinks.map((subLink, subIndex) => (
                                    <Link key={subIndex} href={subLink.href} className={styles.subLink}>
                                    {subLink.name}
                                    </Link>
                                ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link href={link.href} className={ styles.aNav }>
                        {link.name}
                        </Link>
                    )}
                    </div>
                ))
            }
        </nav>
    </header>
  )
}
