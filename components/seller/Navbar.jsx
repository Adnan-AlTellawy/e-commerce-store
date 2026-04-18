"use client";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { cartItems } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0,
  );

  if (pathname.startsWith("/seller")) return null;

  return (
    <nav
      className="flex justify-between items-center py-5 px-[5%] border-b shadow-sm bg-white sticky top-0 z-[100]"
      dir="ltr"
    >
      <Link href="/" className="text-2xl font-black text-orange-600">
        QuickCart
      </Link>

      <div className="flex items-center gap-5">
        <Link href="/cart" className="relative">
          <span className="text-xl">🛒</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
              {totalItems}
            </span>
          )}
        </Link>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-[1000] backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-white z-[1001] shadow-2xl md:hidden flex flex-col p-6 animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
                Navigation
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-4 text-left">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-gray-700"
              >
                Home
              </Link>
              <Link
                href="/all-products"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-gray-700"
              >
                Shop
              </Link>
              <Link
                href="/seller"
                onClick={() => setIsMenuOpen(false)}
                className="bg-orange-600 text-white text-center py-4 rounded-2xl font-black mt-4"
              >
                Seller Portal
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
