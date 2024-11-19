import { fetchHotelDetails } from "@/lib/api";

export default async function Head({ params }: { params: { slug: string; hotelId: string } }) {
  const hotel = await fetchHotelDetails(params.hotelId);

  if (!hotel) {
    return {
      title: "Hotel Not Found",
      description: "The requested hotel could not be found.",
    };
  }

  return {
    title: `${hotel.title} - Hotel Details`,
    description: hotel.description,
    openGraph: {
      title: `${hotel.title} - Hotel Details`,
      description: hotel.description,
      images: hotel.images.map((img:string) => ({ url: img })),
    },
  };
}
