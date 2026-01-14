import { MouseEvent } from 'react';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero = () => {
  const scrollToServices = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[70vh]">
      {/* Background Decor - Abstract shapes matching logo colors */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full max-w-7xl">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-idle-teal/5 rounded-full blur-3xl opacity-70"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-idle-salmon/5 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Location Badge - Top of hierarchy for better flow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-idle-dark text-sm font-bold tracking-wide uppercase mb-8">
           <MapPin className="w-4 h-4 text-idle-salmon" />
           Servicing the San Angelo Area
        </div>

        {/* Main Headings */}
        <h1 className="text-5xl md:text-7xl font-sans font-bold text-idle-dark leading-tight mb-6">
          Straightforward inspections and reliable <span className="text-idle-teal">repairs.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
          Honest work from an auto mechanic who has genuine passion for working on cars.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="flex items-center justify-center gap-3 bg-idle-dark hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-gray-200 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
          >
            <Phone className="w-6 h-6" />
            Call Me Directly
          </a>
          <a 
            href="#services"
            onClick={scrollToServices}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all w-full sm:w-auto"
          >
            View Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;