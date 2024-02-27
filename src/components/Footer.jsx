// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-yellow-700 text-white py-14 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Products Section */}
        <div  className='mb-0'>  
          <ul>
            <li className='mb-6'><a href="/product1">Product </a></li>
            <li className='mb-6'><a href="/product1">Project</a></li>
            <li  className='mb-6'><a href="/product1">Features</a></li>
            <li  className='mb-6'><a href="/product2">Contact </a></li>
            {/* Add more product link as needed */}
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Download App</h4>
          <p  className='mb-6'>Download our app to access exclusive features.</p>
          <button className="bg-black text-white px-4 py-2 rounded mt-2 mb-6">Download Now</button>
        </div>

        {/* Social Links Section */}
        <div className="col-span-1">
          <h4 className="text-xl font-bold mb-4">Social Links</h4>
          <ul>
            <li className="mb-2 hover:bg-gray-600 p-2 rounded transition">
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Facebook
              </a>
            </li>
            <li className="mb-2 hover:bg-gray-600 p-2 rounded transition">
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                Twitter
              </a>
            </li>
            {/* Add more social links as needed */}
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Address</h4>
          <p>123 Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
