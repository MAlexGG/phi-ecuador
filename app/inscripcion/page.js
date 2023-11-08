import Payment from '../components/payment/payment'
import Subtitle from '../components/subtitle/subtitle'
import Up from '../components/upButton/up'
import styles from './page.module.css'


export default function Registration() {
  return (
    <>
    <Subtitle text='INSCRIPCIÓN'>
      <div className={styles.ctRegistration}>
        <h3>Como inscribirte:</h3>
        <p>Selecciona la modalidad de inscripción que te convenga.</p>
      </div>
      <div className={styles.ctPayments}>
        <Payment title='Presencial' text='USD 75,00 (Certificado por 40 horas Académicas con asistencia 75% del evento)' alt='pago para evento presencial' href={'https://kshk.co/uide-pregrado/spdYHhsvC'}/>  

        <Payment title='On-line' text='USD 50,00 (Certificado por 20 horas Académicas con asistencia 75% del evento)' alt='pago para evento on-line' href={'https://kshk.co/uide-pregrado/CE_8Slufx'}/>  

        <Payment title='Un día presencial' text='USD 20,00 (Esta modalidad no posee Certificado Académico del evento)' alt='pago para evento un día presencial' href={'https://kshk.co/uide-pregrado/3SeAEly4s'}/>  

        <p>* Formas de Pago: Tarjeta de crédito - Tarjeta de débito bancario</p>

        <p className={styles.txtNote}>NOTA: Se aceptarán  inscripciones el día del evento</p>
      </div>
      <div className={`${styles.ctRegistration} ${styles.ctValidation}`}>
        <h3 className={styles.txtValidation}>Para validar tu inscripción:</h3>
        <p>Reenvíanos la captura de pantalla de tu inscripción a <strong>redphi-ecuador@uide.edu.ec</strong> y completaremos desde la Red PHI – Ecuador el proceso de inscripción</p>
      </div>

      <div className={styles.ctRegistration}>
        <h3>Contactos UIDE:</h3>
        <p><span>Teléfono:</span> (593-2) 2985-600 / (593-2)5000-600 Ext. 2523 – 2526</p>
        <p><span>Mail:</span> redphi-ecuador@uide.edu.ec</p>
      </div>

      <div className={styles.ctRegistration}>
        <h3>Contacto Red PHI – Ecuador:</h3>
        <p>Alejandra Llumiluisa (593) 991402648</p>
      </div>
      <Up/>
    </Subtitle>
    </>
  )
}
