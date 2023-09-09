'use client'

import Image from 'next/image'
import styles from './navbar.module.css'
import logo from '../../../public/img/logos/logo2.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '../../data/navLinks'

export default function Navbar() {

  const pathname = usePathname();

  return (
    <div className={styles.ctNavbar}>
      <Link href='/'>
        <Image
            src={logo}
            alt='logo de Red PHI'
            className={styles.imgLogo}
        />
      </Link> 
        <nav className={styles.nav}>
          {
            navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link 
                  href={link.href}
                  key={link.name}
                  className={isActive ? `${styles.aActive}` : `${styles.aNoActive}`}
                >
                  {link.name}
                </Link>
              )
            })
          }
        </nav>
    </div>
  )
}
