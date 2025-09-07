import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="fixed right-4 bottom-24 flex flex-col gap-3">
      <Link
        href="https://facebook.com"
        target="_blank"
        className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white shadow"
      >
        <Facebook className="w-5 h-5" />
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full text-white shadow"
      >
        <Instagram className="w-5 h-5" />
      </Link>
      <Link
        href="https://m.me"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 p-3 rounded-full text-white shadow"
      >
        <MessageCircle className="w-5 h-5" />
      </Link>
    </div>
  );
}
