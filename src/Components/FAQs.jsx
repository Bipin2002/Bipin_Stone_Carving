import { div } from 'framer-motion/client';
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
      'We are based in Gwaldaha-2, Dakshinkali, Kathmandu for its rich heritage in stone carving. You can also reach us online for national and international inquiries.',
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

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='bg-black pt-[150px] pb-24'>
 <div className="max-w-3xl mx-auto  px-6  pb-sm:px-10 bg-white dark:bg-gray-900 shadow-xl rounded-2xl py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">FAQs</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Frequently asked questions about Bipin Stone Carving.
        </p>
      </div>
      <div className="space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left text-lg font-medium text-gray-800 dark:text-gray-100 focus:outline-none"
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180 text-indigo-500' : 'rotate-0'
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
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-base leading-relaxed animate-fadeIn">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
};

export default FAQs;
