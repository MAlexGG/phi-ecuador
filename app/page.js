import Image from 'next/image'
import styles from './page.module.css'
import main from '../public/img/logos/mainImage.jpg'
import logo from '../public/img/logos/logo.png'
import Universities from './components/universities/universities'
import Link from 'next/link'
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
      <Link href='/phi' className={styles.ctImgMain}>
        <Image 
          src={main}
          alt='Red PHI - Ecuador'
          sizes="100vw"
          className={styles.imgMain}
        />
      </Link>
      <SocialMedia/>
    </main>
  )
}
