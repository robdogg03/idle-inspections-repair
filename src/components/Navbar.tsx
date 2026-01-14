import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../constants';
import { throttle } from '../utils/throttle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Spacer to balance the grid/flex so Logo can be truly centered */}
          <div className="hidden md:block w-48"></div>

          {/* Logo - Centered */}
          <button
            className="flex-shrink-0 cursor-pointer transform md:absolute md:left-1/2 md:-translate-x-1/2 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-idle-teal focus:ring-offset-2 rounded-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Return to top of page"
          >
            <Logo />
          </button>

          {/* Contact Button - Right Side */}
          <div className="flex items-center justify-end flex-1 md:flex-none">
            <a 
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="flex items-center gap-2 bg-idle-salmon hover:bg-idle-orange text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold shadow-lg shadow-gray-200 transition-all transform hover:scale-105"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">{BUSINESS_INFO.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;