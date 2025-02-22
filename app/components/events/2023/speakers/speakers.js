import Speaker from "@/app/components/speaker/speaker";
import styles from "./speakers.module.css"
import { speakers } from "@/app/data/speakers";


export default function Speakers() {
  return (
      <section className={styles.ctMembers}>
        {
          speakers.map((speaker, index) => (
            <Speaker speaker={speaker} key={index}/>
          ))
        }
      </section>    
  )
}
