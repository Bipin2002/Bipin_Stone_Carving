import React from 'react';
import { Link } from 'react-router-dom';

const IntroductionSection = () => {
  return (
    <section className="bg-black border-t-2 border-b-2 border-color-white dark:bg-gray-900 py-20 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-1/2 relative">
          <img
            src="src/assets/2.png"
            alt="Stone carving demonstration"
            className="rounded-3xl shadow-2xl object-cover w-full h-auto"
          />
          <span className="absolute top-4 left-4 bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            30+ Years of Excellence
          </span>
        </div>

        <div className="w-full lg:w-1/2 text-primary space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary leading-snug">
            Crafting Stories in Stone
          </h2>

          <p className="text-lg leading-relaxed">
            At <span className="font-semibold text-primary">Bipin Stone Carving</span>, we merge
            centuries-old tradition with modern design sensibilities to craft
            awe-inspiring stone masterpieces. Located in the heart of
            <span className="italic"> Dakshinkali, Kathmandu</span>, our heritage-rich team
            specializes in temples, sculptures, home décor, and bespoke carvings.
          </p>

          <blockquote className="text-md italic border-l-4 border-primary pl-4 text-primary">
            "Each stone speaks a thousand years — we simply help it tell your story."
          </blockquote>

          <p className="text-md text-primary ">
            Whether you're designing a sacred space or a timeless outdoor feature,
            we ensure your vision is etched into stone — beautifully and forever.
          </p>

          {/* <Link to="/contact">
            <button className="mt-4 inline-block bg-primary hover:bg-secondary text-black font-semibold text-md px-6 py-3 rounded-xl shadow-md transition duration-300">
              Get In Touch With Us
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
