"use client";

import { products } from "@/assets/data";
import Link from "next/link";
import { use } from "react";
import { useAppContext } from "@/context/AppContext";

export default function ProductDetails({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const { addToCart } = useAppContext();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div
        className="p-20 text-center min-h-[60vh] flex flex-col items-center justify-center gap-4"
        dir="ltr"
      >
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <p className="text-gray-500">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/all-products"
          className="text-orange-600 font-bold hover:underline"
        >
          Back to All Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12" dir="ltr">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/2 group">
          <div className="overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
            <img
              src={product.images[0]}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              alt={product.name}
            />
          </div>
        </div>

        <div className="flex-1 space-y-6 text-left">
          <div>
            <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
              {product.category}
            </span>
            <h1 className="text-4xl font-black text-gray-900 leading-tight">
              {product.name}
            </h1>
          </div>

          <p className="text-3xl text-orange-600 font-black">
            ${product.price}
          </p>

          <div className="border-t border-b py-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">
              Description
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg active:scale-95 uppercase tracking-wide flex items-center justify-center gap-2"
            >
              <span>ADD TO CART</span>
              <span className="text-xl">🛒</span>
            </button>

            <p className="text-center text-xs text-gray-400">
              Free shipping on orders over $500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
