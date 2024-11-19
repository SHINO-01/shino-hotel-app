"use client";

import React from "react";
import styles from "./Modals.module.css";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    title: string;
    location: string;
    rating: number;
    image: string;
  };
}

export default function ShareModal({ isOpen, onClose, property }: ShareModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalShare}>
      <div className={styles.modalShareContent}>
        <div className={styles.modalShareHeader}>
          <span className={styles.closeButtonShare} onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <p className={styles.shareModalTxt}>Share</p>
        </div>
        <div className={styles.modalShareBody}>
          <div className={styles.modalMapContainer}>
            <img
              src={property.image}
              alt={property.title}
              className={styles.modalShareImg}
            />
            <div className={styles.modalLocationLabel}>
              <h2 className={styles.modalTitle}>{property.title}</h2>
              <p className={styles.modalLocation}>{property.location}</p>
              <p className={styles.modalRating}>{property.rating}/10</p>
            </div>
          </div>
          <div className={styles.modalShareOptions}>
            <a href="#" className={styles.modalShareButton}>
              <i className="fa-regular fa-message"></i>
            </a>
            <a href="#" className={styles.modalShareButton}>
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" className={styles.modalShareButton}>
              <i className="fa-brands fa-facebook-messenger"></i>
            </a>
            <a href="#" className={styles.modalShareButton}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className={styles.modalShareButton}>
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className={styles.modalCopyLinkButton}>
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
