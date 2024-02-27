import React from 'react';
import image1 from '../assets/cta1.png'; // Replace with your image paths
import image2 from '../assets/cta2.png'; // Replace with your image paths

const BackgroundImages = () => {
  return (
    <div className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center">
      <img
        src={image1}
        alt="Background Image 1"
        className="absolute top-0 right-0 w-full h-full object-cover"
      />
      <img
        src={image2}
        alt="Background Image 2"
        className="absolute top-0 right-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default BackgroundImages;
