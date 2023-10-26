import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styles from './socialMedia.module.css'
import { socialLinks } from '@/app/data/social'

function SocialMedia() {
  return (
    <div className={styles.ctSocial}>
        {
            socialLinks.map((social, index) => (
                <Link href={social.href} key={index} target='_blank' rel="noopener noreferrer">
                    <Image
                        src={social.ico}
                        className={styles.imgSocial}
                        alt={social.name}
                        width={20}
                        height={20}
                    />
                </Link>
            ))
        }
        
        
    </div>
  )
}

export default SocialMedia