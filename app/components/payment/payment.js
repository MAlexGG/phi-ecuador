import Image from 'next/image'
import styles from './payment.module.css'
import Button from '../button/button'
import icoPay from '../../../public/img/card.svg'

export default function Payment({title, text, alt}) {

  return (
    <div className={styles.ctPayment}>
        <h3>{title}</h3>
        <p>{text}</p>
        <Button theme={true} img={icoPay} alt={alt}>Pagar</Button>
    </div>
  )
}

