import Navbar from '../components/navbar/navbar'
import NavbarMobile from '../components/navbarMobile/navbarMobile'
import Payment from '../components/payment/payment'
import styles from './page.module.css'

export default function Registration() {
  return (
    <>
    <Navbar/>
    <NavbarMobile/>
    <main className={styles.main}>
      <h2 className={styles.h2}>INSCRIPCIÓN</h2>
      <div className={styles.ctRegistration}>
        <h3>Como inscribirte:</h3>
        <p>Una vez establecida tu modalidad de inscripción, escoge la que te convenga.</p>
      </div>

        <Payment title='Presencial' text='USD 75,00 (Certificado por 40 horas Académicas con asistencia 75% del evento)' alt='pago para evento presencial' href={'https://kshk.co/uide-pregrado/spdYHhsvC'}/>  

        <Payment title='On-line' text='USD 50,00 (Certificado por 20 horas Académicas con asistencia 75% del evento)' alt='pago para evento on-line' href={'https://kshk.co/uide-pregrado/CE_8Slufx'}/>  
      
        <Payment title='Un día presencial' text='USD 20,00 (Esta modalidad no posee Certificado Académico del evento)' alt='pago para evento un día presencial' href={'https://kshk.co/uide-pregrado/3SeAEly4s'}/>  
            
      <p>* Formas de Pago: Tarjeta de crédito - Tarjeta de débito bancario</p>

      <div className={styles.ctRegistration}>
        <h3>Para validar tu inscripción:</h3>
        <p>Reenvíanos el e-mail de tu inscripción a <span>redphi-ecuador@uide.edu.ec</span> y completaremos desde la Red PHI – Ecuador el proceso de inscripción.</p>
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
    </main>
    </>
  )
}
