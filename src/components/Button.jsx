import React from 'react';

const Button = () => {
    return (
        <div className="text-center mt-4">
            <button className="bg-yellow-700 rounded-xl p-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"></path>
                </svg>
                <span className="ml-2 text-white">Watch Video</span>
            </button>
        </div>
    );
};

export default Button;
