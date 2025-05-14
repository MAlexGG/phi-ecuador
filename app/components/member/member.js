'use client'

import Image from 'next/image'
import styles from './member.module.css'
import googleLogo from '../../../public/img/logos/googleScholar.png'
import orcidLogo from '../../../public/img/logos/orcid.png'
import emailLogo from '../../../public/img/logos/email.png'

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
            <p><strong>{member.university.toUpperCase()}</strong></p>
            <p>{member.description}</p>
            <div className={styles.ctLinks}>
              <a href={member.linkOrcid}  target='_blank' rel="noopener noreferrer">
                <Image
                  src={orcidLogo}
                  alt={`${member.name} orcid profile`}
                  width={35}
                  height={35}
                />
              </a>
              <a href={member.linkGoogleScholar} className={styles.aLink} target='_blank' rel="noopener noreferrer">
                <Image
                  src={googleLogo}
                  alt={`${member.name} google scholar profile`}
                  width={35}
                  height={35}
                />
              </a>
              <a href={`mailto:${member.email}`}  target='_blank' rel="noopener noreferrer">
                <Image
                  src={emailLogo}
                  alt={`${member.name} email`}
                  width={35}
                  height={35}
                />
              </a>

            </div>
            
        </div>
      
    </div>
  )
}
