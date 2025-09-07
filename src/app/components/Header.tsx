"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-deep-red shadow z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded">
            <Image
              src="/images/logo.png"
              alt="Manny Logo"
              width={36}
              height={36}
            />
          </div>
          <Link
            href="#hero"
            className="text-sm font-bold text-gray-300 font-merriweather flex flex-col"
          >
            Manny Lapida Maker
            <span className="text-[0.625rem] italic font-thin">
              Your reliable partner in creating memories that matter.
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-merriweather font-semibold text-gray-300 hover:text-white transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-deep-red">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-merriweather font-semibold text-gray-300 hover:text-white transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
