// src/components/Header.tsx

import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="#" className={styles.navLink}>United States</Link>
        <Link href="#" className={styles.navLink}>Trip Boards</Link>
        <Link href="#" className={styles.navLink}>Help</Link>
        <Link href="#" className={styles.navLink}>List your property</Link>
        <Link href="#" className={styles.navLink}>Inbox</Link>
        <Link href="#" className={styles.navLink}>Travel Bookings</Link>
        <Link href="#" className={styles.navLink}>Sign in</Link>
      </nav>
    </header>
  );
};

export default Navbar;
