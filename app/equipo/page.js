import Navbar from '../components/navbar/navbar'
import NavbarMobile from '../components/navbarMobile/navbarMobile'
import styles from './page.module.css'
import { team } from '../data/team' 
import Member from '../components/member/member'
import Up from '../components/upButton/up'

export default function Team() {
  return (
    <>
    <Navbar/>
    <NavbarMobile/>
    <main className={styles.main}>
      <h2 className={styles.h2}>EQUIPO</h2>
      <section className={styles.ctMembers}>
        {
          team.map((member, index) => (
            <Member member={member} key={index}/>
          ))
        }
      </section>
      <Up/>
    </main>
    </>
  )
}
