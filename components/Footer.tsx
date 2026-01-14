import React from 'react';
import { Phone, MapPin, Clock, User } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-idle-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout: Split into Left (Info) and Right (Map) for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 items-start">
          
          {/* Left Column: Brand & Contact Grid */}
          <div className="space-y-10">
            
            {/* Brand Section */}
            <div>
              <div className="bg-white p-3 rounded-xl inline-block mb-4 shadow-lg">
                  <Logo />
              </div>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Honest inspections and reliable repairs for the San Angelo area. 
                Your local partner in automotive care.
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
                
                {/* Owner */}
                <div className="flex items-start gap-4 p-5 bg-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                    <div className="bg-gray-200 p-3 rounded-xl text-idle-dark shrink-0">
                        <User className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Owner</p>
                        <p className="font-bold text-lg">{BUSINESS_INFO.owner}</p>
                    </div>
                </div>

                {/* Call Me Directly */}
                <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="flex items-start gap-4 p-5 bg-gray-800 border border-gray-700 rounded-2xl hover:bg-gray-700/80 hover:border-idle-salmon/50 transition-all group">
                    <div className="bg-idle-salmon p-3 rounded-xl text-white shadow-lg shadow-orange-900/20 group-hover:scale-110 transition-transform shrink-0">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Call Me Directly</p>
                        <p className="text-xl font-bold text-white group-hover:text-idle-salmon transition-colors">{BUSINESS_INFO.phone}</p>
                    </div>
                </a>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-5 bg-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                    <div className="bg-idle-teal p-3 rounded-xl text-idle-dark shrink-0">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Business Hours</p>
                        <p className="font-semibold text-sm">{BUSINESS_INFO.hours}</p>
                        <p className="text-xs text-gray-400 mt-1">{BUSINESS_INFO.weekendHours}</p>
                    </div>
                </div>

                {/* Shop Address */}
                <div className="flex items-start gap-4 p-5 bg-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                    <div className="bg-idle-orange p-3 rounded-xl text-idle-dark shrink-0">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Shop Address</p>
                        <p className="font-semibold">{BUSINESS_INFO.address}</p>
                    </div>
                </div>

            </div>
          </div>

          {/* Right Column: Large Map */}
          <div className="w-full h-[400px] lg:h-[500px] bg-gray-800 rounded-3xl overflow-hidden relative shadow-2xl border border-gray-700">
            <iframe 
                title="Shop Location"
                src="https://maps.google.com/maps?q=10+Nelson+Ave,+San+Angelo,+TX+76905&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 hover:opacity-100 transition-opacity"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">San Angelo, Texas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;