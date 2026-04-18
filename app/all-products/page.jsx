import { products } from "@/assets/data";
import Link from "next/link";

export default function AllProducts() {
  return (
    <div className="p-8 bg-[#FDFDFD] min-h-screen" dir="ltr">
      {/* Title with decorative bar */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
          All Products
        </h1>
        <div className="w-16 h-1.5 bg-orange-600 mt-2 rounded-full"></div>
      </div>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="group border border-gray-100 bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Product Image */}
            <div className="overflow-hidden rounded-xl mb-4 bg-gray-50">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Product Info */}
            <div className="text-left">
              <h2 className="font-bold text-gray-800 mt-2 truncate text-lg">
                {item.name}
              </h2>
              <p className="text-orange-600 font-black text-xl mt-1">
                ${item.price}
              </p>
            </div>

            {/* View Details Link */}
            <Link
              href={`/product/${item.id}`}
              className="mt-4 block text-center bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors uppercase text-xs tracking-widest"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
