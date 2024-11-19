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
    return <div>Hotel not found</div>;
  }

  return (
    <div>
      <Gallery images={hotel.images || []} />
      <PropertyDetails hotel={hotel} />
      <BookingCard price={hotel.price || 0} />
    </div>
  );
}
