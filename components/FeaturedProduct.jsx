"use client";

import React from "react";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

const FeaturedProduct = () => {
  const { products, currency } = useAppContext();
  const featured = products[0];

  if (!featured) return null;

  return (
    <section className="px-[5%] py-12" dir="ltr">
      <div className="bg-gray-900 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px] relative group overflow-hidden">
          <img
            src={featured.images[0]}
            alt={featured.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 text-left">
          <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-4 animate-bounce">
            New Arrival
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4">
            {featured.name}
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            {featured.description}
          </p>

          <div className="flex items-center gap-6 mb-8">
            <span className="text-3xl font-black text-orange-500">
              {currency}
              {featured.price}
            </span>
            <span className="text-gray-500 line-through text-lg">
              {currency}
              {featured.price + 50}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/product/${featured.id}`}
              className="bg-white text-black px-10 py-4 rounded-xl font-bold text-center hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              View Details
            </Link>
            <button className="border border-gray-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-gray-800 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
