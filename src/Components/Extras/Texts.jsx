import React from 'react';

const Texts = () => {
  return (
    <div className="bg-black to-black text-white py-20 px-6 flex flex-col items-center text-center space-y-8">
      <div className="space-y-2 animate-fade-in-down">
        {[
          'Stoned Cat',
          'Stoned Dog',
          'Stoned Lion',
          'Stoned Tiger',
          'Stoned Jungle',
          'Stoned Garden',
          'Stoned House',
          'Stoned Mouse',
          'Stoned Fountains',
          'Stoned Mountains',
          'Stoned Stone',
          'Ha Ha Ha!',
        ].map((line, index) => (
          <p key={index} className="text-2xl sm:text-3xl font-medium tracking-wide">
            {line},
          </p>
        ))}
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold mt-10 animate-fade-in-up">
        Everything is Stoned!
      </h1>

      <img
        src="src/assets/mandir.png"
        alt="Mandir"
        className="my-12 w-full bg-white max-w-lg  object-contain animate-zoom-in"
      />

      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 animate-fade-in-up">
        We look forward to hearing about you.......
      </h2>
    </div>
  );
};

export default Texts;
