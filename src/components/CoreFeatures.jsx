import React from 'react';
import core1 from '../assets/core1.png'
import core2 from '../assets/core2.png'
import core3 from '../assets/core3.png'
import core4 from '../assets/core4.png'
import core5 from '../assets/core5.png'


const CoreFeatures = () => {
  return (
    <section className="my-8 py-8">
      <div className="container mx-auto ">
        <h2 className="text-4xl font-semibold  text-center text-yellow-700 mb-6">Core Features</h2>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-transparent border border-gray-300 p-4 rounded-md shadow-md ">
            <div className="border  border-gray-300 p-1 w-[72px] rounded-md mb-2 ">
              <img src={core1} alt="Feature 1" className="w-10 h-10 rounded" />
            </div>
            <h3 className='text-yellow-700 font-bold'>Islamic Activities Tracking</h3>
            <p className="text-gray-600">Daily Prayers and Devotion: Log your five daily prayers, Quran readings, and religious observances.Automated Tracking: Smart technology keeps track of your religious activities effortlessly</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-transparent border border-gray-300 p-4 rounded-md shadow-md">
            <div className="border border-gray-300 p-1 w-[72px] rounded-md mb-2">
              <img src={core2} alt="Feature 2" className="w-10 h-10 rounded" />
            </div>
            <h3 className='text-yellow-700 font-bold'>PRAY TO EARN A REVOLUTIONARY CONCEPT</h3>
            <p className="text-gray-600">Earn Rewards: Gain HSNT tokens for devotion and participation in Islamic activities.Challenges and Achievements: Special challenges to earn rewards and achieve spiritual milesto</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-transparent border border-gray-300 p-4 rounded-md shadow-md">
            <div className="border border-gray-300 w-[72px] p-1 rounded-md mb-2">
              <img src={core3} alt="Feature 3" className="w-10 h-10 rounded" />
            </div>
            <h3 className='text-yellow-700 font-bold'>Community Engagement</h3>
            <p className="text-gray-600">Connect with Believers: Join a global Muslim network, share insights, and grow in faith together.Community Challenges: Participate in communal activities to strengthen the bonds of the Ummah.</p>
          </div>

          {/* Feature 4 */}

          <div className="bg-transparent border border-gray-300 p-4 rounded-md shadow-md">
            <div className="border border-gray-300 w-[72px] p-1 rounded-md mb-2">
              <img src={core3} alt="Feature 3" className="w-10 h-10 rounded" />
            </div>
            <h3 className='text-yellow-700 font-bold'>Educational Resources</h3>
            <p className="text-gray-600">Islamic Knowledge: Access a library of Islamic teachings, history, and cultural insights.Interactive Learning: Engage with content in an interactive and immersive way, deepening your understanding and appreciation of Islamic traditions and practices</p>
          </div>

            {/* Feature 5 */}

            <div className="bg-transparent border border-gray-300 p-4 rounded-md shadow-md">
            <div className="border border-gray-300 w-[72px] p-1 rounded-md mb-2">
              <img src={core4} alt="Feature 3" className="w-10 h-10 rounded" />
            </div>
            <h3 className='text-yellow-700 font-bold'>privacy and security</h3>
            <p className="text-gray-600">protected Data: Top-notch data security and privacy measures to protect your information.Customizable Settings: Control your sharing preferences for a secure experience.</p>
          </div>

            {/* Feature 6 */}

            <div className="bg-transparent border border-gray-300 p-4 rounded-md shadow-md">
            <div className="border border-gray-300  w-[72px] p-1 rounded-md mb-2">
              <img src={core5} alt="Feature 3" className="w-10 h-10 rounded" />
            </div>
            <h3 className='text-yellow-700 font-bold'>HOLISTIC LIFESTYLE INTEGRATION</h3>
            <p className="text-gray-600">Reminders and Notifications: Timely reminders for prayers, fasting, and religious observances.
Seamless Integration: Integrate spiritual practices into daily life with intuitive app design.
</p>
          </div>


          
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
