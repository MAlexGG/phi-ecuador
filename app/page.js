import Image from 'next/image'
import styles from './page.module.css'
import coloquio from '../public/img/mainImage.jpg'
import logo from '../public/img/logo.png'
import Universities from './components/universities'
import Dates from './components/dates'

export default function Home() {
  return (
    <main className={styles.main}>
      <Universities/>
      <Image
        src={logo}
        alt='logo de PHI Ecuador'
        className={styles.imgLogo}
      />
      <Image 
        src={coloquio}
        alt='Coloquio Geomateriales y Patrimonio arquitectónico en Ecuador'
        sizes="100vw"
        className={styles.imgMain}
      />
      <Dates/>
    </main>
  )
}
