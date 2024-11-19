import styles from "./BookingCard.module.css";

export default function BookingCard({ price }: { price: number }) {
  return (
    <div className={styles.bookingCard}>
      <h2 className={styles.price}>${price} <span className={styles.perNight}>per night</span></h2>
      <button className={styles.bookButton}>Book Now</button>
    </div>
  );
}
