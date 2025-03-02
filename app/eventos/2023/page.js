'use client'

import Subtitle from "@/app/components/subtitle/subtitle"
import Description from "@/app/components/events/2023/description/description"
import { useEffect, useState } from "react"
import Speakers from "@/app/components/events/2023/speakers/speakers"
import Schedule from "@/app/components/events/2023/schedule/schedule"
import Carousel from "@/app/components/carousel/carousel"
import { horizontal, vertical } from "../../data/events/2023/images"
import Tabs from "@/app/components/tabs/tabs"
import styles from "./page.module.css"

export default function Events2023() {

  const tabs = ["DESCRIPCIÓN", "PONENTES", "PROGRAMA", "GALERÍA DE IMÁGENES"];
  const components = [<Description/>, <Speakers/>, <Schedule/>]
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [images, setImages] = useState(horizontal);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setImages(vertical); 
      } else {
        setImages(horizontal); 
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

    return (
      <Subtitle text='COLOQUIO GEOMATERIALES Y PATRIMONIO ARQUITECTÓNICO EN ECUADOR' tabs="tabs">
        <h3>Red PHI - Ecuador</h3>
        <div className={hidden ? `${styles.ctTabs} ${styles.hidden}` : styles.ctTabs}>
          <Tabs tabs={tabs} active={active} setActive={setActive} />
        </div>
      {
        components[active] || (active === 3 && <Carousel images={images}/>) 
      }
      </Subtitle>
    )
  }
  