import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Projectsdata } from '../../MockData/projectdata';
import { Link } from 'react-router-dom';


const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="container mx-auto px-5 py-10 lg:px-32 lg:py-24">
            <div className="max-w-xl mx-auto text-center xl:max-w-2xl mb-14">
                <h2 className="text-4xl sm:text-5xl mb-4  font-extrabold text-primary leading-snug">Our Works</h2>
                <p className="text-gray-600">Browse through a collection of our finest architectural and stone carving works.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Projectsdata.slice(0, 6).map((img) => (
                    <div key={img.id} className="cursor-pointer group relative" onClick={() => setSelectedImage(img)}>
                        <img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-72 object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
                            View Details
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex items-center justify-center mt-12">
                <Link 
                className="bg-yellow-300 hover:bg-yellow-400 text-black py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" 
                to='/projects'>
                    Explore More...
                </Link>

            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="bg-white p-6 rounded-2xl shadow-2xl max-w-2xl w-full text-center relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="rounded-xl mb-4 w-full max-h-[400px] object-cover"
                            />
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedImage.title}</h3>
                            <p className="text-gray-600">{selectedImage.description}</p>
                            
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-3 right-4 text-gray-500 text-xl hover:text-gray-700"
                            >
                                &times;
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GallerySection;
