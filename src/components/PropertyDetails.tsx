export default function PropertyDetails({ hotel }: { hotel: any }) {
  return (
    <div>
      <h1>{hotel.title}</h1>
      <p>{hotel.description}</p>
    </div>
  );
}
