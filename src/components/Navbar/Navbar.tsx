"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleSaveSettings = () => {
    localStorage.setItem("selectedCountry", selectedCountry);
    localStorage.setItem("selectedCurrency", selectedCurrency);
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={styles.navbar}>
        <nav>
          <div className={styles.navLinks}>
            <a onClick={() => setIsModalOpen(true)}>
              <i className="fa-solid fa-globe"></i>
              <span id="country-name">{selectedCountry}</span>
            </a>
            <a href="#">Trip Boards</a>
            <a href="#">List your property</a>
            <a href="#">Help</a>
            <a href="#">My trips</a>
            <a href="#">Sign in</a>
          </div>
        </nav>
      </header>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Display Settings</h2>
            <label>
              Region:
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                <option value="USD">United States</option>
                <option value="EUR">Europe</option>
                <option value="GBP">United Kingdom</option>
              </select>
            </label>
            <button onClick={handleSaveSettings}>Save</button>
          </div>
        </div>
      )}
    </>
  );
}
