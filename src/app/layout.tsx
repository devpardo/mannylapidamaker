import "./globals.css";
import { ephesis, merriweather, roboto } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${merriweather.variable} ${ephesis.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
