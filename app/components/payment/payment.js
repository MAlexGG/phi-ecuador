import styles from './payment.module.css'
import Button from '../button/button'
import icoPay from '../../../public/icons/card.svg'
import Link from 'next/link'

export default function Payment({title, text, alt, href}) {

  return (
    <div className={styles.ctPayment}>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link href={href} className={styles.aButton}>
            <Button theme={true} img={icoPay} alt={alt}>Pagar</Button>
        </Link>
    </div>
  )
}

