// 'use client'
// import React, { useState } from "react";
// import { assets } from "@/assets/assets";
// import Image from "next/image";

// const AddProduct = () => {

//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('Earphone');
//   const [price, setPrice] = useState('');
//   const [offerPrice, setOfferPrice] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//   };

//   return (
//     <div className="flex-1 min-h-screen flex flex-col justify-between">
//       <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
//         <div>
//           <p className="text-base font-medium">Product Image</p>
//           <div className="flex flex-wrap items-center gap-3 mt-2">

//             {[...Array(4)].map((_, index) => (
//               <label key={index} htmlFor={`image${index}`}>
//                 <input onChange={(e) => {
//                   const updatedFiles = [...files];
//                   updatedFiles[index] = e.target.files[0];
//                   setFiles(updatedFiles);
//                 }} type="file" id={`image${index}`} hidden />
//                 <Image
//                   key={index}
//                   className="max-w-24 cursor-pointer"
//                   src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
//                   alt=""
//                   width={100}
//                   height={100}
//                 />
//               </label>
//             ))}

//           </div>
//         </div>
//         <div className="flex flex-col gap-1 max-w-md">
//           <label className="text-base font-medium" htmlFor="product-name">
//             Product Name
//           </label>
//           <input
//             id="product-name"
//             type="text"
//             placeholder="Type here"
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             required
//           />
//         </div>
//         <div className="flex flex-col gap-1 max-w-md">
//           <label
//             className="text-base font-medium"
//             htmlFor="product-description"
//           >
//             Product Description
//           </label>
//           <textarea
//             id="product-description"
//             rows={4}
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
//             placeholder="Type here"
//             onChange={(e) => setDescription(e.target.value)}
//             value={description}
//             required
//           ></textarea>
//         </div>
//         <div className="flex items-center gap-5 flex-wrap">
//           <div className="flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="category">
//               Category
//             </label>
//             <select
//               id="category"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               onChange={(e) => setCategory(e.target.value)}
//               defaultValue={category}
//             >
//               <option value="Earphone">Earphone</option>
//               <option value="Headphone">Headphone</option>
//               <option value="Watch">Watch</option>
//               <option value="Smartphone">Smartphone</option>
//               <option value="Laptop">Laptop</option>
//               <option value="Camera">Camera</option>
//               <option value="Accessories">Accessories</option>
//             </select>
//           </div>
//           <div className="flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="product-price">
//               Product Price
//             </label>
//             <input
//               id="product-price"
//               type="number"
//               placeholder="0"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               onChange={(e) => setPrice(e.target.value)}
//               value={price}
//               required
//             />
//           </div>
//           <div className="flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="offer-price">
//               Offer Price
//             </label>
//             <input
//               id="offer-price"
//               type="number"
//               placeholder="0"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               onChange={(e) => setOfferPrice(e.target.value)}
//               value={offerPrice}
//               required
//             />
//           </div>
//         </div>
//         <button type="submit" className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded">
//           ADD
//         </button>
//       </form>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default AddProduct;

// "use client";
// import React from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer"; // تأكد من المسار حسب مشروعك

// const SellerDashboard = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen px-6 md:px-16 lg:px-32 py-12 bg-gray-50">
//         <h1 className="text-3xl font-bold">Seller Dashboard</h1>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
//             <p className="text-gray-500">Total Sales</p>
//             <h2 className="text-2xl font-bold text-orange-600">$4,250</h2>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
//             <p className="text-gray-500">Total Orders</p>
//             <h2 className="text-2xl font-bold text-orange-600">128</h2>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
//             <p className="text-gray-500">Active Products</p>
//             <h2 className="text-2xl font-bold text-orange-600">15</h2>
//           </div>
//         </div>
//         <div className="mt-10 bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-center text-gray-400 italic">
//           Product addition and management (Backend) is disabled in the preview
//           mode.
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SellerDashboard; هذا هذا

// "use client";

// import React from "react";

// const SellerDashboard = () => {
//   // بيانات إحصائية وهمية للعرض
//   const stats = [
//     {
//       title: "إجمالي المبيعات",
//       value: "$4,250",
//       icon: "💰",
//       color: "bg-green-50 text-green-600",
//     },
//     {
//       title: "الطلبات النشطة",
//       value: "12",
//       icon: "📦",
//       color: "bg-blue-50 text-blue-600",
//     },
//     {
//       title: "إجمالي المنتجات",
//       value: "15",
//       icon: "🛒",
//       color: "bg-orange-50 text-orange-600",
//     },
//     {
//       title: "تقييم المتجر",
//       value: "4.8",
//       icon: "⭐",
//       color: "bg-yellow-50 text-yellow-600",
//     },
//   ];

//   return (
//     <div className="space-y-8">
//       {/* قسم الترحيب */}
//       <div>
//         <h1 className="text-2xl font-black text-gray-800">
//           مرحباً بك مجدداً، يا بطل! 👋
//         </h1>
//         <p className="text-gray-500 mt-1">
//           إليك نظرة سريعة على ما يحدث في متجرك اليوم.
//         </p>
//       </div>

//       {/* كروت الإحصائيات */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
//           >
//             <div
//               className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-2xl mb-4`}
//             >
//               {stat.icon}
//             </div>
//             <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
//             <h3 className="text-2xl font-black text-gray-900 mt-1">
//               {stat.value}
//             </h3>
//           </div>
//         ))}
//       </div>

//       {/* قسم النشاطات الأخيرة */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* آخر الطلبات */}
//         <div className="bg-white p-6 rounded-2xl shadow-sm border">
//           <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
//             <span>📝</span> آخر الطلبات
//           </h3>
//           <div className="space-y-4">
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xs">
//                     U{i}
//                   </div>
//                   <div>
//                     <p className="font-bold text-sm text-gray-800">
//                       طلب جديد من عميل #{100 + i}
//                     </p>
//                     <p className="text-xs text-gray-400">منذ {i * 10} دقائق</p>
//                   </div>
//                 </div>
//                 <span className="text-orange-600 font-bold text-sm">$120</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* تنبيهات المخزون */}
//         <div className="bg-white p-6 rounded-2xl shadow-sm border">
//           <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
//             <span>⚠️</span> تنبيهات المخزون
//           </h3>
//           <div className="space-y-4">
//             <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
//               <p className="text-red-700 text-sm font-bold">
//                 منتج "سماعة برو" قارب على النفاد!
//               </p>
//               <p className="text-red-600 text-xs mt-1">
//                 الكمية المتبقية: 2 قطعة فقط.
//               </p>
//             </div>
//             <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl">
//               <p className="text-orange-700 text-sm font-bold">
//                 يوجد 5 طلبات بانتظار الشحن.
//               </p>
//               <p className="text-orange-600 text-xs mt-1">
//                 يرجى معالجتها لتفادي تأخير التسليم.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;

"use client";

import React from "react";

const SellerDashboard = () => {
  // Mock statistical data for display
  const stats = [
    {
      title: "Total Sales",
      value: "$4,250",
      icon: "💰",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Active Orders",
      value: "12",
      icon: "📦",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Products",
      value: "15",
      icon: "🛒",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Store Rating",
      value: "4.8",
      icon: "⭐",
      color: "bg-yellow-50 text-yellow-600",
    },
  ];

  return (
    <div className="space-y-8" dir="ltr">
      {/* Welcome Section */}
      <div className="text-left">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">
          Welcome back, Hero! 👋
        </h1>
        <p className="text-gray-500 mt-1 font-medium">
          Here’s a quick look at what’s happening in your store today.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-2xl mb-4`}
            >
              {stat.icon}
            </div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              {stat.title}
            </p>
            <h3 className="text-2xl font-black text-gray-900 mt-1">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>

      {/* Recent Activities Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-gray-800">
            <span>📝</span> Recent Orders
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-xl transition duration-200 border border-transparent hover:border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-500">
                    ID{i}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm text-gray-800">
                      New order from Customer #{100 + i}
                    </p>
                    <p className="text-xs text-gray-400">
                      {i * 10} minutes ago
                    </p>
                  </div>
                </div>
                <span className="text-orange-600 font-black text-sm">
                  $120.00
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm font-bold text-gray-400 hover:text-orange-600 transition-colors uppercase tracking-tighter">
            View All Orders
          </button>
        </div>

        {/* Inventory & Alerts */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-gray-800">
            <span>⚠️</span> Inventory Alerts
          </h3>
          <div className="space-y-4">
            {/* Low Stock Alert */}
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-left">
              <p className="text-red-700 text-sm font-bold">
                "Pro Headphones" is running low!
              </p>
              <p className="text-red-600 text-xs mt-1">
                Remaining stock: 2 units only.
              </p>
            </div>

            {/* Processing Alert */}
            <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl text-left">
              <p className="text-orange-700 text-sm font-bold">
                5 orders are pending shipment.
              </p>
              <p className="text-orange-600 text-xs mt-1">
                Please process them to avoid delivery delays.
              </p>
            </div>

            {/* Performance Tip */}
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-left">
              <p className="text-blue-700 text-sm font-bold">
                Store performance is up 15%
              </p>
              <p className="text-blue-600 text-xs mt-1">
                Your average response time is faster than last week!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
