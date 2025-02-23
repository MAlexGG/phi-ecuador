'use client'

import { useState, useRef, useEffect } from "react";
import styles from "./carousel.module.css";
import up from "../../../public/icons/up.svg";
import Image from "next/image";

export default function Carousel({ images }) {
    const [index, setIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const carouselRef = useRef(null);
    const imageWidth = 689;
    const gap = 17;
  
    useEffect(() => {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth);
      }
      const handleResize = () => {
        if (carouselRef.current) {
          setContainerWidth(carouselRef.current.offsetWidth);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const maxIndex = Math.max(0, images.length - Math.ceil(containerWidth / (imageWidth + gap))-2);
  
    const nextSlide = () => {
      if (index < maxIndex) {
        setIndex(index + 1);
      }
    };
  
    const prevSlide = () => {
      if (index > 0) {
        setIndex(index - 1);
      }
    };
  
    return (
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainer} ref={carouselRef}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(-${index * (imageWidth + gap)}px`}}>
            {images.map((src, i) => (
              <img key={i} src={src} className={styles.carouselImage} alt="carousel" />
            ))}
          </div>
        </div>
        <button onClick={prevSlide} disabled={index === 0} className={`${styles.carouselButton} ${styles.left} ${index === 0 ? styles.disabled : ""}`}>
            <Image
                src={up}
                alt='botón para pasar las imágenes a la izquierda'
            />
        </button>
        <button onClick={nextSlide} disabled={index >= maxIndex} className={`${styles.carouselButton} ${styles.right} ${index >= maxIndex ? styles.disabled : ""}`}>
            <Image
                src={up}
                alt='botón para pasar las imágenes a la derecha'
            />
        </button>
    </div>
    );
}




