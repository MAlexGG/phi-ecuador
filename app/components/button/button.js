import styles from './button.module.css'

export default function Button({children, theme}) {

    let isDark = theme;

  return (
    <button className={`${styles.button} ${isDark ? styles[`dark`] : styles['light']} `}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    theme: false
}

