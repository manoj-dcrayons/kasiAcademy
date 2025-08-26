import React from 'react';
import { Sparkles, Instagram, Facebook, X, Mail, Phone, Twitter } from 'lucide-react';
import logo1 from '../assets/logo/logo2.png'

const Footer = () => {
  // const quickLinks = [
  //   { name: 'About Us', href: '#about' },
  //   { name: 'Portfolio', href: '#portfolio' },
  //   { name: 'Expertise', href: '#expertise' },
  //   { name: 'Testimonials', href: '#testimonials' },
  //   { name: 'Contact', href: '#contact' }
  // ];

  // const portfolio = [
  //   { name: 'Bridal Portfolio', href: '#portfolio' },
  //   { name: 'Editorial Work', href: '#portfolio' },
  //   { name: 'Special Events', href: '#portfolio' },
  //   { name: 'Beauty Shots', href: '#portfolio' }
  // ];

  // const services = [
  //   { name: 'Makeup Artistry', href: '#expertise' },
  //   { name: 'Beauty Consultation', href: '#contact' },
  //   { name: 'Event Services', href: '#contact' },
  //   { name: 'Portfolio Shoots', href: '#contact' }
  // ];

  return (
    // <footer className="bg-gray-900 text-white">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //       <div className="space-y-6">
    //         <div className="flex items-center space-x-2">
    //           <Sparkles className="h-8 w-8 text-rose-500" />
    //           <span className="font-display text-2xl font-bold gradient-text">
    //             Kasi Academy
    //           </span>
    //         </div>
    //         <p className="text-gray-300 leading-relaxed">
    //           Professional makeup artist specializing in bridal, editorial, and special event makeup. 
    //           Creating beautiful transformations with artistry and precision.
    //         </p>
    //         <div className="flex space-x-4">
    //           <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
    //             <Instagram className="h-5 w-5" />
    //           </a>
    //           <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
    //             <Facebook className="h-5 w-5" />
    //           </a>
    //           <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
    //             <Twitter className="h-5 w-5" />
    //           </a>
    //         </div>
    //       </div>
          
    //       <div>
    //         <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
    //         <ul className="space-y-3">
    //           {quickLinks.map((link) => (
    //             <li key={link.name}>
    //               <a 
    //                 href={link.href} 
    //                 className="text-gray-300 hover:text-rose-400 transition-colors"
    //               >
    //                 {link.name}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
          
    //       <div>
    //         <h3 className="font-semibold text-lg mb-6">Portfolio</h3>
    //         <ul className="space-y-3">
    //           {portfolio.map((item) => (
    //             <li key={item.name}>
    //               <a 
    //                 href={item.href} 
    //                 className="text-gray-300 hover:text-rose-400 transition-colors"
    //               >
    //                 {item.name}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
          
    //       <div>
    //         <h3 className="font-semibold text-lg mb-6">Services</h3>
    //         <ul className="space-y-3 mb-6">
    //           {services.map((service) => (
    //             <li key={service.name}>
    //               <a 
    //                 href={service.href} 
    //                 className="text-gray-300 hover:text-rose-400 transition-colors"
    //               >
    //                 {service.name}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //         <div className="space-y-2 text-sm text-gray-300">
    //           <div className="flex items-center space-x-2">
    //             <Phone className="h-4 w-4 text-rose-400" />
    //             <span>+1 (555) 123-4567</span>
    //           </div>
    //           <div className="flex items-center space-x-2">
    //             <Mail className="h-4 w-4 text-rose-400" />
    //             <span>info@kasiacademy.com</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
        
    //     <div className="border-t border-gray-800 mt-12 pt-8">
    //       <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    //         <p className="text-gray-300 text-sm">
    //           © 2024 Kasi Academy. All rights reserved.
    //         </p>
    //         <div className="flex space-x-6 text-sm">
    //           <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
    //             Privacy Policy
    //           </a>
    //           <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
    //             Terms of Service
    //           </a>
    //           <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
    //             Cookie Policy
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className=' bg-black text-white py-2'>
     <div className='flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between text-white mx-16'>
     <div>
        <img className='h-20 w-20' src={logo1} alt="" />
      </div>
      <div className='list-none flex gap-3 text-sm md:text-md items-center justify-center'>
        <li className='cursor-pointer'>Cookie Policy</li> /
        <li className='cursor-pointer'> Privacy Policy</li>    /
        <li className='cursor-pointer'> Terms of Service</li> 
      </div>
      <div>
      <div className="flex space-x-4">
            <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
                <Instagram className="h-5 w-5" />
             </a>
             <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
               <Facebook className="h-5 w-5" />
           </a>
       <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
       <Twitter className="h-5 w-5" />
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