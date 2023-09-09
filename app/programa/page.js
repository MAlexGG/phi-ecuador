import styles from './page.module.css'
import Image from 'next/image'
import scheduleCuenca from '../../public/img/schedule/Programa_Cuenca.webp'
import scheduleQuito from '../../public/img/schedule/Programa_Quito.webp'
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
          src={scheduleCuenca}
          alt='Programa Coloquio en Cuenca'
          width={900}
          className={styles.imgSchedule}
          style={
            {
              margin: '5%'
            }
          }
        />
        <Image
          src={scheduleQuito}
          className={styles.imgSchedule}
          alt='Programa Coloquio en Quito'
          width={900}
        />
      </section>
      <Up/>
    </Subtitle>      
    </>
  )
}
