import { useState } from "react";
import styles from '../style'

import {close, logo, menu} from '../assets'
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full justify-between py-6 flex navbar items-center">
      <img src={logo} alt=""  className="w-[124px] h-[32px]"/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
       {navLinks.map((nav, index)=>(
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index ===navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white mr-10`}>
          <a href={`${nav.id}`}>
            {nav.title}
          </a>

        </li>
       ))}
      </ul>

      <div className={`sm:hidden flex flex-1 justify-end items-center ${styles.paddingY}`}>
        <img src={toggle ? close : menu} alt="Menu" className="object-contain w-[28px] h-[28px] cursor-pointer"
        onClick={()=> setToggle((prev)=> !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute rounded-xl top-20 right-0 mx-4 my-2 min-w-[140px] sidebar`}>

        <ul className="list-none flex flex-col justify-end items-center flex-1">
       {navLinks.map((nav, index)=>(
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index ===navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white mr-10`}>
          <a href={`${nav.id}`}>
            {nav.title}
          </a>

        </li>
       ))}
      </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar