import React from "react";

const services = [
  {
    title: "Temple Architecture",
    description: "Expertly carved stone temples with traditional motifs and divine proportions, tailored to cultural significance.",
    icon: "🏛️",
  },
  {
    title: "Garden Sculptures",
    description: "Stone animal figurines, fountains, and decorative elements to enhance outdoor serenity and aesthetic.",
    icon: "🌿",
  },
  {
    title: "Custom Stone Carvings",
    description: "Your ideas brought to life—custom statues, nameplates, and ornamental artwork carved with precision.",
    icon: "🛠️",
  },
  {
    title: "Wall Panels & Reliefs",
    description: "Intricately detailed stone panels to enhance temples, hotels, or homes with artistic narratives.",
    icon: "🖼️",
  },
  {
    title: "Restoration Work",
    description: "Reviving heritage with careful restoration of ancient stone artifacts and sculptures.",
    icon: "♻️",
  },
];


const Service = () => {
  return (

    <section className="bg-black text-white  mx-auto px-5 pt-[150px] lg:px-32 pb-24">
      {/* Hero Section */}
      <div className="text-center py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <h1 className="text-5xl font-bold text-primary mb-4 animate-fade-in-up">
          Our Stone Carving Services
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Merging traditional mastery with modern imagination. Crafted to last. Inspired by history.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-primary mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-gray-800 via-black to-gray-900 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4 text-secondary">“Stones Speak When Carved With Passion”</h2>
        <p className="text-gray-400">– Bipin, Master Sculptor</p>
      </div>


      {/* Call to Action */}
      <div className="text-center py-20 bg-primary text-black">
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Timeless Together</h2>
        <p className="mb-6 text-lg">Reach out for custom carvings, large installations, or restorations.</p>
        <a
          href="/contact"
          className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-xl transition"
        >
          Contact Us ➤
        </a>
      </div>
    </section>
  );
};

export default Service;
