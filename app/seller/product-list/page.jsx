// 'use client'
// import React, { useEffect, useState } from "react";
// import { assets, productsDummyData } from "@/assets/assets";
// import Image from "next/image";
// import { useAppContext } from "@/context/AppContext";
// import Footer from "@/components/seller/Footer";
// import Loading from "@/components/Loading";

// const ProductList = () => {

//   const { router } = useAppContext()

//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)

//   const fetchSellerProduct = async () => {
//     setProducts(productsDummyData)
//     setLoading(false)
//   }

//   useEffect(() => {
//     fetchSellerProduct();
//   }, [])

//   return (
//     <div className="flex-1 min-h-screen flex flex-col justify-between">
//       {loading ? <Loading /> : <div className="w-full md:p-10 p-4">
//         <h2 className="pb-4 text-lg font-medium">All Product</h2>
//         <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
//           <table className=" table-fixed w-full overflow-hidden">
//             <thead className="text-gray-900 text-sm text-left">
//               <tr>
//                 <th className="w-2/3 md:w-2/5 px-4 py-3 font-medium truncate">Product</th>
//                 <th className="px-4 py-3 font-medium truncate max-sm:hidden">Category</th>
//                 <th className="px-4 py-3 font-medium truncate">
//                   Price
//                 </th>
//                 <th className="px-4 py-3 font-medium truncate max-sm:hidden">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-sm text-gray-500">
//               {products.map((product, index) => (
//                 <tr key={index} className="border-t border-gray-500/20">
//                   <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
//                     <div className="bg-gray-500/10 rounded p-2">
//                       <Image
//                         src={product.image[0]}
//                         alt="product Image"
//                         className="w-16"
//                         width={1280}
//                         height={720}
//                       />
//                     </div>
//                     <span className="truncate w-full">
//                       {product.name}
//                     </span>
//                   </td>
//                   <td className="px-4 py-3 max-sm:hidden">{product.category}</td>
//                   <td className="px-4 py-3">${product.offerPrice}</td>
//                   <td className="px-4 py-3 max-sm:hidden">
//                     <button onClick={() => router.push(`/product/${product._id}`)} className="flex items-center gap-1 px-1.5 md:px-3.5 py-2 bg-orange-600 text-white rounded-md">
//                       <span className="hidden md:block">Visit</span>
//                       <Image
//                         className="h-3.5"
//                         src={assets.redirect_icon}
//                         alt="redirect_icon"
//                       />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>}
//       <Footer />
//     </div>
//   );
// };

// export default ProductList;

// "use client";
// import React from "react";
// import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/seller/Sidebar";
// import { useAppContext } from "@/context/AppContext";
// import Image from "next/image";

// const ProductList = () => {
//   const { products } = useAppContext();

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-10 text-gray-800">
//           <h2 className="text-xl font-bold mb-8">Product Management</h2>
//           <div className="bg-white rounded-xl border overflow-hidden shadow-sm">
//             <table className="w-full text-left">
//               <thead className="bg-gray-100 border-b">
//                 <tr>
//                   <th className="px-6 py-4">Image</th>
//                   <th className="px-6 py-4">Name</th>
//                   <th className="px-6 py-4">Price</th>
//                   <th className="px-6 py-4">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.slice(0, 5).map((item, index) => (
//                   <tr key={index} className="border-b">
//                     <td className="px-6 py-4">
//                       <Image
//                         src={item.image[0]}
//                         width={40}
//                         height={40}
//                         className="rounded"
//                         alt=""
//                       />
//                     </td>
//                     <td className="px-6 py-4">{item.name}</td>
//                     <td className="px-6 py-4 text-orange-600 font-bold">
//                       ${item.price}
//                     </td>
//                     <td className="px-6 py-4 text-red-500 cursor-pointer hover:underline">
//                       Delete
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;

// "use client";
// import React from "react";
// import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/seller/Sidebar";
// import { useAppContext } from "@/context/AppContext";
// import Image from "next/image";

// const ProductList = () => {
//   // 1. تأكد من جلب البيانات من الـ Context
//   const { products } = useAppContext();

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <div className="flex flex-col md:flex-row">
//         <Sidebar />
//         <div className="flex-1 p-6 md:p-10 text-gray-800">
//           <h2 className="text-xl font-bold mb-8">Product Management</h2>
//           <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-gray-50 border-b border-gray-100">
//                 <tr>
//                   <th className="px-6 py-4 font-semibold text-gray-700">
//                     Image
//                   </th>
//                   <th className="px-6 py-4 font-semibold text-gray-700">
//                     Name
//                   </th>
//                   <th className="px-6 py-4 font-semibold text-gray-700">
//                     Price
//                   </th>
//                   <th className="px-6 py-4 font-semibold text-gray-700">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* 2. الإصلاح: أضفنا علامة الاستحقاق الاختياري ?. لضمان عدم الانهيار */}
//                 {products && products.length > 0 ? (
//                   products.slice(0, 10).map((item, index) => (
//                     <tr
//                       key={index}
//                       className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="px-6 py-4">
//                         <Image
//                           src={item.image[0]}
//                           width={40}
//                           height={40}
//                           className="rounded-md bg-gray-100 object-contain"
//                           alt={item.name}
//                         />
//                       </td>
//                       <td className="px-6 py-4 font-medium text-gray-800">
//                         {item.name}
//                       </td>
//                       <td className="px-6 py-4 font-bold text-orange-600">
//                         ${item.price}
//                       </td>
//                       <td className="px-6 py-4">
//                         <button className="text-red-500 hover:text-red-700 text-xs font-medium">
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan="4"
//                       className="px-6 py-10 text-center text-gray-400"
//                     >
//                       No products found or loading...
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList; هذا هذا

// "use client";

// import React from "react";
// import { products } from "@/assets/data"; // جلب المنتجات من ملف البيانات المحلي

// const SellerProductList = () => {
//   return (
//     <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
//       {/* رأس الصفحة */}
//       <div className="p-6 border-b flex justify-between items-center bg-gray-50/50">
//         <div>
//           <h2 className="text-xl font-black text-gray-800">إدارة منتجاتي</h2>
//           <p className="text-sm text-gray-500 mt-1">
//             عرض وتحرير جميع المنتجات المعروضة في المتجر
//           </p>
//         </div>
//         <button className="bg-orange-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-orange-700 transition shadow-sm">
//           + إضافة منتج جديد
//         </button>
//       </div>

//       {/* جدول المنتجات */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-right">
//           <thead className="bg-gray-50 text-gray-600 text-sm">
//             <tr>
//               <th className="px-6 py-4 font-bold">المنتج</th>
//               <th className="px-6 py-4 font-bold">الفئة</th>
//               <th className="px-6 py-4 font-bold">السعر</th>
//               <th className="px-6 py-4 font-bold">الحالة</th>
//               <th className="px-6 py-4 font-bold text-center">إجراءات</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {products.map((product) => (
//               <tr key={product.id} className="hover:bg-gray-50 transition">
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={product.images[0]}
//                       alt={product.name}
//                       className="w-12 h-12 object-cover rounded-lg border"
//                     />
//                     <span className="font-bold text-gray-800">
//                       {product.name}
//                     </span>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
//                     {product.category || "إلكترونيات"}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 font-black text-orange-600">
//                   ${product.price}
//                 </td>
//                 <td className="px-6 py-4">
//                   <span className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
//                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                     نشط
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex justify-center gap-3">
//                     <button
//                       className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition"
//                       title="تعديل"
//                     >
//                       📝
//                     </button>
//                     <button
//                       className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition"
//                       title="حذف"
//                     >
//                       🗑️
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* تنبيه بسيط في الأسفل */}
//       {products.length === 0 && (
//         <div className="p-20 text-center text-gray-500">
//           لا توجد منتجات حالياً.. ابدأ بإضافة منتجك الأول!
//         </div>
//       )}
//     </div>
//   );
// };

// export default SellerProductList;

"use client";

import React from "react";
import { products } from "@/assets/data"; // Fetching products from local data file

const SellerProductList = () => {
  return (
    <div
      className="bg-white rounded-2xl shadow-sm border overflow-hidden"
      dir="ltr"
    >
      {/* Header Section */}
      <div className="p-6 border-b flex justify-between items-center bg-gray-50/50">
        <div className="text-left">
          <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight">
            My Products
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            View and manage all your items listed in the store
          </p>
        </div>
        <button className="bg-orange-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-orange-700 transition shadow-sm whitespace-nowrap">
          + Add New Product
        </button>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-bold">Product</th>
              <th className="px-6 py-4 font-bold">Category</th>
              <th className="px-6 py-4 font-bold">Price</th>
              <th className="px-6 py-4 font-bold">Status</th>
              <th className="px-6 py-4 font-bold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 transition duration-200"
              >
                {/* Product Name & Image */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-lg border border-gray-100"
                    />
                    <span className="font-bold text-gray-800 text-sm">
                      {product.name}
                    </span>
                  </div>
                </td>

                {/* Category */}
                <td className="px-6 py-4">
                  <span className="text-[11px] font-bold bg-gray-100 px-2.5 py-1 rounded-full text-gray-500 uppercase tracking-tighter">
                    {product.category || "Electronics"}
                  </span>
                </td>

                {/* Price */}
                <td className="px-6 py-4 font-black text-gray-900">
                  ${product.price}
                </td>

                {/* Status Indicator */}
                <td className="px-6 py-4">
                  <span className="flex items-center gap-1.5 text-green-600 text-xs font-bold uppercase">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Active
                  </span>
                </td>

                {/* Actions (Edit/Delete) */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      className="p-2 hover:bg-orange-50 rounded-lg text-gray-400 hover:text-orange-600 transition"
                      title="Edit Product"
                    >
                      📝
                    </button>
                    <button
                      className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition"
                      title="Delete Product"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State Message */}
      {products.length === 0 && (
        <div className="p-20 text-center text-gray-500">
          No products found. Start by adding your first product!
        </div>
      )}
    </div>
  );
};

export default SellerProductList;
