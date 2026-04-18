// 'use client'
// import Navbar from '@/components/seller/Navbar'
// import Sidebar from '@/components/seller/Sidebar'
// import React from 'react'

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Navbar />
//       <div className='flex w-full'>
//         <Sidebar />
//         {children}
//       </div>
//     </div>
//   )
// }

// export default Layoutهذا هذا

// import Link from "next/link";

// export default function SellerLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar - الشريط الجانبي للبائع */}
//       <aside className="w-64 bg-white border-l shadow-sm hidden md:block">
//         <div className="p-6 border-b">
//           <h2 className="font-bold text-gray-800 uppercase tracking-wider text-sm text-center">
//             لوحة تحكم البائع
//           </h2>
//         </div>
//         <nav className="p-4 space-y-2">
//           <Link
//             href="/seller"
//             className="block p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition font-medium"
//           >
//             📊 الإحصائيات
//           </Link>
//           <Link
//             href="/seller/add-product"
//             className="block p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition font-medium"
//           >
//             ➕ إضافة منتج
//           </Link>
//           <Link
//             href="/seller/product-list"
//             className="block p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition font-medium"
//           >
//             📦 قائمة المنتجات
//           </Link>
//           <Link
//             href="/seller/orders"
//             className="block p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition font-medium"
//           >
//             📝 الطلبات
//           </Link>
//         </nav>
//       </aside>

//       {/* المحتوى الرئيسي للوحة التحكم */}
//       <div className="flex-1 p-8">
//         <header className="mb-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm md:hidden">
//           <span className="font-bold text-orange-600">لوحة البائع</span>
//           {/* يمكنك إضافة زر للقائمة هنا للجوال */}
//         </header>
//         {children}
//       </div>
//     </div>
//   );
// }

// import Link from "next/link";

// export default function SellerLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-gray-50" dir="ltr">
//       {/* Sidebar - Seller Control Panel */}
//       <aside className="w-64 bg-white border-r border-gray-100 shadow-sm hidden md:block">
//         <div className="p-6 border-b border-gray-50">
//           <h2 className="font-black text-gray-900 uppercase tracking-widest text-xs text-center">
//             Seller Dashboard
//           </h2>
//         </div>

//         <nav className="p-4 space-y-1">
//           <Link
//             href="/seller"
//             className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 font-bold text-gray-600 text-sm group"
//           >
//             <span className="group-hover:scale-110 transition-transform">
//               📊
//             </span>
//             Statistics
//           </Link>

//           <Link
//             href="/seller/add-product"
//             className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 font-bold text-gray-600 text-sm group"
//           >
//             <span className="group-hover:scale-110 transition-transform">
//               ➕
//             </span>
//             Add Product
//           </Link>

//           <Link
//             href="/seller/product-list"
//             className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 font-bold text-gray-600 text-sm group"
//           >
//             <span className="group-hover:scale-110 transition-transform">
//               📦
//             </span>
//             Product List
//           </Link>

//           <Link
//             href="/seller/orders"
//             className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 font-bold text-gray-600 text-sm group"
//           >
//             <span className="group-hover:scale-110 transition-transform">
//               📝
//             </span>
//             Manage Orders
//           </Link>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         {/* Mobile Header (Visible only on small screens) */}
//         <header className="mb-6 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm md:hidden border border-gray-100">
//           <span className="font-black text-orange-600 tracking-tighter">
//             SELLER PANEL
//           </span>
//           <button className="p-2 bg-gray-50 rounded-lg">☰</button>
//         </header>

//         {/* Injecting Page Content */}
//         <div className="max-w-6xl mx-auto">{children}</div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function SellerLayout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-gray-50 relative" dir="ltr">
//       {/* القائمة الجانبية - Sidebar */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-[110] w-64 bg-white border-r border-gray-100 shadow-2xl transition-transform duration-300 transform
//         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//         md:relative md:translate-x-0 md:block`}
//       >
//         <div className="p-6 border-b border-gray-50 flex justify-between items-center">
//           <h2 className="font-black text-gray-900 uppercase tracking-widest text-[13px]">
//             Seller Dashboard
//           </h2>
//           {/* الإغلاق بالـ X فقط كما طلبت */}
//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="md:hidden text-gray-400 text-xl hover:text-orange-600"
//           >
//             ✕
//           </button>
//         </div>

//         <nav className="p-4 space-y-1">
//           <SidebarLink
//             href="/seller"
//             icon="📊"
//             label="Statistics"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//           <SidebarLink
//             href="/seller/add-product"
//             icon="➕"
//             label="Add Product"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//           <SidebarLink
//             href="/seller/product-list"
//             icon="📦"
//             label="Product List"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//           <SidebarLink
//             href="/seller/orders"
//             icon="📝"
//             label="Manage Orders"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//           <hr className="my-4 border-gray-50" />
//           <SidebarLink
//             href="/"
//             icon="🏠"
//             label="Back to Store"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//         </nav>
//       </aside>

//       {/* الخلفية الشفافة - لا تغلق القائمة عند الضغط عليها */}
//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-black/30 z-[105] md:hidden" />
//       )}

//       {/* محتوى الصفحة الرئيسي */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* هيدر الموبايل الخاص بالبائع فقط */}
//         <header className="sticky top-0 z-[90] flex justify-between items-center bg-white p-4 shadow-sm md:hidden border-b border-gray-100">
//           <span className="font-black text-orange-600 tracking-tighter uppercase ">
//             SELLER PANEL
//           </span>
//           <button
//             onClick={() => setIsSidebarOpen(true)}
//             className="p-2 bg-gray-50 rounded-lg text-xl"
//           >
//             ☰
//           </button>
//         </header>

//         <main className="p-4 md:p-8">
//           <div className="max-w-6xl mx-auto">{children}</div>
//         </main>
//       </div>
//     </div>
//   );
// }

// function SidebarLink({ href, icon, label, onClick }) {
//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all font-bold text-gray-600 text-sm text-left"
//     >
//       <span>{icon}</span>
//       {label}
//     </Link>
//   );
// }




"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SellerLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // هذا الجزء سيخفي أي ناف بار خارجي فور تحميل الصفحة
  useEffect(() => {
    // نبحث عن عناصر الـ Nav والـ Header التي قد تكون تابعة للموقع الرئيسي ونخفيها
    const mainNav = document.querySelector('nav'); 
    if (mainNav && !mainNav.contains(document.querySelector('.seller-nav'))) {
      mainNav.style.display = 'none';
    }
    
    return () => {
      if (mainNav) mainNav.style.display = 'flex'; // يعيده عند الخروج من لوحة البائع
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 relative z-[9999]" dir="ltr">
      {/* القائمة الجانبية */}
      <aside 
        className={`fixed inset-y-0 left-0 z-[10001] w-64 bg-white border-r border-gray-100 shadow-2xl transition-transform duration-300 transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:block`}
      >
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h2 className="font-black text-gray-900 uppercase tracking-widest text-[13px]">Seller Dashboard</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-400 text-xl hover:text-orange-600">✕</button>
        </div>

        <nav className="p-4 space-y-1">
          <SidebarLink href="/seller" icon="📊" label="Statistics" onClick={() => setIsSidebarOpen(false)} />
          <SidebarLink href="/seller/add-product" icon="➕" label="Add Product" onClick={() => setIsSidebarOpen(false)} />
          <SidebarLink href="/seller/product-list" icon="📦" label="Product List" onClick={() => setIsSidebarOpen(false)} />
          <SidebarLink href="/seller/orders" icon="📝" label="Manage Orders" onClick={() => setIsSidebarOpen(false)} />
          <hr className="my-4 border-gray-50" />
          <SidebarLink href="/" icon="🏠" label="Back to Store" onClick={() => setIsSidebarOpen(false)} />
        </nav>
      </aside>

      {/* الخلفية الشفافة */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-[10000] md:hidden" />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {/* هيدر البائع (Seller Panel) */}
        <header className="seller-nav sticky top-0 z-[9999] flex justify-between items-center bg-white p-4 shadow-sm md:hidden border-b border-gray-100">
          <span className="font-black text-orange-600 tracking-tighter uppercase">SELLER PANEL</span>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-gray-50 rounded-lg text-xl">☰</button>
        </header>

        <main className="p-4 md:p-8">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}

function SidebarLink({ href, icon, label, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-all font-bold text-gray-600 text-sm text-left">
      <span>{icon}</span>
      {label}
    </Link>
  );
}
