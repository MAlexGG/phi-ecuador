import Speaker from "@/app/components/speaker/speaker";
import styles from "./speakers.module.css"
import { speakers } from "@/app/data/speakers";
import { team } from "@/app/data/team";
import Image from "next/image";


export default function Speakers() {
  return (
      <section className={styles.ctSpeakers}>
        <h2 className={styles.subtitle}>Ponentes Internacionales</h2>
        {
          speakers.map((speaker, index) => (
            <Speaker speaker={speaker} key={index}/>
          ))
        }
        <h2 className={styles.subtitle}>Ponentes Nacionales</h2>
        <div className={styles.ctImages}>
        {
          [2, 0, 1, 3].map(index => (
          <div key={index}>
                <div className={styles.ctImg}>
                  <Image
                    src={team[index].image}
                    alt={team[index].name}
                    className={styles.imgMember}
                    width={237}
                    height={194}
                  />
                </div>
                <p className={styles.txtNameMember}>{team[index].name.replace(/^Investigador(?:a)? principal:\s*/i, '')}</p>
              </div>
          ))
        }
        </div>
      </section>    
  )
}
