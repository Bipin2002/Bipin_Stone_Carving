import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-black text-gray-900 dark:text-gray-100">

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp"
          alt="Stone Carving"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
        <h1 className="relative text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-fade-in-up">
          About Us
        </h1>
      </div>

      <div className="container mx-auto px-6 py-16">

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Crafting Stories in Stone
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              At Bipin Stone Carving, our work is more than just sculpting — it’s
              the art of turning timeless rock into an expression of culture,
              spirituality, and human connection. For decades, we have been
              handcrafting detailed stone pieces that tell unique stories, from
              sacred statues to intricate architectural carvings. Our artisans
              blend tradition with modern techniques, ensuring that every
              creation carries the weight of history and the beauty of innovation.
              <br /><br />
              Each project begins with careful planning, an understanding of our
              client’s vision, and the dedication to bringing it to life with
              precision. Whether it’s a Buddha statue destined for a serene
              monastery, a stone mandala for meditation, or decorative carvings
              for homes, we believe in delivering pieces that stand the test of
              time — both in quality and in meaning.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img
              src="src/assets/buddha.jpg"
              alt="Stone Work"
              className="rounded-lg shadow-lg w-[80%] object-cover"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: "🎯", title: "Our Mission", desc: "Preserving heritage with exceptional craftsmanship tailored to each client’s vision." },
            { icon: "🌟", title: "Our Vision", desc: "To be a global symbol of excellence, blending tradition and innovation." },
            { icon: "💎", title: "Our Values", desc: "Heritage, Craftsmanship, Innovation, Customer Focus, Integrity, Community." }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-accent/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-secondary mb-4">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
        {/* Life at Bipin Stone Carving */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-secondary text-center mb-2">
            Life at Bipin Stone Carving
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Where tradition meets passion — and every day is a masterpiece in the making.
          </p>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src="src/assets/buddha.jpg"
              alt="Life at Bipin Stone Carving"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white text-xl md:text-2xl font-semibold text-center px-4">
                “Every stone we touch becomes a story that will outlive us.”
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'John Doe',
                title: 'Full-Stack Developer',
                image: 'https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp',
                socials: {
                  facebook: '#',
                  instagram: '#',
                  whatsapp: '#'
                }
              },
              {
                name: 'Jane Smith',
                title: 'UI/UX Designer',
                image: 'https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp',
                socials: {
                  facebook: '#',
                  instagram: '#',
                  whatsapp: '#'
                }
              },
              {
                name: 'Alex Johnson',
                title: 'Project Manager',
                image: 'https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp',
                socials: {
                  facebook: '#',
                  instagram: '#',
                  whatsapp: '#'
                }
              },
              {
                name: 'Emily Brown',
                title: 'Marketing Strategist',
                image: 'https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp',
                socials: {
                  facebook: '#',
                  instagram: '#',
                  whatsapp: '#'
                }
              }
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white/100 dark:bg-gray-900/80 backdrop-blur-lg border border-accent/30 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-56 h-72 rounded-xl mx-auto object-cover mb-4"
                  style={{ aspectRatio: "3 / 4" }}
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{member.title}</p>
               
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default AboutPage;
