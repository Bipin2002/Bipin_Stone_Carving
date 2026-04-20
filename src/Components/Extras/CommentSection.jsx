import React from 'react';

const CommentSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl border border-white/10 p-10 sm:p-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Speak With Our Team</h2>
          <p className="text-gray-300 text-lg">
            We help you express your best thoughts with the timeless elegance of stonework.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your Email"
              className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <input
            type="text"
            name="_subject"
            placeholder="Subject"
            aria-label="Subject"
            className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:ring-2 focus:ring-primary focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            aria-label="Message"
            rows="6"
            className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:ring-2 focus:ring-primary focus:outline-none"
          ></textarea>

          <div className="flex justify-between gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-primary hover:bg-secondary text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Send ➤
            </button>
            <button
              type="reset"
              className="flex-1 border border-white/30 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommentSection;
