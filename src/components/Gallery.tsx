// src/components/Gallery.tsx

import React, { useState } from 'react';
import Modal from './Modal';
import styles from './Gallery.module.css';

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage} onClick={() => openModal(0)}>
        <img src={images[0]} alt="Main" />
      </div>
      <div className={styles.smallImages}>
        {images.slice(1, 5).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            onClick={() => openModal(index + 1)}
          />
        ))}
        {images.length > 5 && (
          <div className={styles.imageOverlay} onClick={() => openModal(5)}>
            <span>{`+${images.length - 5}`}</span>
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className={styles.modalContent}>
            <button className={styles.prevButton} onClick={prevImage}>
              &lt;
            </button>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
            <button className={styles.nextButton} onClick={nextImage}>
              &gt;
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
