import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        🌐
      </div>
      <ul className={styles.navLinks}>
        <li>United States</li>
        <li>Trip Boards</li>
        <li>List your property</li>
        <li>Help</li>
        <li>My trips</li>
        <li>Sign in</li>
      </ul>
    </nav>
  );
}