"use client";

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto w-full border-t border-gray-100 bg-white py-6 px-8"
      dir="ltr"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500 font-medium text-left">
          <span className="text-orange-600 font-bold">QuickCart Seller</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>© {currentYear} All rights reserved</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-gray-400 hover:text-orange-600 transition-colors"
          >
            Help Center
          </a>
          <a
            href="#"
            className="text-xs text-gray-400 hover:text-orange-600 transition-colors"
          >
            Selling Rules
          </a>
          <a
            href="#"
            className="text-xs text-gray-400 hover:text-orange-600 transition-colors"
          >
            Technical Support
          </a>
        </div>

        <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-bold text-green-700 uppercase tracking-tight">
            Server Connected
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
