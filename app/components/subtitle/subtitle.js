import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import NavbarMobile from "../navbarMobile/navbarMobile"
import styles from './subtitle.module.css'

export default function Subtitle({ children, text, tabs="" }) {
  return (
    <div id="top">
      <Navbar/>
      <NavbarMobile/>
      <main className={`${styles.main} ${tabs ? styles[tabs]: ''}`}>
        <h2 className={styles.h2}>{text}</h2>
        {children}
      </main>
      <Footer/>
    </div>
  )
}