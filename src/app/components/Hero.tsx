import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 flex flex-col justify-center items-center text-center bg-black px-4"
    >
      <h1 className="text-5xl md:text-7xl font-cursive mb-4 text-gray-300">
        A Memorial Tribute
      </h1>

      <p className="w-11/12 md:w-5/6 mb-4 font-merriweather text-lg text-gray-400">
        Beautiful, personalized lapida (tombstones) that celebrate a life lived
        and preserve cherished memories.
      </p>

      <Link href="#services" className="w-full flex justify-center mb-5 mt-4">
        <div className="relative w-full max-w-md bg-deep-red hover:bg-deep-red/80 transition text-white rounded-full px-6 py-3 flex items-center justify-between shadow-md">
          <span className="text-center">
            Explore <span className="font-bold">Manny Lapida Maker&apos;s</span>{" "}
            services
          </span>
          <div className="absolute right-3 flex items-center justify-center rounded-full pl-1.5 pr-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </div>
        </div>
      </Link>
    </section>
  );
}
