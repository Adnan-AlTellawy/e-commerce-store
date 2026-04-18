"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const OrderPlaced = () => {
  const { setCartItems } = useAppContext();

  useEffect(() => {
    setCartItems([]);
    localStorage.removeItem("userAddress");
  }, [setCartItems]);

  return (
    <div
      className="min-h-[80vh] flex items-center justify-center px-[5%] bg-white py-6"
      dir="ltr"
    >
      <div className="max-w-md w-full text-center space-y-6 p-10 rounded-3xl border shadow-sm">
        <div className="relative">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <span className="text-5xl">✅</span>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 border-4 border-green-500 rounded-full animate-ping opacity-20"></div>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black text-gray-900">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Thank you for your trust. We have received your order and we will
            process and ship it to you as soon as possible.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-300">
          <p className="text-sm text-gray-600">
            Order Number:{" "}
            <span className="font-bold text-black uppercase">
              #QC-{(Math.random() * 100000).toFixed(0)}
            </span>
          </p>
          <p className="text-xs text-gray-400 mt-1">
            You will receive an email with tracking details shortly.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <Link
            href="/my-orders"
            className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg uppercase tracking-wider"
          >
            Track My Order
          </Link>
          <Link
            href="/all-products"
            className="w-full text-orange-600 py-2 font-bold hover:underline"
          >
            Back to Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
