import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo/logo.png'
import logo1 from '../assets/logo/logo2.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
             <img className={'h-16 md:h-20 w-16 md:w-20'} src={isScrolled ? logo : logo1} alt="" />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  const section = document.querySelector(item.href);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`font-medium transition-colors hover:text-rose-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
           <div className="px-4 hidden md:block">
                <a href="https://www.instagram.com/kasiacademy" className="btn-primary w-full inline-block text-center">View Portfolio</a>
              </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    const section = document.querySelector(item.href);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-gray-700 hover:text-rose-500 font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4">
                <button 
                  onClick={() => {
                    const coursesSection = document.getElementById('courses');
                    if (coursesSection) {
                      coursesSection.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }
                  }} 
                  className="btn-primary w-full inline-block text-center"
                >
                  Explore Courses
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;