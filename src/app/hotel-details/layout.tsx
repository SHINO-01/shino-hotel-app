import styles from "./layout.module.css";

export default function HotelDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.hotelDetailsLayout}>
      <header className={styles.header}>
        <h1>Explore Your Perfect Stay</h1>
      </header>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

// export default function HotelDetailsLayout({ children }: { children: React.ReactNode }) {
//     return <div className="hotel-details-layout">{children}</div>;
//   }
