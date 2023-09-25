import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.ctFooter}>
        <p>RED PHI ECUADOR © Todos los derechos reservados</p>
        <p>Desarrollado por <Link href='https://malexgg.github.io/portfolio/#/' target='_blank' rel="noopener noreferrer">MAlexGG</Link></p>
    </div>
  )
}

export default Footer