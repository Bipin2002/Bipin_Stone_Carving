import React, { useState } from 'react';

const faqs = [
  {
    question: 'What types of stone carvings do you specialize in?',
    answer:
      'We specialize in intricate traditional stone sculptures, temple architecture, garden statues, wall panels, and custom-designed carvings made from sandstone, marble, and granite.',
  },
  {
    question: 'Do you accept custom design orders?',
    answer:
      'Yes, we love working on custom projects. You can share your ideas, sketches, or reference images, and we’ll bring them to life with precision and craftsmanship.',
  },
  {
    question: 'Where is Bipin Stone Carving located?',
    answer:
      'We are based in Gwaldaha-2, Dakshinkali, Kathmandu. You can also reach us online for national and international inquiries.',
  },
  {
    question: 'What is the typical delivery timeline for orders?',
    answer:
      'Delivery time depends on the size and complexity of the order. Smaller pieces can take 7–14 days, while large or custom sculptures may take 3–6 weeks.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship our stone carvings worldwide with careful packaging and trusted courier partners to ensure safe delivery.',
  },
  {
    question: 'How should I maintain the stone artwork?',
    answer:
      'Stone artworks are low-maintenance. Regular dusting and occasional wiping with a damp cloth is enough. Avoid harsh chemicals, especially for marble pieces.',
  },
];

const ContactAndFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl border border-white/10 p-10 sm:p-16">
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
                className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <input
              type="text"
              name="_subject"
              placeholder="Subject"
              className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:ring-2 focus:ring-primary focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="w-full rounded-xl px-4 py-3 bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:ring-2 focus:ring-primary focus:outline-none"
            ></textarea>

            <div className="flex justify-between gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
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

        <div className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl border border-white/10 p-10 sm:p-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-indigo-500 mb-2">FAQs</h2>
            <p className="text-gray-300 text-lg">
              Frequently asked questions about Bipin Stone Carving.
            </p>
          </div>
          <div className="space-y-6 divide-y divide-gray-500/20">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between w-full text-left text-lg font-medium text-white focus:outline-none"
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180 text-indigo-500' : ''
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="mt-3 text-gray-300 text-base leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndFAQSection;
