import React from "react";
import { Link } from "react-router-dom";

const CallToActionBanner = () => {
  return (
    <section className="relative bg-white-900 text-black py-20 px-4 sm:px-8 lg:px-24 overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_white_1px,_transparent_1px)] bg-[length:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Section Label */}
        <span className="text-sm uppercase tracking-widest text-black/80">
          Start Your Journey
        </span>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Ready to Create Something{" "}
          <span className="text-black">Timeless</span>?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-black/90 max-w-3xl leading-relaxed">
          Discover how <span className="font-semibold">Bipin Stone Carving</span> brings
          elegance, heritage, and master craftsmanship into every creation.
          Let’s turn your vision into stone — built to endure generations.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-black text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-secondary hover:text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Get in Touch
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center justify-center border border-black/70 text-black font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-black"
          >
            View Our Work
          </Link>
        </div>

        {/* Trust Note */}
        <p className="mt-6 text-sm text-black/70 italic">
          Trusted by temples, architects, and collectors worldwide
        </p>
      </div>
    </section>
  );
};

export default CallToActionBanner;
