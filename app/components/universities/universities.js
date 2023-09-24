import styles from './universities.module.css'
import Image from 'next/image'
import { universities } from '@/app/data/universities'
import Link from 'next/link'

export default function Universities() {
  return (
    <section className={styles.ctUniv}>
      {
        universities.map((university, index) => (
          <Link href={university.href} key={index} target='_blank' className={styles.aUniv} rel="noopener noreferrer">
            <Image
              src={university.image}
              alt={university.alt}
              width={100}
              height={100}
              className={styles.imgUniv}
            />
          </Link>
        ))
      }
    </section>
  )
}
