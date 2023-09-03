import styles from '../page.module.css'
import Image from 'next/image'
import universities from '../../public/img/logosUniversities.jpg'

export default function Universities() {
  return (
    <section className={styles.ctUniv}>
        <Image
          src={universities}
          alt='logos de las universidades colaboradoras'
          sizes="100%"
          className={styles.imgUniv}
        />
      </section>
  )
}
