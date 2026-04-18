"use client";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";

export default function Navbar() {
  const { cartItems } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="flex justify-between items-center py-5 px-[5%] border-b shadow-sm bg-white sticky top-0 z-50"
      dir="ltr"
    >
      <Link href="/" className="text-2xl font-black text-orange-600">
        QuickCart
      </Link>

      <div className="hidden md:flex gap-6 font-medium text-gray-700">
        <Link href="/" className="hover:text-orange-600 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-orange-600 transition">
          Shop
        </Link>
        <Link
          href="/seller"
          className="bg-orange-50 px-3 py-1 rounded text-orange-600 hover:bg-orange-100 transition"
        >
          Seller Portal
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <Link href="/cart" className="relative group">
          <span className="text-xl">🛒</span>
          <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        </Link>

        <Link href="/login" className="hidden md:block">
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition-all duration-300">
            Login
          </button>
        </Link>

        <button
          className="md:hidden text-2xl p-1"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 p-6 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
          dir="ltr"
        >
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold text-orange-600">Menu</span>
            <button className="text-2xl" onClick={() => setIsMenuOpen(false)}>
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-6 font-semibold text-gray-800 text-left">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/all-products"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/seller"
              onClick={() => setIsMenuOpen(false)}
              className="text-orange-600 bg-orange-50 p-2 rounded-lg inline-block w-fit"
            >
              Seller Portal
            </Link>

            <hr className="my-2" />

            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-black text-white py-3 rounded-xl font-bold active:scale-95 transition-transform">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
