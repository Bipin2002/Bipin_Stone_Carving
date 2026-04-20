import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    return (
        <footer className="bg-black border-t-2 border-b-2 border-white text-white pt-12 pb-8 px-4 lg:px-20">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1  md:grid-cols-[68%_30%] gap-8 md:gap-2% lg:gap-2%">


                <div className="text-left md:text-left text-center md:text-left">
                    <h4 className="text-xl font-bold text-indigo-500 mb-4">Bipin Stone Carving</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        We specialize in hand-crafted stone carvings and sculptures, preserving the rich legacy of traditional Nepali craftsmanship while thoughtfully integrating modern design principles. Each creation is meticulously shaped by skilled artisans, reflecting generations of expertise, cultural depth, and artistic precision. Our work is designed to stand the test of time, bringing elegance, meaning, and enduring beauty to temples, homes, and public spaces alike.                    </p>
                </div>

                <div className="grid grid-cols-2  md:grid-cols-2 textgap-6">

                    <div>
                        <ul className="space-y-2 text-sm text-center md:text-right">
                            <li><Link className="hover:text-secondary transition" to="/">Top</Link></li>
                            <li><Link className="hover:text-secondary transition" to="/services">Services</Link></li>
                            <li><Link className="hover:text-secondary transition" to="/projects">Projects</Link></li>
                            <li><Link className="hover:text-secondary transition" to="/contact">Contact</Link></li>
                            {/* <li><Link className="hover:text-secondary transition" to="/journal">Journal</Link></li> */}
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2 text-sm text-center md:text-right">
                            {/* <li><Link className="hover:text-secondary transition" to="/brochure">Download Brochure</Link></li> */}
                            <li><Link className="hover:text-secondary transition" to="/terms">Terms &<br /> Conditions</Link></li>
                            <li><Link className="hover:text-secondary transition" to="/faq">FAQs</Link></li>
                            <li><Link className="hover:text-secondary transition" to="/careers">Careers</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto">
                <div className="mb-6 md:mb-0">
                    <img
                        src="src/assets/2.png"
                        alt="Bipin Stone Carving Logo"
                        className="h-28 w-auto"
                    />
                </div>
                <ul className="text-sm text-gray-400 space-y-1 text-center md:text-right">
                    <li>Kathmandu, Dakshinkali Ward-2, Gwaldaha</li>
                    <li>+977-9840248823</li>
                    <li>nagarkotibipin07@gmail.com</li>
                </ul>
            </div>

            <div className="mt-8 flex flex-col items-center space-y-4">
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
                    </a>
                    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
                    </a>
                </div>
                <div className="text-xs text-gray-500">© {new Date().getFullYear()} Bipin Stone Carving. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default FooterSection;
