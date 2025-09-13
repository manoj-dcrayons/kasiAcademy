import { useState } from 'react';
import { Eye } from 'lucide-react';
import insta1 from "../assets/Insta/1.jpg";
import insta2 from "../assets/Insta/9.jpg";
import insta3 from "../assets/Insta/3.jpg";
import insta4 from "../assets/Insta/4.jpg";
import insta5 from "../assets/Insta/5.jpg";
import insta6 from "../assets/Insta/6.jpg";


const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'events', label: 'Events' },
    { id: 'beauty', label: 'Beauty' }
  ];
  
  const portfolioItems = [
    {
      category: 'bridal',
      image: insta1,
      featured: false
    },
    {
      category: 'bridal',
      image: insta2,
      featured: false
    },
    // {
    //   category: 'beauty',
    //   image: insta2,
    //   featured: false
    // },
    {
      category: 'bridal',
      image: insta3,
      featured: false
    },
    {
      category: 'events',
      image: insta4,
      featured: false
    },
    {
      category: 'events',
      image: insta5,
      featured: false
    },
    {
      category: 'beauty',
      image: insta6,
      featured: false
    }
  ];
  
  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left md:text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio
            <span className="gradient-text"> Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of stunning makeup artistry, from intimate bridal moments 
            to high-fashion editorial shoots. Each look tells a unique story.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-rose-500 border border-gray-200 hover:border-rose-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover group relative ${
                item.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden  h-80 md:h-96">
                <img
                  src={item.image}
                  alt={`${item.category} look`}
                  className={`w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110`}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full bg-white/90 text-gray-900 py-2 px-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-white transition-colors">
                      <Eye className="h-4 w-4" />
                      <span>view more</span>
                    </button>
                  </div>
                </div> */}
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
           
              
              {/* <div className="">
                <div className="flex items-center justify-between">
                  <button className="text-gray-400 hover:text-rose-500 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div> */}
            </div>
          ))}
        </div>
        <div className='mt-10'>
        <div className="px-4 my-4 justify-center items-center flex">
                <button className="btn-primary px-4 py-2"><a href="https://www.instagram.com/kasiacademy">View Portfolio</a></button>
              </div>
        </div>
      </div>
      
    </section>
  );
};

export default Portfolio;