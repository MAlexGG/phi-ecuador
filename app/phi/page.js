import Navbar from '../components/navbar/navbar'
import styles from './page.module.css'
import {team} from '../data/team'

export default function About() {
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
        <h2 className={styles.h2}>RED PHI ECUADOR</h2>
        <section>
          <div className={styles.ctText}>
            <h4 className={styles.h4}>¿Qué es la Red PHI?</h4>
            <p>La Red de Patrimonio Histórico + Cultural Iberoamericano (Red PHI) es un proyecto interuniversitario creado en 2010 con sede en la Universidad Politécnica de Madrid, España; está integrada por universidades de 17 países latinoamericanos, Estados Unidos, España, Italia y Portugal; y redes locales en cada país que interactúan con programas académicos, seminarios, investigaciones y publicaciones relacionadas con la memoria e historia; tecnología e innovación; difusión, cuidado y protección del patrimonio edificado en la región.</p>
          </div>
          <div className={styles.ctText}>
            <h4 className={styles.h4}>Red PHI Ecuador</h4>
            <p>n 2023 se estructuró la Red PHI – Ecuador, conformada por universidades localizadas en las principales ciudades del país: Quito, Cuenca y Guayaquil, con lo cual se integran a la red Ecuador los centros urbanos que se destacan por su patrimonio prehispánico, virreinal y moderno, así como dos centros históricos del patrimonio mundial: Quito (1978) y Cuenca (1999); mientras que Guayaquil es reconocido por su Patrimonio arquitectónico moderno.
            Las universidades que conforman la Red PHI – Ecuador son: Pontificia Universidad Católica del Ecuador, Universidad Internacional de Ecuador, Universidad Católica de Cuenca; Universidad Católica de Santiago de Guayaquil.</p>
          </div>
        </section>

        <section className={styles.ctUniversities}>
          <h3 className={styles.h3}>Universidad coordinadora:</h3>
          <div className={styles.ctUni}>
            <h5 className={styles.h5}>{team[0].university}</h5>
            <p>{team[0].name}</p>
            <p>{team[0].job}</p>
          </div>
        </section>

        <section className={styles.ctUniversities}>
          <h3 className={styles.h3}>Conformación de la red:</h3>
          {
            team.slice(1).map((person, index) => (
                <div className={styles.ctUni} key={index}>
                  <h5 className={styles.h5}>{person.university}</h5>
                  <p>{person.name}</p>
                  <p>{person.job}</p>
                </div>
            ))
          }
        </section>
    </main>
    </>
    
  )
}
