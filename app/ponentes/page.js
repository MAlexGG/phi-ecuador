import styles from './page.module.css'
import { speakers } from '../data/speakers'
import Speaker from '../components/speaker/speaker'
import Up from '../components/upButton/up'
import Subtitle from '../components/subtitle/subtitle'

export default function Speakers() {
  return (
    <>
    <Subtitle text='PONENTES'>
      <section className={styles.ctMembers}>
        {
          speakers.map((speaker, index) => (
            <Speaker speaker={speaker} key={index}/>
          ))
        }
      </section>
      <Up/> 
    </Subtitle>    
    </>
  )
}
