import React from 'react';

const Careers = () => {
  return (
    <section className="min-h-screen bg-black-50 dark:bg-black pt-[150px] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Join the Legacy of Stone Craftsmanship
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          At Bipin Stone Carving, we combine ancient techniques with modern creativity to bring meaningful stories to life. We’re looking for passionate, dedicated individuals to help us carve the future.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {[
            {
              title: 'Stone Carving Artisan',
              type: 'Full-Time',
              location: 'Dakshinkali, Kathmandu',
              description: 'Experienced in traditional stone carving. Must have attention to detail and love for Nepali heritage art.'
            },
            {
              title: 'Sales & Customer Relations',
              type: 'Full-Time',
              location: 'Kathmandu Office',
              description: 'Engage with clients, handle sales inquiries, and provide excellent service to our global and local clients.'
            },
            {
              title: 'Marketing & Social Media Intern',
              type: 'Part-Time',
              location: 'Remote/Flexible',
              description: 'Assist in promoting our brand, managing social channels, and curating creative content.'
            }
          ].map((job, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{job.type} | {job.location}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{job.description}</p>
              <button className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Why Work With Us?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
            We believe in nurturing talent, preserving cultural heritage, and creating a supportive, inclusive workplace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-left">
            <div>
              <h4 className="text-lg font-semibold text-primary">🏛 Heritage-Driven</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Work alongside skilled artisans keeping Nepal’s history alive.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary">📈 Growth-Oriented</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Opportunities to learn, grow, and lead within the industry.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary">🌐 Global Exposure</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Collaborate on international projects and exhibitions.</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Didn’t find your role?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Send your CV and tell us how you can contribute to Bipin Stone Carving.</p>
          <a
            href="mailto:careers@bipinstonecarving.com"
            className="bg-black text-white hover:bg-gray-800 py-3 px-6 rounded-full text-lg font-semibold transition"
          >
            careers@bipinstonecarving.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Careers;
