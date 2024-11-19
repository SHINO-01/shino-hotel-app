"use client";

import React, { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <img src={images[currentIndex]} alt="Hotel" />
        <span
          className={styles.imageOverlay}
          onClick={() => setIsModalOpen(true)}
        >
          +{images.length - 1}
        </span>
      </div>
      <div className={styles.smallImages}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={currentIndex === index ? styles.active : ""}
          />
        ))}
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
            ×
          </button>
          <div className={styles.modalContent}>
            <button onClick={prevImage} className={styles.navButton}>
              ◀
            </button>
            <img src={images[currentIndex]} alt="Modal View" className={styles.modalImage} />
            <button onClick={nextImage} className={styles.navButton}>
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
