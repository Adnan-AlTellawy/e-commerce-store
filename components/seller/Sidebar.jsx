"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Statistics", path: "/seller", icon: "📊" },
    { name: "Add Product", path: "/seller/add-product", icon: "➕" },
    { name: "Product List", path: "/seller/product-list", icon: "📦" },
    { name: "Orders", path: "/seller/orders", icon: "📜" },
  ];

  return (
    <div
      className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col sticky top-0"
      dir="ltr"
    >
      <div className="p-8 border-b border-gray-50">
        <h2 className="text-orange-600 font-black text-2xl tracking-tighter">
          Quick<span className="text-gray-800">Panel</span>
        </h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all group ${
                isActive
                  ? "bg-orange-50 text-orange-600 shadow-sm"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <span
                className={`text-xl transition-transform group-hover:scale-110 ${isActive ? "grayscale-0" : "grayscale opacity-70"}`}
              >
                {item.icon}
              </span>
              <span className="text-sm">{item.name}</span>

              {isActive && (
                <div className="ml-auto w-1.5 h-6 bg-orange-600 rounded-full"></div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-50">
        <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-400 font-bold hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
          <span>🚪</span>
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
