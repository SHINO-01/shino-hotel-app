"use client";

import { useState } from "react";
import styles from "./Gallery.module.css";

const BACKEND_URL = "http://localhost:3000";

export default function Gallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prepend the backend URL to each image path
  const resolvedImages = images.map((image) => `${BACKEND_URL}${image}`);

  return (
    <div className={styles.gallery}>
      {/* Main Image */}
      <div className={styles.mainImage}>
        <img
          src={resolvedImages[currentIndex]}
          alt={`Gallery Image ${currentIndex + 1}`}
          onError={(e) => (e.currentTarget.src = `${BACKEND_URL}/uploads/images/default-image.png`)} // Default image fallback
        />
      </div>

      {/* Thumbnail Images */}
      <div className={styles.thumbnails}>
        {resolvedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={currentIndex === index ? styles.activeThumbnail : ""}
            onClick={() => setCurrentIndex(index)}
            onError={(e) => (e.currentTarget.src = `${BACKEND_URL}/uploads/images/default-image.png`)} // Default image fallback
          />
        ))}
      </div>
    </div>
  );
}
