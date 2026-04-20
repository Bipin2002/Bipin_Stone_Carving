import React from 'react'

const GardenImage = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    <div className="absolute inset-0">
      <img src="src/assets/hello.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>

    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to The Stone World!</h1>
      <p className="text-lg text-gray-300 mb-6">we help you to express your best thoughts with the help of stones.</p>
      <a href="#" className="bg-white text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Consultation</a>
    </div>
  </div>
  )
}

export default GardenImage