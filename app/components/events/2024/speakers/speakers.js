import Speaker from "@/app/components/speaker/speaker";
import styles from "./speakers.module.css"
import { trainers } from "@/app/data/events/2024/trainers";


export default function Speakers() {
  return (
      <section className={styles.ctSpeakers}>
        {
          trainers.map((speaker, index) => (
            <Speaker speaker={speaker} key={index}/>
          ))
        }
      </section>    
  )
}
