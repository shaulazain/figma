import React from 'react';
import Card from './Card';
import image1 from '../assets/box.png'; // Replace with your image path


const AdditionalFeature = () => {
 
  return (
    <section className="my-8 py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-10 text-center  text-amber-700 font-poppins">Additional features </h2>

        {/* Add your core features content here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className=" p-10 rounded-2xl shadow-md bg-yellow-700 mb-8 mr-4" >
            <Card image={image1}/>
            <h3 className="font-[88px] text-2xl mb-3 text-white">Spiritual NFT Moments</h3>
            <p className="text-white  h-20 p-4 rounded w-full bg-black"><span className='text-gray-500'>Objective: </span> <br />
Digital assets Islamic moments and teachings.
</p>

<p className="text-white   h-20 p-4 rounded w-full bg-black mt-3"><span className='text-gray-500'>Objective: </span><br />
Digital assets representing significant Islamic.
</p>
          </div>

          {/* Feature 2 */}
          <div className="p-10 rounded-2xl shadow-md bg-yellow-700  mb-8" >
          <Card image={image1}/>
            <h3 className=" font-[88px] text-2xl mb-3 text-white ">Hassle-Free <br /> Zakat Calculation</h3>
            <p className="text-white   h-20 p-4 rounded w-full bg-black"><span className='text-gray-500'>Objective: </span> <br />
Built-in calculator for annual Zakat contributions.</p>

<p className="text-white  h-20 p-4 rounded w-full bg-black mt-3"><span className='text-gray-500'>Objective: </span><br />
Built-in calculator for annual Zakat contributions.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-yellow-700 p-6 rounded-2xl shadow-md  mb-8 mr-4">
          <Card image={image1}/>
            <h3 className="font-[88px] text-2xl mb-3 text-white">Hajj and Umrah <br /> Planner</h3>
            <p className="text-white   h-20 p-4 rounded w-full bg-black"><span className='text-gray-500'>Objective: </span>  <br />
Resources, guides, and tools for Haj</p>

<p className="text-white   h-20 p-4 rounded w-full bg-black mt-3"><span className='text-gray-500'>Objective: </span>  <br />
Resources, guides, and tools for Haj</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-yellow-700 p-10 rounded-2xl shadow-md  mb-8">
          <Card image={image1}/>
            <h3 className="font-[88px] text-2xl mb-3 text-white">Location-Based <br /> Features</h3>
            <p className="text-white  h-20 p-4 rounded w-full bg-black max-w-fit"><span className='text-gray-500'>Objective: </span> <br />
Access local prayer times, find the nearest mosques, and discover .

</p>

<p className="text-white  h-20 p-4 rounded w-full bg-black mt-3  mb-8"><span className='text-gray-500'>Objective: </span><br />
Access local prayer times, find the nearest mosques, and discover.
</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-yellow-700 p-10 rounded-2xl shadow-md  mb-8 mr-4">
          <Card image={image1}/>
            <h3 className="font-[88px] text-2xl mb-3 text-white">Financial Ecosystem Development</h3>
            <p className="text-white   h-20 p-4 rounded w-full bg-black"> <span className='text-gray-500'>Objective: </span>Build a robust financial ecosystem for transactions within the app</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-yellow-700 p-10 rounded-2xl shadow-md  mb-8">
         
            <h3 className="font-[88px] text-2xl mb-3 text-white">Commercial  Expension</h3>
            <p className="text-white   h-20 p-4 rounded w-full bg-black">Objective: Open avenues for commerce within the app ecosystem</p>
          </div>

          {/* Add more features as needed */}
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeature;
