'use client'

import Image from 'next/image'
import styles from './speaker.module.css'

export default function Speaker({speaker}) {

  return (
    <div className={styles.ctMember}>
        <div className={styles.ctText}>
            <h3>{speaker.name}</h3>
            <p>{speaker.description}</p>
            <a href={speaker.link} className={styles.aLink} target='_blank' rel="noopener noreferrer">Link publicaciones</a>
        </div>
        <div className={styles.ctImg}>
            <Image
                src={speaker.image}
                alt={speaker.name}
                className={styles.imgMember}
                width={237}
                height={194}
            />
            <div className={styles.imgFlag}>
                <Image
                    src={speaker.country}
                    alt={`${speaker.country} flag`}
                    width={50}
                    height={28}
                />
            </div>
        </div>
    </div>
  )
}
