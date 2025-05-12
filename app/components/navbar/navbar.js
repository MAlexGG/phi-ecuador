'use client'

import Image from 'next/image'
import styles from './navbar.module.css'
import logo from '../../../public/img/logos/logo2.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '../../data/navLinks'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <header className={styles.ctHeader}>
      <Link href='/'>
        <Image src={logo} alt='logo de Red PHI' className={styles.imgLogo} />
      </Link> 

      <nav className={styles.nav}>
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <div key={index} className={styles.navItem}>
              {link.subLinks ? (
                <div className={styles.dropdown}>
                  <button className={pathname.startsWith("/eventos") ? styles.aActive : styles.aNoActive} onClick={() => setOpenDropdown(openDropdown === index ? null : index)}>
                    {link.name}
                  </button>
                  {openDropdown === index && (
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
                <Link href={link.href} className={isActive ? styles.aActive : styles.aNoActive}>
                  {link.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
}