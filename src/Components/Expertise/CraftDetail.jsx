import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { craftsmanshipData } from "../../MockData/craftsmanshipData ";

const CraftDetail = () => {
    const { id } = useParams();
    const craft = craftsmanshipData.find(
        (item) => item.id.toString() === id
    );

    const [modalImage, setModalImage] = useState(null);

    if (!craft) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <p className="text-red-500 text-lg">Craft item not found.</p>
            </div>
        );
    }

    const renderSectionContent = (section) => {
        if (section.content) {
            return (
                <div className="space-y-4">
                    {Array.isArray(section.content)
                        ? section.content.map((p, idx) => (
                              <p key={idx} className="text-[var(--text-muted)] leading-relaxed text-lg">
                                  {p}
                              </p>
                          ))
                        : <p className="text-[var(--text-muted)] text-lg">{section.content}</p>}
                </div>
            );
        }

        if (section.steps) {
            return (
                <div className="relative border-l border-white/10 pl-6 space-y-6">
                    {section.steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            <span className="absolute -left-[10px] top-2 w-3 h-3 bg-[var(--primary)] rounded-full group-hover:scale-125 transition" />
                            <p className="text-lg text-[var(--text-muted)] group-hover:text-white transition">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>
            );
        }

        if (section.images) {
            return (
                <div className="grid md:grid-cols-3 gap-6">
                    {section.images.map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => setModalImage(img)}
                            className="cursor-pointer group overflow-hidden rounded-xl border border-white/10"
                        >
                            <img
                                src={img.url}
                                alt=""
                                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-700"
                            />
                            <div className="p-3 text-sm text-[var(--text-muted)]">
                                {img.caption}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <div className="bg-[var(--bg-dark)] text-[var(--text-light)]">

            {/* ===== HERO ===== */}
            <section
                className="relative h-[75vh] flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url(${craft.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                <div className="relative z-10 max-w-3xl px-6">
                    <h1 className="text-5xl md:text-7xl font-[Playfair_Display] text-[var(--primary)] mb-6">
                        {craft.title}
                    </h1>
                    <p className="text-lg text-[var(--text-muted)]">
                        Crafted with precision, inspired by tradition.
                    </p>
                </div>
            </section>

            {/* ===== CONTENT SECTIONS ===== */}
            <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
                {Object.values(craft.sections).map((section, idx) => (
                    <section key={idx} className="animate-fadeIn">
                        <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-[var(--primary)] mb-8 border-b border-white/10 pb-3">
                            {section.title}
                        </h2>
                        {renderSectionContent(section)}
                    </section>
                ))}
            </div>

            {/* ===== CTA ===== */}
            <section className="bg-[var(--bg-soft)] py-20 text-center px-6 border-t border-white/10">
                <h2 className="text-4xl font-[Playfair_Display] text-[var(--primary)] mb-4">
                    Request Custom Craftsmanship
                </h2>
                <p className="text-[var(--text-muted)] max-w-xl mx-auto mb-8">
                    Bring your vision to life with handcrafted precision and cultural authenticity.
                </p>

                <Link
                    to="/contact"
                    className="inline-block px-10 py-4 rounded-full bg-[var(--primary)] text-black font-semibold tracking-wide hover:scale-105 hover:shadow-xl transition"
                >
                    Request Custom Work
                </Link>
            </section>

            {/* ===== MODAL ===== */}
            {modalImage && (
                <div
                    className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
                    onClick={() => setModalImage(null)}
                >
                    <div
                        className="max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={modalImage.url}
                            alt=""
                            className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                        />
                        <p className="text-center text-[var(--text-muted)] mt-4">
                            {modalImage.caption}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CraftDetail;        