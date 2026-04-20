import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Projectsdata } from "../../MockData/projectdata";
import { X } from "lucide-react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setMainImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-black text-white mx-auto px-5 pt-[150px] lg:px-32 pb-24">
      {/* Masonry Responsive Grid */}
      <style>{`
        @media (min-width: 1280px) {
          .masonry { column-count: 4; }
        }
        @media (min-width: 1024px) and (max-width: 1279px) {
          .masonry { column-count: 3; }
        }
        @media (max-width: 1023px) {
          .masonry { column-count: 2; }
        }

        .masonry { column-gap: 1rem; }
        .masonry-item { break-inside: avoid; margin-bottom: 1rem; }
      `}</style>

      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Our Beautiful Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Browse through a collection of our finest architectural and stone carving works.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="masonry">
          {Projectsdata.map((img) => (
            <div
              key={img.id}
              className="masonry-item cursor-pointer group relative overflow-hidden rounded-lg shadow-lg"
              onClick={() => {
                setSelectedImage(img);
                setMainImage(img.src);
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                <span className="bg-black/50 px-4 py-2 rounded-full">View Details</span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative bg-white p-6 rounded-3xl shadow-2xl w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {selectedImage.title}
                </h3>

                {/* Main Image */}
                <div className="mb-4">
                  <img
                    src={mainImage}
                    alt={selectedImage.title}
                    className="rounded-xl mx-auto max-h-[350px] object-contain transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-2">{selectedImage.description}</p>
                <p className="text-gray-600 mb-6">{selectedImage.description2}</p>

                {/* Carousel */}
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {selectedImage.gallery.map((thumb, index) => (
                    <img
                      key={index}
                      src={thumb}
                      alt={`Gallery ${index + 1}`}
                      className={`h-20 w-28 object-cover rounded-lg cursor-pointer border-2 transition 
                        ${mainImage === thumb ? "border-black" : "border-transparent hover:border-gray-400"}`}
                      onClick={() => setMainImage(thumb)}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
