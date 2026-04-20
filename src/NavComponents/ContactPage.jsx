import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactPage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("bipinstonecarving", "template_qb5txrn", formRef.current, "JGsP0jtw9foaqy3Rr")
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("Failed to send message.");
      });
  };
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white pt-[150px] pb-24 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">Contact Us</h2>
        <p className="mt-4 text-gray-400 text-lg">
          We're here to help! Feel free to reach out with questions, custom orders, or feedback.
        </p>
      </div>

      {/* Contact Details + Form */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: Info */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg p-8 space-y-6 border border-white/10">
          <h3 className="text-2xl font-bold text-primary mb-4">Get in Touch</h3>
          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-secondary" /> Kathmandu, Dakshinkali Ward-2, Gwaldaha</p>
            <p className="flex items-center gap-3"><FaEnvelope className="text-secondary" /> <a href="mailto:nagarkotibipin07@gmail.com" className="hover:underline">nagarkotibipin07@gmail.com</a></p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-secondary" /> <a href="tel:+9779840248823" className="hover:underline">+977-9840248823</a></p>
            <p className="flex items-center gap-3"><FaClock className="text-secondary" /> Mon - Sat: 9 AM – 6 PM</p>
          </div>

          <div className="pt-6">
            <h4 className="text-lg font-semibold mb-2 text-primary">Follow us</h4>
            <div className="flex gap-5">
              {[
                { link: "https://facebook.com", icon: "facebook-new.png" },
                { link: "https://linkedin.com", icon: "linkedin-2.png" },
                { link: "https://instagram.com", icon: "instagram-new.png" },
                { link: "https://messenger.com", icon: "facebook-messenger--v2.png" },
                { link: "https://twitter.com", icon: "twitter.png" },
              ].map((item, idx) => (
                <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <img src={`https://img.icons8.com/fluent/30/ffffff/${item.icon}`} alt="icon" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-secondary text-black font-bold rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-16 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-white/10">
        <iframe
          className="w-full h-96 md:h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767.3770386060878!2d85.28593713886443!3d27.632132170343912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17c223a27daf%3A0x8ee5e7e60387c0e0!2sGwaldaha%2C%20Dakshinkali%2044600!5e0!3m2!1sen!2snp!4v1738158222587!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
