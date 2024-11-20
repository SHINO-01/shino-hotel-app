import Gallery from "@/components/Gallery/Gallery";
import { fetchHotelDetails } from "@/lib/api";

export default async function HomePage() {
  // Dynamic hotel ID for fetching data
  const hotelId = "KWF755";

  try {
    // Fetch hotel details dynamically
    const hotel = await fetchHotelDetails(hotelId);

    // Destructure data from the fetched hotel object
    const { title, description, address, guestCount, bedroomCount, bathroomCount, amenities, images: hotelImages, rooms } = hotel;

    // Extract room images
    const roomImages = rooms.flatMap((room: any) => room.roomImage);

    return (
      <div>
        {/* Hotel Title */}
        <h1>{title}</h1>

        {/* Hotel Description */}
        <p>{description}</p>

        {/* Address */}
        <p><strong>Address:</strong> {address}</p>

        {/* Guest, Bedroom, and Bathroom Counts */}
        <p>
          <strong>Guests:</strong> {guestCount} <br />
          <strong>Bedrooms:</strong> {bedroomCount} <br />
          <strong>Bathrooms:</strong> {bathroomCount}
        </p>

        {/* Amenities */}
        <div>
          <h2>Amenities:</h2>
          <ul>
            {amenities.map((amenity: string, index: number) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Room Details */}
        <div>
          <h2>Rooms:</h2>
          {rooms.map((room: any, index: number) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h3>{room.roomTitle}</h3>
              <p>
                <strong>Bedrooms:</strong> {room.bedroomCount} <br />
                <strong>Bathrooms:</strong> {room.bathroomCount}
              </p>
              <div>
                <h4>Room Images:</h4>
                {room.roomImage.map((img: string, imgIndex: number) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`Room ${index + 1} Image ${imgIndex + 1}`}
                    style={{ width: "100px", marginRight: "10px" }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Component for Combined Images */}
        <Gallery hotelImages={hotelImages} roomImages={roomImages} />
      </div>
    );
  } catch (error) {
    console.error("Error loading hotel data:", error);
    return <div>Error loading hotel data.</div>;
  }
}
