import Gallery from "@/components/Gallery/Gallery";

export default async function HomePage() {
  // Hardcoded image paths for testing
  const images = [
    "/uploads/images/KWF755_hotel_1731922546285_0.png",
    "/uploads/images/KWF755_hotel_1732008847022_image01.png",
    "/uploads/images/KWF755_hotel_1732008847023_image02.png"
  ];

  return (
    <div>
      <h1>Hotel Gallery</h1>
      <Gallery images={images} />
    </div>
  );
}
