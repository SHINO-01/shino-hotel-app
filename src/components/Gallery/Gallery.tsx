"use client";

import { useState } from "react";
import styles from "./Gallery.module.css";

const BACKEND_URL = "http://localhost:3000";

export default function Gallery({
  hotelImages,
  roomImages,
}: {
  hotelImages: string[];
  roomImages: string[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine hotelImages and roomImages for modal view
  const allImages = [...hotelImages, ...roomImages];

  // Prepend backend URL to all images
  const resolvedHotelImages = hotelImages.map((image) => `${BACKEND_URL}${image}`);
  const resolvedRoomImages = roomImages.map((image) => `${BACKEND_URL}${image}`);
  const resolvedAllImages = allImages.map((image) => `${BACKEND_URL}${image}`);

  return (
    <div>
      {/* Main Gallery */}
      <div className={styles.gallery}>
        {/* Main Image */}
        <div className={styles.mainImage}>
          <img
            src={resolvedHotelImages[currentIndex]}
            alt={`Hotel Image ${currentIndex + 1}`}
            onError={(e) => (e.currentTarget.src = `${BACKEND_URL}/uploads/images/default-image.png`)}
          />
          <span
            className={styles.moreImagesButton}
            onClick={() => setIsModalOpen(true)}
          >
            +{resolvedAllImages.length - 1}
          </span>
        </div>

        {/* Thumbnails */}
        <div className={styles.thumbnails}>
          {resolvedHotelImages.slice(1, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={currentIndex === index + 1 ? styles.activeThumbnail : ""}
              onClick={() => setCurrentIndex(index + 1)}
              onError={(e) => (e.currentTarget.src = `${BACKEND_URL}/uploads/images/default-image.png`)}
            />
          ))}
        </div>
      </div>

      {/* Modal View */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {/* Close Button */}
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            {/* Modal Images */}
            <div className={styles.modalGallery}>
              {resolvedAllImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
