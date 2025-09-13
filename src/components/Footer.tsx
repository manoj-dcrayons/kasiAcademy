import React from 'react';
import { Sparkles, Instagram, Facebook, X, Mail, Phone, Twitter } from 'lucide-react';
import logo1 from '../assets/logo/logo2.png'

const Footer = () => {


  return (
   
    <footer className=' bg-black text-white py-2'>
     <div className='flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between text-white mx-16'>
     <div>
        <img className='h-20 w-20' src={logo1} alt="" />
      </div>
{/*       <div className='list-none flex gap-3 text-sm md:text-md items-center justify-center'>
        <li className='cursor-pointer'>Cookie Policy</li> /
        <li className='cursor-pointer'> Privacy Policy</li>    /
        <li className='cursor-pointer'> Terms of Service</li> 
      </div> */}
      <div>
      <div className="flex space-x-4">
            <a href="https://www.instagram.com/kasiacademy" className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
                <Instagram className="h-5 w-5" />
             </a>
             <a href="https://facebook.com/Kasimakeupacademy/" className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
               <Facebook className="h-5 w-5" />
           </a>
           </div>
      </div>
     </div>
     <div className='flex items-center justify-center flex-wrap py-2'>
       <span className='text-gray-400 text-sm md:text-md'> © 2025 Kasi Academy. All rights reserved.</span>
     </div>
    </footer>
  );
};

export default Footer;
