"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-gray-300 px-6 py-12 text-center min-h-screen"
    >
      <h2 className="text-4xl font-cursive mb-6 mt-[50px]">Get In Touch</h2>
      <p className="font-merriweather mb-4">
        Have questions or want to put up an order? Contact us today!
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div>
          <Image
            src="/images/map1.png"
            alt="Manny Logo"
            width={400}
            height={300}
            className="rounded-lg mb-1 lg:w-[80%] mx-auto"
          />
        </div>

        <div>
          <div className="text-gray-300 text-left">
            <p className="font-bold mb-3">
              You can visit us in our main office:
            </p>
            <ul className="text-left">
              <li className="mb-2">
                <strong>2243 DIMASALANG ST. STA.CRUZ MANILA </strong>
                <br />
                <span className="italic">
                  Nearest Landmark: Infront of Motopick Mnl
                </span>
              </li>
              <li>
                Mobile: <strong>(+63) 9175655006 / (+63) 934283318</strong>
              </li>
              <li>
                Email: <strong>mannyconcepts@gmail.com</strong>
              </li>
              <li>
                Messenger: <strong>Manny Lapida Maker</strong>
              </li>
            </ul>
            <a
              href="tel:+639123456789"
              className="mt-5 inline-block bg-deep-red hover:bg-deep-red/80 text-white font-bold rounded-full px-6 py-3"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
