"use client";
import { useAppContext } from "@/context/AppContext";
import ProductCard from "./ProductCard";

export default function HomeProducts() {
  const { products } = useAppContext();

  return (
    <section className="py-16 px-[5%] bg-white" dir="ltr">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">
          Best Sellers
        </h2>
        <div className="w-20 h-1 bg-orange-600 mt-2"></div>
        <p className="text-gray-500 mt-4 text-center max-w-lg">
          Explore a selected collection of our best tech products that have
          impressed thousands of our customers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.images[0]}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="border-2 border-black px-10 py-3 font-bold hover:bg-black hover:text-white transition duration-300 rounded-full">
          View All Products
        </button>
      </div>
    </section>
  );
}
