"use client";

import React from "react";

const Loading = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[60vh] space-y-6"
      dir="ltr"
    >
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-gray-100 border-t-orange-600 rounded-full animate-spin"></div>

        <div className="absolute w-5 h-5 bg-orange-600 rounded-full animate-ping"></div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-black text-gray-800 animate-pulse">
          Loading...
        </h2>
        <p className="text-sm text-gray-400 mt-2 font-medium">
          Bringing you the best products
        </p>
      </div>

      <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full bg-orange-600 w-1/2 animate-[shimmer_1.5s_infinite] rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
