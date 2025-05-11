import styles from "./description.module.css"

export default function Description (){

  const urlCedia = "https://cedia.edu.ec/documentacion-grafica-del-patrimonio-arquitectonico-del-ecuador-del-escaneado-3d-a-la-metodologia-bim/";

    return (
        <section className={styles.ctEvents}>
          <div className={styles.ctText}>
            <h3 className={styles.h3}>Contexto</h3>
            <p>Con un apoyo de Corporación Ecuatoriana para el Desarrollo de la Investigación y la Academia CEDIA se accedió a la partida de fondos no reembolsables de $9,898.70 por medio del programa CEDIA AVANTE, en la postulación participaron como responsables María del Cisne Aguirre Ullauri UCACUE y  Marco Lenin Lara Calderón UIDE. Los capacitadores son docentes del Departamento de Expresión Gráfica e Ingeniería en la Edificación de la Universidad de Sevilla, España.</p>
            <a href={urlCedia} className={styles.aLink} target='_blank' rel="noopener noreferrer">Link</a>
          </div>
          
          <div className={styles.ctText}> 
            <h3 className={styles.h3}>Objetivos del coloquio</h3>
            <ul className={styles.list}>
              <li>Desarrollar un programa de capacitación sobre documentación gráfica tridimensional y HBM que permita demostrar de manera práctica los conceptos vinculados a dichas herramientas para hacer de la expresión gráfica una alternativa eficaz de comprender el patrimonio local en el marco de su gestión integral.</li>
            </ul>
          </div>

          <div className={styles.ctText}>
            <h3 className={styles.h3}>Organizador</h3>
            <p>CEDIA Corporación Ecuatoriana para el Desarrollo de la Investigación y la Academia CEDIA, Universidad Católica de Cuenca, Universidad Internacional de Ecuador y los capacitadores de la Universidad de Sevilla, España.</p>
          </div>

          <div className={styles.ctText}>
            <h3 className={styles.h3}>Sede</h3>
            <p>El capacitación se realizó de manera hibrida, las clases virtuales se realizaron del 24 de septiembre al 11 de octubre y las clases presenciales de la capacitación se desarrolló en Cuenca y Quito del 21 al 25 de octubre 2024, en la Unidad académica de ingeniería, industria y construcción de la Universidad Católica de Cuenca; adicionalmente se realizó una charla magistral el lunes 28 de octubre en el campus matriz de la Universidad Internacional de Ecuador.</p>
          </div>
            
        </section>
    )
}