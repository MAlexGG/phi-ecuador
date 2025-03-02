import Tab from "../tab/tab";
import styles from './tabs.module.css'

export default function Tabs({tabs, setActive, active}) {
  return (
    <div className={styles.ctTabs}>
          <div className={styles.ctButtons}>
            {
              tabs.map((tab, index) => (
                <Tab key={index} active={active} index={index} setActive={setActive}>{tab}</Tab>
              ))
            }
          </div>
          <div className={styles.hr}></div>
        </div>
  )
}