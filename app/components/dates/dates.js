import styles from './dates.module.css'

export default function Dates() {
  return (
    <>
    <div className={styles.ctDate}>
        <h4>13, 14, 15, 16 Noviembre</h4>
        <ul className={styles.ctCities}>
          <li><span>Quito</span></li>
          <li><span>Cuenca</span></li>
        </ul>
    </div>

    <div className={styles.ctDateM}>
        <h4>13 - 16 Noviembre</h4>
        <ul className={styles.ctCities}>
            <li><span>Quito</span></li>
            <li><span>Cuenca</span></li>
        </ul>
    </div>
    </>
  )
}
