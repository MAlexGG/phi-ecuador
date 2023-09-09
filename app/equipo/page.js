import styles from './page.module.css'
import { team } from '../data/team' 
import Member from '../components/member/member'
import Up from '../components/upButton/up'
import Subtitle from '../components/subtitle/subtitle'

export default function Team() {
  
  return (
    <>
    <Subtitle text='EQUIPO'>
      <section className={styles.ctMembers}>
        {
          team.map((member, index) => (
            <Member member={member} key={index}/>
          ))
        }
      </section>
      <Up/>
    </Subtitle>    
    </>
  )
}
