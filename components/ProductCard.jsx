import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

export default function ProductCard({ id, image, name, price }) {
  const { addToCart, currency } = useAppContext();

  return (
    <div
      className="group border rounded-lg p-3 hover:shadow-xl transition-all duration-300"
      dir="ltr"
    >
      <Link href={`/product/${id}`}>
        <div className="overflow-hidden rounded-md">
          <img
            src={image}
            alt={name}
            className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>
        <h3 className="font-semibold text-lg mt-3 truncate text-left">
          {name}
        </h3>
      </Link>

      <div className="flex justify-between items-center mt-3">
        <span className="font-bold text-orange-600 text-xl">
          {currency}
          {price}
        </span>

        <button
          onClick={() => addToCart(id)}
          className="bg-gray-900 text-white p-2 rounded-full hover:bg-orange-600 transition flex items-center justify-center w-10 h-10"
          aria-label="Add to cart"
        >
          <span className="text-xl">+</span>
        </button>
      </div>
    </div>
  );
}
