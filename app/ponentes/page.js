import Navbar from '../components/navbar/navbar'
import NavbarMobile from '../components/navbarMobile/navbarMobile'
import styles from './page.module.css'
import { speakers } from '../data/speakers'
import Speaker from '../components/speaker/speaker'
import Image from 'next/image'
import up from '../../public/img/up.svg'

export default function Speakers() {
  return (
    <>
    <Navbar/>
    <NavbarMobile/>
    <main className={styles.main}>
      <h2 className={styles.h2}>PONENTES</h2>
      <section className={styles.ctMembers}>
        {
          speakers.map((speaker, index) => (
            <Speaker speaker={speaker} key={index}/>
          ))
        }
      </section>
      <a href='#' className={styles.aUp}>
        <Image
          src={up}
          alt='botón que va al inicio de la página'
        />
      </a>  
    </main>
    </>
  )
}
