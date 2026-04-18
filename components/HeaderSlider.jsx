"use client";

import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Await!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.header_macbook_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full" dir="ltr">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pr-8 mt-10 md:mt-0 text-left w-full md:w-1/2">
              <p className="md:text-base text-orange-600 pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold text-gray-900">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 gap-2">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white font-medium hover:bg-orange-700 transition">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium text-gray-700">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center flex-1 justify-center w-full md:w-1/2">
              <Image
                className="md:w-72 w-48 object-contain"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                width={300}
                height={300}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all border-none outline-none ${
              currentSlide === index ? "bg-orange-600 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
