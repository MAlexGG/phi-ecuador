import Image from "next/image";
import styles from "./schedule.module.css"
import schedule from '../../../../../public/img/events/2024/schedule/schedule.jpg'

export default function Schedule() {
    return (
        <section className={styles.ctTitle}>
          <Image
            src={schedule}
            className={styles.imgSchedule}
            alt='Programa Coloquio en Cuenca del 13 de noviembre'
            width={800}
            style={
              {
                marginTop: '5%'
              }
            }
          />
        </section>    
    )
  }