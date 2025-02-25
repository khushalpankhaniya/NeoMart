import React from "react";
import { FaShippingFast, FaLock, FaHeadset, FaExchangeAlt, FaTags, FaThumbsUp } from "react-icons/fa";

const InfoSection = () => {
  const infoSection = [
    {
      icon: <FaShippingFast className="text-blue-500 text-4xl" />,
      title: "Fast & Free Shipping",
      desc: "Get your orders delivered quickly with our express shipping service.",
    },
    {
      icon: <FaLock className="text-green-500 text-4xl" />,
      title: "Secure Payment",
      desc: "Your transactions are safe with our top-notch security system.",
    },
    {
      icon: <FaHeadset className="text-red-500 text-4xl" />,
      title: "24/7 Customer Support",
      desc: "Our team is available round the clock to assist you.",
    },
    {
      icon: <FaExchangeAlt className="text-purple-500 text-4xl" />,
      title: "Easy Returns",
      desc: "Hassle-free returns within 30 days of purchase.",
    },
    {
      icon: <FaTags className="text-yellow-500 text-4xl" />,
      title: "Best Deals & Discounts",
      desc: "Enjoy amazing discounts on your favorite products.",
    },
    {
      icon: <FaThumbsUp className="text-pink-500 text-4xl" />,
      title: "Quality Assurance",
      desc: "We guarantee high-quality products for your satisfaction.",
    },
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-32 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {infoSection.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 bg-gray-50"
          >
            {item.icon}
            <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
            <p className="text-gray-600 text-center mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
