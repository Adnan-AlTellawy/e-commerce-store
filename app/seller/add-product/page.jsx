// neeeeeew
// "use client";
// import React from "react";
// import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/seller/Sidebar";
// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import toast from "react-hot-toast";

// const AddProduct = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <div className="flex flex-col md:flex-row">
//         <Sidebar />
//         <div className="flex-1 p-6 md:p-10">
//           <h2 className="text-xl font-bold mb-8 text-gray-800">
//             Add New Product
//           </h2>
//           <form
//             className="max-w-2xl bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <div className="mb-6 text-center md:text-left">
//               <p className="mb-2 font-medium text-gray-700">Upload Images</p>
//               <label className="inline-block cursor-pointer">
//                 <Image
//                   src={assets.upload_area}
//                   width={100}
//                   height={100}
//                   className="w-24 rounded-lg border-2 border-dashed p-2"
//                   alt="upload"
//                 />
//                 <input type="file" hidden />
//               </label>
//             </div>
//             <div className="mb-4">
//               <p className="mb-2 font-medium text-gray-700">Product Name</p>
//               <input
//                 type="text"
//                 placeholder="Type name here"
//                 className="w-full border p-3 rounded-lg outline-none focus:border-orange-600"
//               />
//             </div>
//             <div className="mb-4">
//               <p className="mb-2 font-medium text-gray-700">
//                 Product Description
//               </p>
//               <textarea
//                 rows="4"
//                 placeholder="Write details..."
//                 className="w-full border p-3 rounded-lg outline-none focus:border-orange-600"
//               ></textarea>
//             </div>
//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <div>
//                 <p className="mb-2 font-medium text-gray-700">Category</p>
//                 <select className="w-full border p-3 rounded-lg bg-white">
//                   <option>Electronics</option>
//                   <option>Fashion</option>
//                   <option>Home</option>
//                 </select>
//               </div>
//               <div>
//                 <p className="mb-2 font-medium text-gray-700">Price ($)</p>
//                 <input
//                   type="number"
//                   placeholder="0"
//                   className="w-full border p-3 rounded-lg"
//                 />
//               </div>
//             </div>
//             <button
//               onClick={() => toast.success("Added to database! (Preview Only)")}
//               className="w-full md:w-auto bg-orange-600 text-white px-12 py-3 rounded-lg font-bold hover:bg-orange-700 transition-all shadow-md active:scale-95"
//             >
//               Publish Product
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;هذا الذي كان يعمل
// "use client";
// export default function AddProduct() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("تمت محاكاة إضافة المنتج بنجاح! (هذه الواجهة للعرض فقط)");
//   };

//   return (
//     <div className="p-10 max-w-2xl mx-auto border rounded-xl bg-gray-50">
//       <h2 className="text-xl font-bold mb-5">إضافة منتج جديد (لوحة البائع)</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="اسم المنتج"
//           className="w-full p-2 border rounded"
//           required
//         />
//         <textarea
//           placeholder="وصف المنتج"
//           className="w-full p-2 border rounded"
//           rows="4"
//         ></textarea>
//         <div className="flex gap-4">
//           <input
//             type="number"
//             placeholder="السعر"
//             className="flex-1 p-2 border rounded"
//             required
//           />
//           <select className="flex-1 p-2 border rounded">
//             <option>إلكترونيات</option>
//             <option>ملابس</option>
//             <option>منزل</option>
//           </select>
//         </div>
//         <button className="w-full bg-green-600 text-white py-2 rounded font-bold">
//           نشر المنتج
//         </button>
//       </form>
//     </div>
//   );
// }

// "use client";

// import React from "react";

// export default function AddProduct() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulated success message in English
//     alert("Product add simulated successfully! (Demo mode only)");
//   };

//   return (
//     <div
//       className="p-10 max-w-2xl mx-auto border border-gray-100 rounded-2xl bg-white shadow-sm"
//       dir="ltr"
//     >
//       {/* Header Section */}
//       <div className="mb-8 text-left">
//         <h2 className="text-2xl font-black text-gray-800 tracking-tight">
//           Add New Product
//         </h2>
//         <p className="text-sm text-gray-400 mt-1">
//           Fill in the details to list a new item in your store
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Product Title */}
//         <div className="text-left">
//           <label className="block text-sm font-bold text-gray-700 mb-2">
//             Product Name
//           </label>
//           <input
//             type="text"
//             placeholder="e.g. Wireless Headphones Pro"
//             className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-orange-600 transition-all text-left"
//             required
//           />
//         </div>

//         {/* Product Description */}
//         <div className="text-left">
//           <label className="block text-sm font-bold text-gray-700 mb-2">
//             Description
//           </label>
//           <textarea
//             placeholder="Describe the main features of your product..."
//             className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-orange-600 transition-all min-h-[120px] text-left"
//             rows="4"
//           ></textarea>
//         </div>

//         {/* Price and Category Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="text-left">
//             <label className="block text-sm font-bold text-gray-700 mb-2">
//               Price ($)
//             </label>
//             <input
//               type="number"
//               placeholder="0.00"
//               className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-orange-600 transition-all text-left"
//               required
//             />
//           </div>
//           <div className="text-left">
//             <label className="block text-sm font-bold text-gray-700 mb-2">
//               Category
//             </label>
//             <select className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-orange-600 bg-white transition-all appearance-none cursor-pointer">
//               <option value="electronics">Electronics</option>
//               <option value="clothing">Clothing</option>
//               <option value="home">Home & Living</option>
//               <option value="accessories">Accessories</option>
//             </select>
//           </div>
//         </div>

//         {/* Upload Placeholder (Visual Only) */}
//         <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-orange-400 transition-colors cursor-pointer">
//           <span className="text-3xl block mb-2">📸</span>
//           <p className="text-sm text-gray-500 font-medium">
//             Click to upload product images
//           </p>
//           <p className="text-xs text-gray-400 mt-1">
//             Recommended size: 1000x1000px
//           </p>
//         </div>

//         {/* Submit Button */}
//         <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-[0.98] uppercase tracking-wider text-sm">
//           Publish Product
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import React, { useRef, useState } from "react";

export default function AddProduct() {
  const fileInputRef = useRef(null); // مرجع لمدخل الملفات المخفي
  const [image, setImage] = useState(null); // لتخزين الصورة المختارة وعرضها

  const handleImageClick = () => {
    fileInputRef.current.click(); // فتح نافذة الملفات عند الضغط على المربع
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // إنشاء رابط مؤقت لعرض الصورة المرفوعة
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Product published successfully!");
  };

  return (
    <div
      className="p-10 max-w-2xl mx-auto border border-gray-100 rounded-2xl bg-white shadow-sm"
      dir="ltr"
    >
      <div className="mb-8 text-left">
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">
          Add New Product
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Fill in the details to list a new item
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="text-left">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-orange-600 transition-all"
            required
          />
        </div>

        {/* Description */}
        <div className="text-left">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-orange-600 transition-all min-h-[120px]"
            rows="4"
          ></textarea>
        </div>

        {/* Price & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-left">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-orange-600 transition-all"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Category
            </label>
            <select className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-orange-600 bg-white cursor-pointer">
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Home & Living</option>
            </select>
          </div>
        </div>

        {/* --- قسم رفع الصور الفعال --- */}
        <div className="text-left">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Product Image
          </label>

          {/* مدخل ملفات مخفي */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <div
            onClick={handleImageClick}
            className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-orange-400 transition-all cursor-pointer overflow-hidden relative min-h-[150px] flex flex-col items-center justify-center"
          >
            {image ? (
              <img
                src={image}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50"
              />
            ) : (
              <>
                <span className="text-3xl block mb-2">📸</span>
                <p className="text-sm text-gray-500 font-medium">
                  Click to upload product images
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Recommended size: 1000x1000px
                </p>
              </>
            )}
          </div>
        </div>

        <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg uppercase tracking-wider text-sm">
          Publish Product
        </button>
      </form>
    </div>
  );
}
