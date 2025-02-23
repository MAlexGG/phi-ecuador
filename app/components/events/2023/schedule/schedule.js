import Image from "next/image";
import styles from "./schedule.module.css"
import scheduleCuenca13 from '../../../../../public/img/schedule/Cuenca_13.jpeg'
import scheduleCuenca14 from '../../../../../public/img/schedule/Cuenca_14.jpeg'
import scheduleQuito15 from '../../../../../public/img/schedule/Quito_15.jpeg'
import scheduleQuito16 from '../../../../../public/img/schedule/Quito_16.jpeg'

export default function Schedule() {
    return (
        <section className={styles.ctTitle}>
          <Image
            src={scheduleCuenca13}
            className={styles.imgSchedule}
            alt='Programa Coloquio en Cuenca del 13 de noviembre'
            width={800}
            style={
              {
                marginTop: '5%'
              }
            }
          />
          <Image
            src={scheduleCuenca14}
            className={styles.imgSchedule}
            alt='Programa Coloquio en Cuenca del 14 de noviembre'
            width={800}
          />
          <Image
            src={scheduleQuito15}
            className={styles.imgSchedule}
            alt='Programa Coloquio en Quito del 15 de noviembre'
            width={800}
          />
          <Image
            src={scheduleQuito16}
            className={styles.imgSchedule}
            alt='Programa Coloquio en Quito del 16 de noviembre'
            width={800}
          />
        </section>    
    )
  }