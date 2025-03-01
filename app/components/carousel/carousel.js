'use client'

import { useState } from "react";
import styles from "./carousel.module.css";
import up from "../../../public/icons/up.svg";
import Image from "next/image";


export default function Carousel({images}) {

  const [position, setPosition] = useState(0);
  const imgSize = 704;


 const nextSlide = () => {
  if(position <= (images.length - 2) * imgSize){
    setPosition(position + imgSize);
  } else {
    setPosition(0);
  }
};

const prevSlide = () => {
  if(position <= 0){
    setPosition(0)
  } else {
    setPosition(position - imgSize)
  }
};

  return (
    <>
    <div className={styles.ctCarousel}>
      <div className={styles.ctCarouselImages} style={{ transform: `translateX(-${position}px`}}>
        {images.map((src, i) => (
            <div key={i} className={styles.ctCarouselImage}>
              <img src={src} alt="imágenes del evnto del 2023" className={styles.carouselImage}/>
            </div>
          ))
        }
      </div>
      <button onClick={prevSlide} className={`${styles.carouselButton} ${styles.left} ${position == 0 ? styles.disabled : ""}`}>
      <Image
          src={up}
          alt='botón para pasar las imágenes a la izquierda'
      />
    </button>

    <button onClick={nextSlide} className={`${styles.carouselButton} ${styles.right}`}>
      <Image
          src={up}
          alt='botón para pasar las imágenes a la derecha'
      />
    </button>
    </div>
    
    </>
  )


}