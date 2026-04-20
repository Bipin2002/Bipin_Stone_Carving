import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[87vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-700 to-blue-800">

      {/* Background Image */}
      <div className="absolute inset-0 animate-zoomSlow motion-reduce:animate-none">
        <img
          src="src/assets/buddha.jpg"
          alt="Hand-carved stone Buddha sculpture by Bipin Stone Carving"
          className="w-full h-full object-cover object-center brightness-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-10 animate-fadeUp motion-reduce:animate-none">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl mb-4">
          Welcome to <span>The Stone World</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
          We help you express your deepest thoughts with timeless stone craftsmanship.
        </p>


        {/* Social Proof */}
        <p className="mt-6 text-sm text-gray-300 italic">
          Trusted by collectors, temples, and architects worldwide
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 text-white opacity-70 animate-bounce motion-reduce:animate-none">
        ↓ Scroll
      </div>

      {/* Reduced Motion Support */}
      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            .animate-zoomSlow,
            .animate-fadeUp,
            .animate-glowPulse {
              animation: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
