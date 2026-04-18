"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-20" dir="ltr">
      <div className="px-[5%] py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Section 1: About */}
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-black text-orange-600">
            QuickCart
          </Link>
          <p className="text-gray-500 leading-relaxed text-sm">
            Our store provides you with the latest technology and smart devices
            with high quality and the best prices. We believe that technology
            should be accessible to everyone.
          </p>
          <div className="flex gap-4">
            <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition duration-300  cursor-pointer">
              FB
            </span>
            <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition duration-300 cursor-pointer">
              X
            </span>
            <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition duration-300 cursor-pointer">
              IG
            </span>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-orange-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/all-products"
                className="hover:text-orange-600 transition"
              >
                Browse Products
              </Link>
            </li>
            <li>
              <Link href="/seller" className="hover:text-orange-600 transition">
                Join as Seller
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-orange-600 transition">
                About QuickCart
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Support */}
        <div>
          <h3 className="font-bold text-gray-900 mb-6 text-lg">
            Technical Support
          </h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li>
              <Link href="#" className="hover:text-orange-600 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-600 transition">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-600 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-600 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Contact Info */}
        <div>
          <h3 className="font-bold text-gray-900 mb-6 text-lg">
            Contact Information
          </h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span>📍</span>
              <span>Syria, Homs, Al-Insha'at District</span>
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>+963 9xx xxx xxx</span>
            </li>
            <li className="flex items-center gap-3">
              <span>✉️</span>
              <span>support@quickcart.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-8 px-[5%] flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50">
        <p className="text-gray-500 text-sm">
          All rights reserved © {currentYear}{" "}
          <span className="font-bold text-orange-600">QuickCart</span>
        </p>
        <div className="flex gap-4 grayscale opacity-50">
          <span className="text-xs font-bold border px-2 py-1 rounded">
            VISA
          </span>
          <span className="text-xs font-bold border px-2 py-1 rounded">
            MASTERCARD
          </span>
          <span className="text-xs font-bold border px-2 py-1 rounded">
            PAYPAL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
