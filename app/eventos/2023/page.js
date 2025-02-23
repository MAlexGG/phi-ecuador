'use client'

import Subtitle from "@/app/components/subtitle/subtitle"
import styles from "./page.module.css"
import Up from "@/app/components/upButton/up"
import Tab from "@/app/components/tab/tab"
import Description from "@/app/components/events/2023/description/description"
import { useState } from "react"
import Speakers from "@/app/components/events/2023/speakers/speakers"
import Schedule from "@/app/components/events/2023/schedule/schedule"
import Carousel from "@/app/components/carousel/carousel"
import data from "../../data/events/2023/images"

export default function Events2023() {

  const tabs = ["DESCRIPCIÓN", "PONENTES", "PROGRAMA", "GALERÍA DE IMÁGENES"];
  const components = [<Description/>, <Speakers/>, <Schedule/>, <Carousel images={data}/>]
  const [active, setActive] = useState(0);

    return (
      <Subtitle text='COLOQUIO GEOMATERIALES Y PATRIMONIO ARQUITECTÓNICO EN ECUADOR'>
        <h3>Red PHI - Ecuador</h3>
        <div className={styles.ctTabs}>
          <div className={styles.ctButtons}>
            {
              tabs.map((tab, index) => (
                <Tab key={index} active={active} index={index} setActive={setActive}>{tab}</Tab>
              ))
            }
          </div>
          <hr className={styles.hr}/>
        </div>

      {
        components[active] || null 
      }

        <Up/>
      </Subtitle>
    )
  }
  