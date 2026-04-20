import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Anjali Shrestha",
    feedback: "Bipin Stone Carving crafted a beautiful Shiva sculpture for our family temple. The detail and spiritual energy are unmatched.",
    location: "Lalitpur, Nepal",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "David Harrison",
    feedback: "We commissioned a custom garden fountain. The result was beyond expectations. Truly world-class craftsmanship.",
    location: "Melbourne, Australia",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sangita Maharjan",
    feedback: "Their restoration work on our 200-year-old stone gate was impeccable. Respectful of heritage and detail-oriented.",
    location: "Bhaktapur, Nepal",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-black border-t-2 border-color-white py-20 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-10 text-center">
        <h2 className="text-4xl font-bold text-primary">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Real voices from those who’ve trusted Bipin Stone Carving with their vision.
        </p>

        <div className="grid md:grid-cols-3 gap-10 pt-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <FaQuoteLeft className="text-3xl text-primary mb-4" />
              <p className="text-white dark:text-gray-300 mb-6">{t.feedback}</p>
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-2" />
              <h4 className="font-semibold text-black dark:text-white">{t.name}</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">{t.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
