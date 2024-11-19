import { fetchHotelDetails } from "@/lib/api";
import Gallery from "@/components/Gallery/Gallery";
import PropertyDetails from "@/components/PropertyDetails/PropertyDetails";
import BookingCard from "@/components/BookingCard/BookingCard";

export default async function HotelDetailsPage({
  params,
}: {
  params: { slug: string; hotelId: string };
}) {
  const hotel = await fetchHotelDetails(params.hotelId);

  if (!hotel) {
    throw new Error("Hotel not found!");
  }

  return (
    <div className="hotel-details">
      <Gallery images={hotel.images} />
      <div className="details-container">
        <PropertyDetails hotel={hotel} />
        <BookingCard price={hotel.price} />
      </div>
    </div>
  );
}