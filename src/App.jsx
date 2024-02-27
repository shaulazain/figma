import React from 'react'
import styles from './style'
import {Navbar , Hero, CoreFeatures, AdditionalFeature, Card, RoadMap, CTA, Footer} from './components'



const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>    
      </div>
      {/* navbar finish */}


      {/* hero ection start hone lga  */}

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>


      <div className={` ${styles.paddingX} ${styles.flexStart}`}
      style={{ backgroundColor: '#231C1C' }}
      >
        <div className={`${styles.boxWidth}`}>
          <CoreFeatures/>
          <AdditionalFeature/>
          <Card/>
          <RoadMap/>
         <CTA/>
          <Footer/>
        </div>
      </div>





    </div>
  )
}

export default App