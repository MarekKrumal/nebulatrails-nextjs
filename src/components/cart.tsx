"use client";
import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

interface CartProps {
  title: string;
  price: string;
  duration: string;
  services: string[];
  safetyInfo: string;
  buttonText: string;
  buttonLink: string;
}

const Cart: React.FC<CartProps> = ({
  title,
  price,
  duration,
  services,
  safetyInfo,
  buttonText,
}) => {
  const locale = useLocale();
  return (
    <div className="card bg-black border border-gray-700 p-6 shadow-lg rounded-lg min-h-[550px] w-full sm:w-[350px] transition-transform duration-300 hover:scale-105">
      {/* Title */}
      <h3 className="text-white text-4xl font-extrabold uppercase text-center mb-4">
        {title}
      </h3>

      {/* Price and Duration */}
      <div className="text-center text-gray-300 mb-4">
        <p className="text-3xl font-bold text-white mb-4">{price}</p>
        <p className="text-lg text-gray-400">Duration: {duration}</p>
      </div>

      {/* Included Services */}
      <div className="mb-5 text-center">
        <h4 className="text-xl font-bold text-white mb-4">
          Included Services:
        </h4>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li
              key={index}
              className="text-gray-400 text-base hover:text-white transition-colors duration-200"
            >
              - {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Safety Information */}
      <div className="mb-8 text-center">
        <h4 className="text-xl font-bold text-white mb-2">Safety:</h4>
        <p className="text-gray-400 text-base">{safetyInfo}</p>
      </div>

      {/* Booking Button */}
      <Link
        href={`/${locale}/checkout?amount=${price.replace("$", "")}`}
        className="block w-full text-center py-3 text-lg font-semibold uppercase bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors duration-200"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default Cart;
