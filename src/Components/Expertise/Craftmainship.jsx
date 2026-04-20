import React from "react";
import { craftsmanshipData } from "../../MockData/craftsmanshipData ";
import { useNavigate } from "react-router-dom";

const Craftmanship = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/craftmanship/${id}`);
  };

  return (
    <section className="bg-black text-gray-100 py-16 sm:py-20 lg:py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* TITLE SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary mb-5 leading-tight">
            Expressions in Stones
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            At{" "}
            <span className="font-semibold text-secondary">
              Bipin Stone Carving
            </span>
            , we shape stories into stone — honoring tradition, elevating
            artistry, and preserving time through every detail.
          </p>
        </div>
        
        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-8">
          {craftsmanshipData.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") &&
                handleNavigate(item.id)
              }
              className="group relative bg-black/40 backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`View craftsmanship: ${item.title}`}
            >
              {/* IMAGE */}
              <div className="aspect-[4/5] ">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full  h-full object-cover  "
                />
              </div>

              {/* DARK GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

              {/* HOVER CONTENT */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 ">
                <span className="text-white text-sm sm:text-base font-medium border border-white px-4 py-2 rounded-full backdrop-blur-md">
                  View Details
                </span>
              </div>

              {/* TITLE */}
              <div className=" bottom-0 w-full p-4 text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-primary ">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Craftmanship;