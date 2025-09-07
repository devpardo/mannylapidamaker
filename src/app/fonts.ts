import { Ephesis, Merriweather, Roboto } from "next/font/google"

export const ephesis = Ephesis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ephesis",
})

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
})

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})
