import styles from '../page.module.css'

export default function Dates() {
  return (
    <>
    <div className={styles.ctDate}>
        <h4>16, 17, 18, 19 Octubre</h4>
        <ul className={styles.ctCities}>
          <li><span>Quito</span></li>
          <li><span>Cuenca</span></li>
        </ul>
    </div>

    <div className={styles.ctDateM}>
        <h4>16 - 19 Octubre</h4>
        <ul className={styles.ctCities}>
            <li><span>Quito</span></li>
            <li><span>Cuenca</span></li>
        </ul>
    </div>
    </>
  )
}
