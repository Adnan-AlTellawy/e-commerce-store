"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddAddress = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    city: "",
    street: "",
    building: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userAddress", JSON.stringify(formData));

    router.push("/order-placed");
  };

  return (
    <div
      className="px-[5%] py-12 min-h-screen bg-gray-50 flex justify-center items-start"
      dir="ltr"
    >
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-sm border">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-8 bg-orange-600 rounded-full"></div>
          <h1 className="text-2xl font-black text-gray-800">
            Add Shipping Address
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div className="md:col-span-2 text-left">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full px-4 py-3 border rounded-xl outline-none focus:border-orange-600 transition text-left"
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </div>

          {/* Phone Number */}
          <div className="text-left">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              required
              className="w-full px-4 py-3 border rounded-xl outline-none focus:border-orange-600 transition text-left"
              placeholder="e.g. +1 234 567 890"
              onChange={handleChange}
            />
          </div>

          {/* City */}
          <div className="text-left">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              required
              className="w-full px-4 py-3 border rounded-xl outline-none focus:border-orange-600 transition text-left"
              placeholder="e.g. New York"
              onChange={handleChange}
            />
          </div>

          {/* Street */}
          <div className="md:col-span-2 text-left">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Street / Area
            </label>
            <input
              type="text"
              name="street"
              required
              className="w-full px-4 py-3 border rounded-xl outline-none focus:border-orange-600 transition text-left"
              placeholder="Street name or neighborhood"
              onChange={handleChange}
            />
          </div>

          {/* Building/Apartment */}
          <div className="text-left">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Building / Apartment No.
            </label>
            <input
              type="text"
              name="building"
              className="w-full px-4 py-3 border rounded-xl outline-none focus:border-orange-600 transition text-left"
              placeholder="e.g. Apt 5, 2nd Floor"
              onChange={handleChange}
            />
          </div>

          {/* Postal Code */}
          <div className="text-left">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Postal Code (Optional)
            </label>
            <input
              type="text"
              name="postalCode"
              className="w-full px-4 py-3 border rounded-xl outline-none focus:border-orange-600 transition text-left"
              placeholder="10001"
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2 mt-4 flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 shadow-lg transition"
            >
              Confirm & Place Order
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-4 border border-gray-300 rounded-xl font-bold hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;
