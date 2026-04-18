"use client";

import React from "react";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

const OrderSummary = () => {
  const { cartItems, currency } = useAppContext();
  const router = useRouter();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  const shippingFee = subtotal > 500 || subtotal === 0 ? 0 : 20;

  const total = subtotal + shippingFee;

  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24"
      dir="ltr"
    >
      <h2 className="text-xl font-black mb-6 text-gray-800 border-b pb-4 text-left">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-gray-600">
          <span className="font-medium">Subtotal</span>
          <span className="font-bold">
            {currency}
            {subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center text-gray-600">
          <span className="font-medium">Shipping Fee</span>
          <span
            className={`font-bold ${shippingFee === 0 ? "text-green-600" : ""}`}
          >
            {shippingFee === 0 ? "Free" : `${currency}${shippingFee}`}
          </span>
        </div>

        <div className="flex justify-between items-center text-gray-400 text-sm">
          <span>Estimated Tax (Included)</span>
          <span>
            {currency}
            {(subtotal * 0.05).toFixed(2)}
          </span>
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-black text-gray-900">
              Total Amount
            </span>
            <span className="text-2xl font-black text-orange-600">
              {currency}
              {total.toFixed(2)}
            </span>
          </div>
          <p className="text-[10px] text-gray-400 mt-2 text-left italic">
            * Final price may vary if a discount code is applied.
          </p>
        </div>

        <button
          onClick={() => router.push("/add-address")}
          disabled={cartItems.length === 0}
          className={`w-full py-4 rounded-xl font-bold mt-4 transition-all shadow-lg flex items-center justify-center gap-2
            ${
              cartItems.length === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800 active:scale-95"
            }`}
        >
          <span>Proceed to Checkout</span>
          <span className="text-xl">💳</span>
        </button>

        {subtotal < 500 && subtotal > 0 && (
          <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100">
            <p className="text-xs text-orange-700 text-center font-bold">
              Add {currency}
              {500 - subtotal} more for FREE shipping! 🚚
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
