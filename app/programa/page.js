import styles from './page.module.css'
import Image from 'next/image'
import scheduleCuenca13 from '../../public/img/schedule/Cuenca_13.jpeg'
import scheduleCuenca14 from '../../public/img/schedule/Cuenca_14.jpeg'
import scheduleQuito15 from '../../public/img/schedule/Quito_15.jpeg'
import scheduleQuito16 from '../../public/img/schedule/Quito_16.jpeg'
import Up from '../components/upButton/up'
import Subtitle from '../components/subtitle/subtitle'

export default function Schedule() {
  return (
    <>
    <Subtitle text='PROGRAMA'>
      <section className={styles.ctTitle}>
        <h3>Coloquio Geomateriales y Patrimonio arquitectónico en Ecuador</h3>
        <p><span>Red de Patrimonio Histórico Iberoamericano (PHI):</span> Universidad Politécnica de Madrid - Universidad Complutense de Madrid</p>
        <p><span>RedPHI - Ecuador:</span> Pontificia Universidad Católica del Ecuador - Universidad Internacional de Ecuador - Universidad Católica de Cuenca - Universidad Católica de Santiago de Guayaquil</p>
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
      <Up/>
    </Subtitle>      
    </>
  )
}
