  import React from 'react';
  import { Star, Award, Users } from 'lucide-react';
  import hero from '../assets/images/hero.png'
  import pbanner from '../assets/banner/pbanner.jpg'
  import mbanner from '../assets/banner/mbanner.png'

  const Hero = () => {
    return (
      // <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden pb-4">
      //   <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-gray-700">
      //     <img
      //       src={hero}
      //       alt="Professional makeup artist at work"
      //       className="w-full h-full object-cover opacity-40"
      //     />
      //   </div>
        
      //   <div className="relative z-10 max-w-7xl pt-[100px] mx-auto px-4 sm:px-6 lg:px-8 text-left md:text-center">
      //     <div className="animate-fade-in pb-2 md:py-0">
      //     {/* <div className='flex justify-center items-center flex-col'> */}
      //       <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
      //         Artistry in
      //         <span className="block bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
      //           Every Brushstroke
      //         </span>
      //       </h1>
            
      //       <p className="text-xl md:text-lg text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
      //         Discover the world of professional makeup artistry through Kasi Academy's stunning portfolio 
      //         of beauty transformations, editorial work, and luxury bridal creations.
      //       </p>
            
      //       <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
      //         <a href="#courses" className="btn-primary text-xl px-4 py-3">Explore Courses</a>
      //       </div>
            
      //       <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/90">
      //         <div className="flex items-center space-x-2">
      //           <div className="flex">
      //             {[...Array(5)].map((_, i) => (
      //               <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      //             ))}
      //           </div>
      //           <span className="font-medium">500+ Transformations</span>
      //         </div>
      //         <div className="flex items-center space-x-2">
      //           <Award className="h-5 w-5 text-rose-300" />
      //           <span className="font-medium">Award-Winning Artist</span>
      //         </div>
      //         <div className="flex items-center space-x-2">
      //           <Users className="h-5 w-5 text-rose-300" />
      //           <span className="font-medium">8+ Years Experience</span>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
        
      //   {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      //     <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
      //       <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      //     </div>
      //   </div> */}
      // </section>
      <section>
         <div className='hidden md:block'>
         <img src={pbanner} alt="" />
         </div>
         <div className='block md:hidden'>
          <img src={mbanner} />
         </div>
      </section>
    );
  };

  export default Hero;