export default function BookingCard({ price }: { price: number }) {
  return (
    <div>
      <h2>Price: ${price}</h2>
      <button>Book Now</button>
    </div>
  );
}
