import React from "react";
import { Link } from "react-router-dom";
import InfoSection from "../components/infoSection";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white py-16 px-6 md:px-12 text-center shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-800">About NeoMart</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Your one-stop destination for quality products at unbeatable prices.
        </p>
        <div className="mt-6">
          <Link  to="/" className="text-blue-600 font-semibold hover:underline transition-all duration-200">
            ← Back to Home
          </Link>
        </div>
      </section>
      <InfoSection />
    </div>
  );
};

export default About;
