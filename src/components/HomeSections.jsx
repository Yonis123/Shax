import React, { useState } from 'react';
import somali_image_shax from '../assets/png/somali_image_shax.png'

const HomeSections = () => {
    return (
      <section className="bg-[#F1F6F1] min-h-screen">
        <div className="max-w-[1240px] mx-auto px-4 py-8">
          {/* Section for Desktop */}
          <div className="hidden lg:flex justify-between items-center space-x-4">
            {/* Image for Desktop Section 1 */}
            <div className="flex-1 p-8 bg-white shadow-lg rounded-md">
              <img
                src={somali_image_shax}
                alt="Desktop Section 1"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
  
            {/* Desktop Section 2 */}
            <div className="flex-1 p-8 bg-white shadow-lg rounded-md">
              <h2 className="text-3xl font-bold mb-4">Desktop Section 2</h2>
              <p>This content is for large screens and above.</p>
            </div>
  
            {/* Desktop Section 3 */}
            <div className="flex-1 p-8 bg-white shadow-lg rounded-md">
              <h2 className="text-3xl font-bold mb-4">Desktop Section 3</h2>
              <p>This content is for large screens and above.</p>
            </div>
          </div>
  
          {/* Section for Tablet */}
          <div className="hidden md:flex lg:hidden flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Image for Tablet Section 1 */}
            <div className="flex-1 p-6 bg-white shadow-lg rounded-md">
              <img
                src={somali_image_shax}
                alt="Tablet Section 1"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
  
            {/* Tablet Section 2 */}
            <div className="flex-1 p-6 bg-white shadow-lg rounded-md">
              <h2 className="text-2xl font-bold mb-4">Tablet Section 2</h2>
              <p>This content is for medium-sized screens.</p>
            </div>
          </div>
  
          {/* Section for Mobile */}
          <div className="flex flex-col md:hidden space-y-4">
            {/* Image for Mobile Section 1 */}
            <div className="flex justify-center">
              <img
                src={somali_image_shax}
                alt="Mobile Section 1"
                className=" w-full h-auto object-cover rounded-md max-w-[500px]"
              />
            </div>
  
            {/* Mobile Section 2 */}
            <div className="">
              <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-5xl font-bold mb-4 pl-12">Shax</h2>
              <p style={{ fontFamily: 'Roboto, sans-serif' }} className='pl-12 p-4 pt-0 text-[#838483d7] font-extralight'>Welcome to the Shax demo! Shax is a Somali board game that has been played for centuries.  </p>
            </div>
            <div className='flex space-x-4 justify-items-start pl-12'>
            <button style={{ fontFamily: 'Roboto, sans-serif' }} className="bg-[#78c45c] text-white py-2 px-9 rounded-3xl hover:bg-[#88cc74] transition duration-300">
              Try Demo 
            </button>
            <button style={{ fontFamily: 'Roboto, sans-serif' }} className=" text-[#78c45c] py-2 px-6 transition duration-300 font-semibold">
              How to Play
            </button>
          </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HomeSections;