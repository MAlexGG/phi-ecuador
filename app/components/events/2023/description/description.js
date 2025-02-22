import styles from "./description.module.css"

export default function Description (){

    return (
        <section className={styles.ctEvents}>
          <div className={styles.ctText}>
            <h3 className={styles.h3}>Contexto</h3>
            <p>La red PHI-Ecuador, conformada por universidades localizadas en las principales ciudades del país: Quito y Cuenca, y Guayaquil, con lo cual, se integran a la red Ecuador los centros urbanos que se destacan por su patrimonio prehispánico, virreinal y moderno, así como dos ciudades del patrimonio mundial: Quito y Cuenca, y Guayaquil reconocido por el Patrimonio arquitectónico moderno.</p>
          </div>
          
          <div className={styles.ctText}> 
            <h3 className={styles.h3}>Objetivos del coloquio</h3>
            <ul className={styles.list}>
              <li>Exponer una visión de la conservación del patrimonio inmueble desde la composición geológica de su materialidad, aspecto que incide en la imagen e identidad de las ciudades ecuatorianas.</li>
              <li>Integrar y difundir los estudios sobre el patrimonio edificado en Ecuador en el que se exponen, de manera interdisciplinaria, los avances investigativos de docentes de universidades que conforman la red PHI – Ecuador sobre “geomateriales” (piedra, mármol, ladrillo, cal, entre otros) que conforman parte fundamental de la arquitectura virreinal y republicana de Ecuador.</li>
              <li>Desarrollar una plataforma permanente de difusión de la producción intelectual sobre los temas relacionados con la conservación e intervención en el patrimonio edificado y el territorio para el intercambio con las redes académicas PHI y otras relacionadas con los temas que desarrolla.</li>
            </ul>
          </div>

          <div className={styles.ctText}>
            <h3 className={styles.h3}>Organizador</h3>
            <p>Red PHI-Ecuador: Pontificia Universidad Católica de Ecuador, Universidad Internacional de Ecuador, Universidad Católica de Cuenca, Universidad Católica Santiago de Guayaquil.</p>
          </div>

          <div className={styles.ctText}>
            <h3 className={styles.h3}>Sede</h3>
            <p>El coloquio se realizará en Cuenca y Quito del 17 al 19 de octubre 2023, en la modalidad presencial y virtual. La modalidad presencial incluirá recorridos en la tarde a edificios en los que se ha realizado estudios científicos de conservación sobre geomateriales.</p>
          </div>
            
        </section>
    )
}