import Image from "next/image";

const images = [
  { src: "/images/engraved.jpg", title: "Elegant Engraving" },
  { src: "/images/engraved.jpg", title: "Custom Design" },
  { src: "/images/engraved.jpg", title: "Minimalist Look" },
  { src: "/images/engraved.jpg", title: "Classic Style" },
  { src: "/images/engraved.jpg", title: "Gold Finish" },
  { src: "/images/engraved.jpg", title: "Premium Craft" },
  { src: "/images/engraved.jpg", title: "Rustic Vibes" },
  { src: "/images/engraved.jpg", title: "Modern Cut" },
  { src: "/images/engraved.jpg", title: "Modern Cut" },
  { src: "/images/engraved.jpg", title: "Modern Cut" },
  { src: "/images/engraved.jpg", title: "Modern Cut" },
  { src: "/images/engraved.jpg", title: "Modern Cut" },
];

// Some height classes to pick from
const heights = ["h-48", "h-64", "h-80", "h-96"];

export default function ImageGrid() {
  return (
    <section className="p-4 bg-black">
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {images.map((item, i) => {
          const randomHeight = heights[i % heights.length]; // cycle through heights

          return (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg break-inside-avoid cursor-pointer ${randomHeight}`}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover rounded-lg transition duration-300 group-hover:opacity-75"
              />

              {/* Overlay Title */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg font-semibold text-center px-2">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
