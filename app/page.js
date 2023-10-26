import Image from 'next/image'
import styles from './page.module.css'
import coloquio from '../public/img/logos/mainImage.jpg'
import logo from '../public/img/logos/logo.png'
import Universities from './components/universities/universities'
import Dates from './components/dates/dates'
import Link from 'next/link'
import Button from './components/button/button'
import icoGo from '../public/icons/go.svg'
import SocialMedia from './components/socialMedia/socialMedia'

export default function Home() {
  return (
    <main className={styles.main}>
      <Universities/>
      <Image
        src={logo}
        alt='logo de PHI Ecuador'
        className={styles.imgLogo}
      />
      <Link href='/phi' className={styles.imgMain}>
        <Image 
          src={coloquio}
          alt='Coloquio Geomateriales y Patrimonio arquitectónico en Ecuador'
          sizes="100vw"
          className={styles.imgMain}
        />
      </Link>
      <Dates/>
      <SocialMedia/>
      <Link href={'/phi'} className={styles.aButton}>
        <Button img={icoGo} alt={'Ingresar a la web'}>Ingresar</Button>
      </Link>
    </main>
  )
}
