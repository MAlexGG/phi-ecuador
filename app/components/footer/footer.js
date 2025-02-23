import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
import gh from '../../../public/icons/github.png'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.ctFooter}>
        <p>RED PHI ECUADOR © Todos los derechos reservados</p>
        <Link className={styles.link} href='https://github.com/MAlexGG' target='_blank' rel="noopener noreferrer">
          <Image
            src={gh}
            alt='github page María Alexandra Galarza Gallardo software developer'
            width={30}
          />
        </Link>
    </div>
  )
}

export default Footer