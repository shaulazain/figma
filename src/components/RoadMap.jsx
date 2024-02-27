import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import box from '../assets/box.png'
import finance  from '../assets/finance.png';
import raodmap from '../assets/raodmap.png';
import hand from '../assets/hand.png';
import cup from '../assets/cup.png';
import setting from '../assets/setting.png';
import social from '../assets/social.png';
import world from '../assets/world.png'

const RoadMap = () => {
  return (
    <>

      <h2 className="text-4xl font-semibold  text-center text-yellow-700 mb-12 leading-12">Our Roadmap to Enriching Your  <br />Spiritual Journey</h2>
      <p className='text-white text-center mb-6 '>Embark on Hasanat's ambitious journey to blend Islamic values with cutting-edge technology,<br /> enhancing both your spiritual and daily life across a comprehensive digital ecosystem.</p>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(174,113,0)' }}
        date="2011 - present"
        icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={box}
                alt="home"
                className='w-[60%] h-[60%] object-contain'
                />
              </div>}
        iconStyle={{ background: 'rgb(174,113,0)', color: 'black' }}
      >

        <h1 className="vertical-timeline-element-title">Engagement and Reward System</h1>
        <p>
        Objective: Encourage and incentivize user participation and engagement
        </p><br />
        <b>Features:</b>
        <p>Introduction of the Hasanat coin for rewarding user activities.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(174,113,0)' }}
        date="2013 - 2016"
        icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={finance}
                alt="home"
                className='w-[60%] h-[60%] object-contain'
                />
              </div>}
        iconStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title mb-2">Foundation of Spiritual Habits </h3>
        <h4 className='font-bold'>Features:</h4>
        <p>
          1. Prayer Tracking <br />
          2.Quran Reading Tracker <br />
          3.Quran Listening Tracker <br />
        </p>
      </VerticalTimelineElement>

      {/* Add more VerticalTimelineElement components as needed */}

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(174,113,0)' }}
        date="2013 - 2016"
        icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={raodmap}
                alt="home"
                className='w-[60%] h-[60%] object-contain'
                />
              </div>}
        iconStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Community Building and Enhanced Interaction</h3>
        <p>
        Objective: Strengthen community bonds through competition and shared experiences.
        </p>
        <h4 className='font-bold'>Features:</h4>
        <p>
          1. Leaderboard <br />
          2.Social sharing <br />
          3.Competition and Challenges Arena (Spirit, Mind, and Body) <br />
        </p>

      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(174,113,0)' }}
        date="2013 - 2016"
        icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={setting}
                alt="home"
                className='w-[60%] h-[60%] object-contain'
                />
              </div>}
        iconStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Event 2</h3>
        <p>
        Objective: Embed deeper social functionalities within the app to foster connectivity.
        </p>
        <h4 className='font-bold'>Features:</h4>
        <p>
          1. Expansion of social sharing capabilities and integration of more social features.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(174,113,0)' }}
        date="2013 - 2016"
        icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={cup}
                alt="home"
                className='w-[60%] h-[60%] object-contain'
                />
              </div>}
        iconStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Educational Expansion</h3>
        <p>
        Objective: Enrich users’ knowledge with Islamic educational content.
        </p>
        <h4 className='font-bold'>Features:</h4>
        <p>
          1.Launch of educational modules for Islamic learning.
        </p>
      </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(174,113,0)' }}
        date="2013 - 2016"
        icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={hand}
                alt="home"
                className='w-[60%] h-[60%] object-contain'
                />
              </div>}
        iconStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Commercial Expansion</h3>
        <p>
        Objective: Enrich users’ knowledge with Islamic educational content.
        </p>
        <h4 className='font-bold'>Features:</h4>
        <p>
          1.Launch of educational modules for Islamic learning.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(174,113,0)' }}
        date="2013 - 2016"
        icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={social}
                alt="home"
                className='w-[60%] h-[60%] object-contain'
                />
              </div>}
        iconStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Commercial Expansion</h3>
        <p>
        Objective: Enrich users’ knowledge with Islamic educational content.
        </p>
        <h4 className='font-bold'>Features:</h4>
        <p>
          1.Launch of educational modules for Islamic learning.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(174,113,0)' }}
        date="2013 - 2016"
        icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={world}
                alt="home"
                className='w-[60%] h-[60%] object-contain'
                />
              </div>}
        iconStyle={{ background: 'rgb(174,113,0)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Commercial Expansion</h3>
        <p>
        Objective: Enrich users’ knowledge with Islamic educational content.
        </p>
        <h4 className='font-bold'>Features:</h4>
        <p>
          1.Launch of educational modules for Islamic learning.
        </p>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
    </>
  );
};

export default RoadMap;
