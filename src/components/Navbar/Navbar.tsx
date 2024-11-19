import styles from "./Navbar.module.css";
import React from "react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Hotel Booking</div>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
