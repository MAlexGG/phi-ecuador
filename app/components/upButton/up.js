import Image from 'next/image'
import styles from './up.module.css'
import up from '../../../public/icons/up.svg'

export default function Up() {


  return (
    <a href='#' className={styles.aUp}>
        <Image
          src={up}
          alt='botón que va al inicio de la página'
        />
      </a>
  )
}

