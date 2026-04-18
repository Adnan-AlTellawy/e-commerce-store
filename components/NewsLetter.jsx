export default function NewsLetter() {
  return (
    <div className="py-20 bg-white text-center max-sm:px-4" dir="ltr">
      <h2 className="text-3xl font-bold text-gray-900">
        Subscribe now & get 20% off
      </h2>
      <p className="text-gray-500 mt-2">
        Be the first to know about our new arrivals and exclusive offers.
      </p>

      <form className="mt-8 flex justify-center max-w-lg mx-auto border border-gray-200 overflow-hidden rounded-md focus-within:border-orange-600 transition-colors">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 flex-1 outline-none text-left"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-8 py-3 uppercase text-sm font-bold hover:bg-orange-600 duration-300 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
