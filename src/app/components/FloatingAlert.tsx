"use client";

import { useState } from "react";

export default function FloatingAlert() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-yellow-200 text-light-gray px-6 py-4 rounded-lg shadow-lg flex items-start justify-between space-x-4 max-w-xl w-full z-50 transition-opacity duration-300 opacity-100">
        <div className="flex flex-col">
          <span className="flex">
            RAINY SEASON DISCOUNT! 10% OFF on all lapida with picture.
          </span>
          <a
            href="https://www.facebook.com/watch/?v=1318302940301732"
            className="flex underline"
          >
            Visit our FB Page for more.
          </a>
        </div>
        <div className="flex items-start h-full">
          <button
            onClick={() => {
              setIsVisible(false);
            }}
            aria-label="Close alert"
            className="text-light-gray hover:text-black font-bold cursor-pointer"
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
}
