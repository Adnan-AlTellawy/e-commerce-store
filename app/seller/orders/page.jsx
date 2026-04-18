// 'use client';
// import React, { useEffect, useState } from "react";
// import { assets, orderDummyData } from "@/assets/assets";
// import Image from "next/image";
// import { useAppContext } from "@/context/AppContext";
// import Footer from "@/components/seller/Footer";
// import Loading from "@/components/Loading";

// const Orders = () => {

//     const { currency } = useAppContext();

//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchSellerOrders = async () => {
//         setOrders(orderDummyData);
//         setLoading(false);
//     }

//     useEffect(() => {
//         fetchSellerOrders();
//     }, []);

//     return (
//         <div className="flex-1 h-screen overflow-scroll flex flex-col justify-between text-sm">
//             {loading ? <Loading /> : <div className="md:p-10 p-4 space-y-5">
//                 <h2 className="text-lg font-medium">Orders</h2>
//                 <div className="max-w-4xl rounded-md">
//                     {orders.map((order, index) => (
//                         <div key={index} className="flex flex-col md:flex-row gap-5 justify-between p-5 border-t border-gray-300">
//                             <div className="flex-1 flex gap-5 max-w-80">
//                                 <Image
//                                     className="max-w-16 max-h-16 object-cover"
//                                     src={assets.box_icon}
//                                     alt="box_icon"
//                                 />
//                                 <p className="flex flex-col gap-3">
//                                     <span className="font-medium">
//                                         {order.items.map((item) => item.product.name + ` x ${item.quantity}`).join(", ")}
//                                     </span>
//                                     <span>Items : {order.items.length}</span>
//                                 </p>
//                             </div>
//                             <div>
//                                 <p>
//                                     <span className="font-medium">{order.address.fullName}</span>
//                                     <br />
//                                     <span >{order.address.area}</span>
//                                     <br />
//                                     <span>{`${order.address.city}, ${order.address.state}`}</span>
//                                     <br />
//                                     <span>{order.address.phoneNumber}</span>
//                                 </p>
//                             </div>
//                             <p className="font-medium my-auto">{currency}{order.amount}</p>
//                             <div>
//                                 <p className="flex flex-col">
//                                     <span>Method : COD</span>
//                                     <span>Date : {new Date(order.date).toLocaleDateString()}</span>
//                                     <span>Payment : Pending</span>
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>}
//             <Footer />
//         </div>
//     );
// };

// export default Orders; هذا هذا

// "use client";

// import React from "react";

// const SellerOrders = () => {
//   // بيانات وهمية لمحاكاة الطلبات التي وصلت للبائع
//   const sellerOrders = [
//     {
//       id: "ORD-7721",
//       customer: "أحمد علي",
//       date: "2026-03-28",
//       total: 250,
//       status: "قيد المعالجة",
//       items: 2,
//     },
//     {
//       id: "ORD-8840",
//       customer: "سارة محمود",
//       date: "2026-03-30",
//       total: 120,
//       status: "تم الشحن",
//       items: 1,
//     },
//     {
//       id: "ORD-9912",
//       customer: "خالد حسن",
//       date: "2026-03-31",
//       total: 540,
//       status: "ملغي",
//       items: 4,
//     },
//   ];

//   // دالة لتغيير لون الحالة
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "تم الشحن": return "bg-green-100 text-green-700";
//       case "قيد المعالجة": return "bg-blue-100 text-blue-700";
//       case "ملغي": return "bg-red-100 text-red-700";
//       default: return "bg-gray-100 text-gray-700";
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
//       <div className="p-6 border-b flex justify-between items-center">
//         <h2 className="text-xl font-black text-gray-800">إدارة طلبات العملاء</h2>
//         <span className="text-sm text-gray-500 font-bold bg-gray-100 px-3 py-1 rounded-full">
//           إجمالي الطلبات: {sellerOrders.length}
//         </span>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-right">
//           <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
//             <tr>
//               <th className="px-6 py-4 font-bold">رقم الطلب</th>
//               <th className="px-6 py-4 font-bold">العميل</th>
//               <th className="px-6 py-4 font-bold">التاريخ</th>
//               <th className="px-6 py-4 font-bold">القطع</th>
//               <th className="px-6 py-4 font-bold">الإجمالي</th>
//               <th className="px-6 py-4 font-bold">الحالة</th>
//               <th className="px-6 py-4 font-bold">إجراءات</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {sellerOrders.map((order) => (
//               <tr key={order.id} className="hover:bg-gray-50 transition">
//                 <td className="px-6 py-4 font-bold text-blue-600">{order.id}</td>
//                 <td className="px-6 py-4 text-gray-700">{order.customer}</td>
//                 <td className="px-6 py-4 text-gray-500 text-sm">{order.date}</td>
//                 <td className="px-6 py-4">{order.items}</td>
//                 <td className="px-6 py-4 font-black">${order.total}</td>
//                 <td className="px-6 py-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
//                     {order.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4">
//                   <button className="text-sm font-bold text-orange-600 hover:underline">
//                     تفاصيل
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SellerOrders;

"use client";

import React from "react";

const SellerOrders = () => {
  // Mock data for seller's orders translated to English
  const sellerOrders = [
    {
      id: "ORD-7721",
      customer: "Ahmed Ali",
      date: "2026-03-28",
      total: 250,
      status: "Processing",
      items: 2,
    },
    {
      id: "ORD-8840",
      customer: "Sarah Mahmoud",
      date: "2026-03-30",
      total: 120,
      status: "Shipped",
      items: 1,
    },
    {
      id: "ORD-9912",
      customer: "Khaled Hassan",
      date: "2026-03-31",
      total: 540,
      status: "Cancelled",
      items: 4,
    },
  ];

  // Helper to determine status badge colors
  const getStatusColor = (status) => {
    switch (status) {
      case "Shipped":
        return "bg-green-100 text-green-700";
      case "Processing":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-sm border overflow-hidden"
      dir="ltr"
    >
      {/* Header Section */}
      <div className="p-6 border-b flex justify-between items-center bg-white">
        <h2 className="text-xl font-black text-gray-800">Customer Orders</h2>
        <span className="text-sm text-gray-500 font-bold bg-gray-100 px-3 py-1 rounded-full">
          Total Orders: {sellerOrders.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-bold">Order ID</th>
              <th className="px-6 py-4 font-bold">Customer</th>
              <th className="px-6 py-4 font-bold">Date</th>
              <th className="px-6 py-4 font-bold">Items</th>
              <th className="px-6 py-4 font-bold">Total</th>
              <th className="px-6 py-4 font-bold">Status</th>
              <th className="px-6 py-4 font-bold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sellerOrders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4 font-bold text-orange-600">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {order.customer}
                </td>
                <td className="px-6 py-4 text-gray-500 text-sm">
                  {order.date}
                </td>
                <td className="px-6 py-4 text-gray-600">{order.items}</td>
                <td className="px-6 py-4 font-black text-gray-900">
                  ${order.total}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerOrders;
