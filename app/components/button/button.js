import Image from 'next/image'
import styles from './button.module.css'

export default function Button({children, theme, img, alt}) {

    let isDark = theme;

  return (
    <button className={isDark ? `${styles.dark}` : `${styles.light}`}>
        {children}
        <Image
            src={img}
            alt={alt}
            width={20}
        />
    </button>
  )
}

Button.defaultProps = {
    theme: false
}

