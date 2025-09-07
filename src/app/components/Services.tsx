const services = [
  "Custom Lapida Designs",
  "Laser-engraved Portraits",
  "Marble & Granite Memorials",
  "On-site Installation",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gray-100 px-6 py-12 text-center min-h-screen"
    >
      <h2 className="text-4xl font-cursive text-black mb-8  mt-[50px]">
        Our Services
      </h2>
      <ul className="grid gap-6 md:grid-cols-2">
        {services.map((service, i) => (
          <li
            key={i}
            className="bg-white shadow rounded-lg p-6 font-merriweather text-gray-800"
          >
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}
