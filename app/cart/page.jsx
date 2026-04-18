"use client";

import React, { useMemo } from "react";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItems, currency, setCartItems } = useAppContext();
  const router = useRouter();

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0,
    );
  }, [cartItems]);

  const shippingFee = 0;
  const tax = subtotal * 0.05;
  const grandTotal = subtotal + shippingFee + tax;

  const updateQuantity = (index, delta) => {
    const updatedCart = [...cartItems];
    const newQty = (updatedCart[index].quantity || 1) + delta;

    if (newQty > 0) {
      updatedCart[index].quantity = newQty;
      setCartItems(updatedCart);
    } else {
      removeFromCart(index);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    toast.error("Item removed from cart");
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }

    localStorage.removeItem("userAddress");

    toast.info("Please provide your shipping address for this order");

    router.push("/add-address");
  };

  return (
    <div className="px-[5%] py-12 min-h-screen bg-[#fcfcfc]" dir="ltr">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline gap-4 mb-12">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            My Cart
          </h1>
          <span className="text-gray-400 font-medium">
            ({cartItems.length} items)
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[2rem] border border-dashed border-gray-200 flex flex-col items-center">
            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-4xl mb-6">
              🛒
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Your basket is lonely!
            </h2>
            <p className="text-gray-500 mt-2 mb-10 max-w-sm">
              Discover our latest tech arrivals and fill your cart with
              greatness.
            </p>
            <Link
              href="/all-products"
              className="btn-primary py-4 px-12 rounded-xl"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
            <div className="xl:col-span-8 space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col sm:flex-row items-center gap-8 bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-50">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 text-center">
                    <h3 className="font-bold text-xl text-gray-900 mb-2 truncate max-w-[250px]">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-center sm:justify-start gap-4">
                      <span className="text-orange-600 font-black text-2xl">
                        {currency}
                        {item.price}
                      </span>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        In Stock
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center bg-gray-50 p-1.5 rounded-xl border border-gray-100">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm hover:bg-orange-500 hover:text-white transition-all text-xl font-bold"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-bold text-gray-800">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm hover:bg-orange-500 hover:text-white transition-all text-xl font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="absolute top-4 right-4 sm:static w-12 h-12 flex items-center justify-center rounded-xl text-gray-300 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="xl:col-span-4 sticky top-28">
              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/40 border border-gray-50">
                <h2 className="text-2xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-50">
                  Order Summary
                </h2>

                <div className="space-y-5">
                  <div className="flex justify-between text-gray-500 font-semibold text-sm">
                    <span>Subtotal</span>
                    <span className="text-gray-900">
                      {currency}
                      {subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-500 font-semibold text-sm">
                    <span>Estimated Tax (5%)</span>
                    <span className="text-gray-900">
                      {currency}
                      {tax.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-500 font-semibold text-sm">
                    <span>Shipping Fee</span>
                    <span className="text-green-600 font-bold">FREE</span>
                  </div>

                  <div className="pt-8 mt-8 border-t border-gray-100">
                    <div className="flex justify-between items-end mb-8">
                      <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">
                        Total to pay
                      </span>
                      <span className="text-4xl font-black text-orange-600 tracking-tighter">
                        {currency}
                        {grandTotal.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={handleCheckout}
                      className="btn-primary w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-lg group"
                    >
                      <span>Checkout</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>

                    <Link
                      href="/all-products"
                      className="block text-center text-gray-400 font-bold text-sm mt-8 hover:text-orange-600 transition-colors"
                    >
                      ← Back to Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
