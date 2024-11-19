import Gallery from "@/components/Gallery/Gallery";
import { fetchHotelDetails } from "@/lib/api";

export default async function HomePage() {
  // Dynamic hotel ID for fetching data
  const hotelId = "KWF755";

  try {
    // Fetch hotel details dynamically
    const hotel = await fetchHotelDetails(hotelId);

    // Destructure images for easy passing to the Gallery component
    const { images: hotelImages, rooms } = hotel;

    // Extract room images
    const roomImages = rooms.flatMap((room: any) => room.roomImage);

    return (
      <div>
        <h1>{hotel.title}</h1>
        <Gallery hotelImages={hotelImages} roomImages={roomImages} />
      </div>
    );
  } catch (error) {
    console.error("Error loading hotel data:", error);
    return <div>Error loading hotel data.</div>;
  }
}
