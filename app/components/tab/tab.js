import styles from "./tab.module.css"

export default function Tab({children, active, index, setActive}) {
  return (
    <button className={active === index ? `${styles.dark}` : `${styles.light}`} onClick={()=>setActive(index)}>
        {children}
    </button>
  )
}
