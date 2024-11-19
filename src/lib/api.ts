export async function fetchHotelDetails(hotelId: string) {
  const response = await fetch(`http://localhost:3000/api/hotel/${hotelId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch hotel details");
  }
  const { data } = await response.json(); // Extract data from the response
  return data.hotel; // Return the hotel object
}
