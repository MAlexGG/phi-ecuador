'use client'

import Image from 'next/image'
import styles from './member.module.css'

export default function Member({member}) {

  return (
    <div className={styles.ctMember}>
        <div className={styles.ctImg}>
            <Image
                src={member.image}
                alt={member.name}
                className={styles.imgMember}
                width={237}
                height={194}
            />
        </div>
        
        <div className={styles.ctText}>
            <h3>{member.name}</h3>
            <p>{member.description}</p>
            <a href={member.link} className={styles.aLink}>Link publicaciones</a>
        </div>
      
    </div>
  )
}
