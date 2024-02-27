import styles from "../style";
import { discount } from "../assets";
import mainImage from '../assets/main.jpeg';
import Button from "./Button";

const Hero = () => {
  const backgroundImageUrl = `url(${mainImage})`;
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`} 
    style={{
      backgroundImage: backgroundImageUrl,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            NUTURING FAITH THROUGH  <br className="sm:block hidden" />{" "}
            TECHNOLOGY. <br />
            <span className="text-gradient text-[82px]">FEATURES</span>{" "}
          </h1>
        
        </div>

        <h1 className="font-poppins font-semibold ss:text-[50px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          FOR HASANAT.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         Empowering  Your Spirtual Journey With Advanced Features
        </p>

        <div>
          <Button/>
        </div>
      </div>

     
      
    
    </section>
  );
};

export default Hero;