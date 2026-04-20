import React from "react";
import { FaGem, FaLeaf, FaHands } from "react-icons/fa";
import modernImage from "../../assets/modern.jpg";
import timelessImage from"../../assets/timeless.jpg";
const Banner2 = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
            Crafting Heritage in Stone
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Every stone tells a story. At <span className="text-secondary font-semibold">
              Bipin Stone Carving</span>, we transform raw stone into timeless expressions of
            faith, beauty, and architectural excellence.
          </p>
        </div>

        {/* Block 1 */}
        <div className="flex flex-col md:flex-row items-center gap-14 mb-28">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105"
              src={timelessImage}
              alt="Handcrafted stone carving showcasing timeless elegance"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Timeless Elegance, Hand-Carved
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our handcrafted stone carvings are shaped by master artisans who honor ancient
              traditions while embracing refined modern aesthetics. Each piece is carefully
              created to endure generations.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <FaHands className="text-secondary" />
                Skilled craftsmanship with meticulous detail
              </li>
              <li className="flex items-center gap-3">
                <FaGem className="text-secondary" />
                Premium natural stone materials
              </li>
              <li className="flex items-center gap-3">
                <FaLeaf className="text-secondary" />
                Sustainable and eco-conscious carving practices
              </li>
            </ul>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-14">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105"
              src= {modernImage}
              alt="Stone art designed for sacred and modern living spaces"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Designed for Sacred & Modern Spaces
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether enhancing temples, meditation spaces, gardens, or contemporary homes,
              our stone artistry brings depth, balance, and spiritual resonance to every environment.
            </p>

            {/* Emphasis Text */}
            <p className="text-sm text-gray-400 italic">
              Where devotion meets design — stone crafted with purpose.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner2;
