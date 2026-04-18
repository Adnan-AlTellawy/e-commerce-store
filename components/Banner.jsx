export default function Banner() {
  return (
    <section className="px-[5%] py-10" dir="ltr">
      <div className="bg-orange-600 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 md:p-20 relative shadow-2xl">
        <div className="text-white space-y-4 z-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Exclusive Offers <br /> Up to 50% Off
          </h2>
          <p className="text-orange-100 text-lg">
            Don't miss the chance to get the latest devices at incredible
            prices.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-black text-lg shadow-lg hover:scale-105 transition">
            Shop Now
          </button>
        </div>

        <div className="mt-10 md:mt-0 relative group">
          <img
            src="/images/hero-watch.jpg"
            alt="Offer"
            className="h-64 md:h-80 object-contain drop-shadow-2xl group-hover:rotate-6 transition duration-500"
          />
        </div>
        <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
}
