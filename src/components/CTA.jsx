import React from 'react';
import call from '../assets/call.png';
import ctaimage from '../assets/cta1.png';


const CTA = () => {
  // const backgroundImageUrl = `url(${ctaimage})`;
  return (
    <>

    <section className="bg-yellow-700 text-white py-10  rounded-full mb-12 mt-12 max-w-screen-sm mx-auto ">
     
      <div className="flex items-center justify-between rounded-full overflow-hidden">
        <div className="w-1/2 pl-8  text-center">
          {/* Adjusted the width to w-1/2 */}
          <p className="text-lg mb-6">Ready To </p>
          <h2 className="text-3xl font-semibold mb-4">Enhance Your Spiritual Life?</h2>
          <button className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
            Download Our App
          </button>
        </div>

        <div className="w-1/2 pr-8 ">
          {/* Circle Image */}
          <div className="rounded-full overflow-hidden h-48 w-48 bg-white ml-auto">
            <img
              src={call} // Replace with the actual path
              alt="Circle Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default CTA;
