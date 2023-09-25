import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import NavbarMobile from "../navbarMobile/navbarMobile"
import styles from './subtitle.module.css'

export default function Subtitle({ children, text }) {
  return (
    <>
      <Navbar/>
      <NavbarMobile/>
      <main className={styles.main}>
        <h2 className={styles.h2}>{text}</h2>
        {children}
      </main>
      <Footer/>
    </>
  )
}