import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='flex justify-around align-middle items-center fixed bottom-[-100%] lg:bottom-0 h-[15vh] left-0 bg-slate-300 w-full text-white text-center'>
          <p className=' font-light text-black text-3xl'>Enjoy your shopping</p>
          <div className='flex gap-5 text-black  cursor-pointer md:border-none'>
              <FaFacebook size={30}/>
              <FaInstagram size={30}/>
              <MdEmail size={30}/>
              <FaTwitter size={30}/>
          </div>
    </div>
  )
}

export default Footer
