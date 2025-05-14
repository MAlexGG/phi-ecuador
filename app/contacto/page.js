import Form from "../components/form/form";
import Subtitle from "../components/subtitle/subtitle";
import styles from './page.module.css'

export default function Contact(){
    return (
        <>
            <Subtitle text='CONTACTO'>
                <section>
                    <div className={styles.ctText}>
                        <h4 className={styles.h4}>Perfil Miembro RedPHI–Ecuador</h4>
                        <ul>
                            <li>El postulante debe ser docente o investigador en temas relacionados a la RedPHI – Ecuador.</li>
                            <li>El postulante a la RedPHI – Ecuador debe estar vinculado a cualquier IES Institución de Educación Superior acreditada en el Ecuador.</li>
                            <li>El postulante debe haber cursado estudios en la Universidad Politécnica de Madrid y la IES Institución de Educación Superior debe tener o poseer algún tipo de convenio (marco o especifico) con la Universidad Politécnica de Madrid.</li>
                            <li>El postulante a la RedPHI – Ecuador debe constar en la base de investigadores acreditados por la <a href='https://www.gob.ec/senescyt/tramites/acreditacion-investigadoresas-cientificosas' className={styles.aLink} target='_blank' rel="noopener noreferrer">SENESCYT</a></li>
                        </ul>
                    </div>

                    <div className={styles.ctText}>
                        <h4 className={styles.h4}>Perfil aliado con la RedPHI–Ecuador</h4>
                        <ul>
                            <li>Puedes ser aliado o colaborador para actividades y temas específicos de interés común RedPHI – Ecuador.</li>
                            <li>Puedes ser una organización pública, privada, comunitaria, ONG, etc.</li>
                            <li>Se debe formalizar el alcance de la participación del aliado mediante un acuerdo entre las partes.</li>
                        </ul>
                    </div>

                    <div className={styles.ctText}>
                        <h4 className={styles.h4}>Buzón de Contacto</h4>
                        <p>Si tienes alguna duda o deseas más información, llena el siguiente formulario</p>
                        <Form/>
                    </div>
                    
                </section>
            </Subtitle>
        </>
    )
}