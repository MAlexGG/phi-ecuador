import Navbar from '../components/navbar/navbar'
import NavbarMobile from '../components/navbarMobile/navbarMobile'
import styles from './page.module.css'
import { team } from '../data/team' 
import Member from '../components/member/member'

export default function Team() {
  return (
    <>
    <Navbar/>
    <NavbarMobile/>
    <main className={styles.main}>
      <h2 className={styles.h2}>EQUIPO</h2>
      <section className={styles.ctMembers}>
        {
          team.map((person, index) => (
            <Member member={person} key={index}/>
          ))
        }
      </section>
    </main>
    </>
  )
}
